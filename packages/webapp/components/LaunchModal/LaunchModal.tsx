import { launchStoreActions, launchStoreSelectors, modalStoreActions, modalStoreSelectors } from '@bootcamp/stores';
import cn from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLaunchModalInfoByIdQuery } from '../../../graphql/src';
import { ImageGallery } from '../ImageGallery';
import { YoutubeEmbed } from '../YoutubeEmbed';

const LaunchModal: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const showLaunchModal = useSelector(modalStoreSelectors.selectIsLaunchModalOpen);
    const selectedLaunchId = useSelector(launchStoreSelectors.selectChosenLaunchId);
    const closeLaunchModal = () => dispatch(modalStoreActions.closeLaunchCardModal());
    const clearActiveLaunch = () => dispatch(launchStoreActions.clearActiveLaunch());

    const { data } = useLaunchModalInfoByIdQuery({
        variables: {
            id: selectedLaunchId,
        },
    });

    const onClose = () => {
        closeLaunchModal();
        clearActiveLaunch();
    };

    return (
        <div
            className={cn(
                {
                    hidden: !showLaunchModal,
                },
                'fixed w-screen h-screen bg-gray-800 bg-opacity-80',
                'flex flex-col items-center justify-center'
            )}
        >
            <div
                className={cn(
                    'modal-content bg-gray-900 relative w-5/6 h-full',
                    'grid h-full relative',
                    'grid-flow-col auto-cols-fr'
                )}
            >
                <div className={'col-left'}>
                    <div className={'videoPlayer flex items-center justify-center py-16'}>
                        <YoutubeEmbed videoLink={data?.launch?.links?.video_link ?? ''} />
                    </div>
                </div>
                <div className={'col-right flex flex-col w-full bg-gray-800 pt-16 pb-8 px-8 overflow-hidden'}>
                    <h2 className={'launchName text-2xl text-gray-200 pr-16'}>{data?.launch?.mission_name}</h2>
                    <h3 className={'launchDescription text-md text-gray-200 mt-8 pb-0'}>{data?.launch?.details}</h3>
                    <div className={'launchPhotos flex-1 mt-8 overflow-y-auto'}>
                        <ImageGallery imageLinks={data?.launch?.links?.flickr_images ?? []} />
                    </div>
                </div>
                <div className={'close-modal absolute top-0 right-0'}>
                    <button
                        className={'text-gray-50 hover:bg-gray-700 transition-colors duration-50 text-2xl px-6 py-4'}
                        onClick={() => onClose()}
                    >
                        {'x'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LaunchModal;
