import { UnsplashItem } from "../../types";

export enum FavoritesActionTypes {
    ADD_FAVORITE = '@@FAVORITES/ADD_FAVORITE',
    REMOVE_FAVORITE = '@@FAVORITES/REMOVE_FAVORITE',
}

export interface FavoritesState {
    readonly data: UnsplashItem[]
}
  