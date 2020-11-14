import { Reducer } from 'redux'
import { ImageState, ImagesActionTypes, UnsplashItem } from './types'

export const initialState: ImageState = {
  data: [],
  errors: undefined,
  loading: false
}

const reducer: Reducer<ImageState> = (state = initialState, action) => {
    console.log(action);

    console.log(JSON.stringify(state))

  switch (action.type) {
    case ImagesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case ImagesActionTypes.FETCH_SUCCESS: {
        /**
         * merge arrays instead of nesting them like [[<images>], [<images>]]
         */
        const oldImages = state.data.filter(image => !action.payload.data.some((newImage: UnsplashItem) => image.id === newImage.id));

        return { ...state, loading: false, data: oldImages.concat(action.payload) }
    }
    case ImagesActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as imagesReducer }
