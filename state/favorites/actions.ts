import { action } from 'typesafe-actions'
import { FavoritesActionTypes } from './types'
import { UnsplashItem } from "../images/types";

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const addFavorite = (payload: UnsplashItem | any) => action(FavoritesActionTypes.ADD_FAVORITE, payload)
export const removeFavorite = (payload: UnsplashItem) => action(FavoritesActionTypes.REMOVE_FAVORITE, payload)