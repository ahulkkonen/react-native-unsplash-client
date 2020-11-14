import { UnsplashItem } from "../state/images/types"

export const getImageSrc = (image: UnsplashItem) => {
    let src = '';

    if (image.urls !== undefined) {
        src = (image.urls.small !== undefined) ? image.urls.small : '';
    }

    return src;
}