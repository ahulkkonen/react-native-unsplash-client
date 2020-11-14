export enum ImagesActionTypes {
    FETCH_REQUEST = '@@IMAGES/FETCH_REQUEST',
    FETCH_SUCCESS = '@@IMAGES/FETCH_SUCCESS',
    FETCH_ERROR = '@@IMAGES/FETCH_ERROR'
}

export enum ImageQualityType {
    THUMB = 'thumb',
    HIGH_QUALITY = 'regular'
}

export interface ImageState {
    readonly loading: boolean
    readonly data: UnsplashItem[]
    readonly errors?: string
}
  
/**
 * Unsplash API items
 */
export type ApiResponse = Record<string, any>

export interface UnsplashItem extends ApiResponse {
    "id": string,
    "created_at": string,
    "updated_at": string,
    "width": number,
    "height": number,
    "color": string,
    "blur_hash": string,
    "downloads": number,
    "likes": number,
    "liked_by_user": boolean,
    "description": string,
    "exif": {
        "make": string,
        "model": string,
        "exposure_time": string,
        "aperture": string,
        "focal_length": string,
        "iso": number
    },
    "location": {
        "name": string,
        "city": string,
        "country": string,
        "position": {
            "latitude": number,
            "longitude": number,
        }
    },
    "current_user_collections": [ // The *current user's* collections that this photo belongs to.
        {
            "id": number,
            "title": string,
            "published_at": string,
            "last_collected_at": string,
            "updated_at": string,
            "cover_photo": null,
            "user": null
        }[]
        // ... more collections
    ],
    "urls": {
        "raw": string,
        "full": string,
        "regular": string,
        "small": string,
        "thumb": string,
    },
    "links": {
        "self": string,
        "html": string,
        "download": string,
        "download_location": string,
    },
    "user": {
        "id": string,
        "updated_at": string,
        "username": string,
        "name": string,
        "portfolio_url": string,
        "bio": string,
        "location": string,
        "total_likes": number,
        "total_photos": number,
        "total_collections": number,
        "instagram_username": string,
        "twitter_username": string,
        "links": {
            "self": string,
            "html": string,
            "photos": string,
            "likes": string,
            "portfolio": string,
        }
    }
}