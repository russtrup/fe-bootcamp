export const getYoutubeId = (videoLink: string) => {
    const url1 = 'https://www.youtube.com/watch?v=';
    const url2 = 'https://youtu.be/';

    let base: string;

    if (!videoLink) {
        return '';
    } else if (videoLink.indexOf(url1) >= 0) {
        base = url1;
    } else {
        base = url2;
    }

    const ytId = videoLink.substring(base.length);
    return ytId;
};

export const getYoutubeThumbnail = (videoLink: string): string => {
    const ytId = getYoutubeId(videoLink);
    return `https://i.ytimg.com/vi/${ytId}/maxresdefault.jpg`;
};
