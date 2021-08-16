import Image from 'next/image';
import React from 'react';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: React.FunctionComponent<ImageGalleryProps> = ({ imageLinks }: ImageGalleryProps) => {
    return (
        <div className={'w-full h-full'}>
            {imageLinks.length === 0 && (
                <div className={'emptyState w-full text-center py-16'}>
                    <h4 className={'text-xl text-gray-500'}>{'No Images for this launch'}</h4>
                </div>
            )}
            <div className={'image-grid grid grid-cols-3 gap-4'}>
                {imageLinks.map((imageLink) => {
                    if (!imageLink) {
                        return null;
                    }
                    return (
                        <div className={'relative'} key={imageLink}>
                            <Image
                                alt={'image'}
                                src={imageLink}
                                loader={() => imageLink}
                                objectFit={'contain'}
                                layout={'responsive'}
                                width={160}
                                height={160}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageGallery;
