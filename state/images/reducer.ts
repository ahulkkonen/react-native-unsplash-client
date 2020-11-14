import { Reducer } from 'redux'
import { ImageState, ImagesActionTypes } from './types'

export const initialState: ImageState = {
  data: [],
  errors: undefined,
  loading: false
}

const reducer: Reducer<ImageState> = (state = initialState, action) => {
    console.log(action);

  switch (action.type) {
    case ImagesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true }
    }
    case ImagesActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: [...state.data, action.payload] }
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
