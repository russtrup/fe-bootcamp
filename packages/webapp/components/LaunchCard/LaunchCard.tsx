import { useGetLaunchByIdQuery } from '@bootcamp/graphql';
import React from 'react';
import { getYoutubeThumbnail } from '../../utils/youtube.utils';
import { LaunchCardProps } from './LaunchCard.types';

const LaunchCard: React.FunctionComponent<LaunchCardProps> = ({ id }: LaunchCardProps) => {
    const { data, loading } = useGetLaunchByIdQuery({
        variables: {
            id: id ?? '',
        },
    });

    const videoThumbnail = getYoutubeThumbnail(data?.launch?.links?.video_link ?? '');

    return (
        <button className={'w-full relative'}>
            <div className={'bg-gray-800 rounded-sm'}>
                <div className={'thumbnail-photo h-56 relative'}>
                    <div
                        className={'photo h-full w-full absolute bg-center bg-cover bg-gray-900'}
                        style={{ backgroundImage: loading ? 'none' : `url(${videoThumbnail})` }}
                    ></div>
                </div>
                <div className={'launch-name text-gray-50 px-1 py-4 text-center'}>
                    <span>{data?.launch?.mission_name ?? 'Loading...'}</span>
                </div>
            </div>
        </button>
    );
};

export default LaunchCard;
