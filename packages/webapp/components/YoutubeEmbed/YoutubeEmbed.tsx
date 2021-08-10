import React from 'react';
import { getYoutubeId } from '../../utils/youtube.utils';
import { YoutubeEmbedProps } from './YoutubeEmbed.types';

const YoutubeEmbed: React.FunctionComponent<YoutubeEmbedProps> = ({ videoLink }: YoutubeEmbedProps) => {
    const videoId = getYoutubeId(videoLink);
    return (
        <div>
            <iframe
                width={'560'}
                height={'315'}
                src={`https://www.youtube.com/embed/${videoId}`}
                title={'YouTube video player'}
                frameBorder={'0'}
                allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YoutubeEmbed;
