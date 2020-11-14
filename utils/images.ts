import { ImageQualityType, UnsplashItem } from "../state/images/types"

export const getImageSrc = (image: UnsplashItem, type?: ImageQualityType) => {
    let src = '';

    if (image.urls !== undefined) {
        if (type === undefined) {
            src = (image.urls.small !== undefined) ? image.urls.small : '';
        } else if (type == ImageQualityType.HIGH_QUALITY) {
            src = (image.urls.regular !== undefined) ? image.urls.regular : '';
        }
    }

    return src;
}