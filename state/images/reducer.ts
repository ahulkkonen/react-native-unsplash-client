import { Reducer } from 'redux'
import { ImageState, ImagesActionTypes, UnsplashItem } from './types'

export const initialState: ImageState = {
    data: [],
    errors: undefined,
    loading: false
}

const mergeArrays = (...arrays: any[]) => {
    let jointArray: any[] = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })

    const uniqueArray = jointArray.reduce((newArray, item) =>{
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])

    return uniqueArray
}

const reducer: Reducer<ImageState> = (state = initialState, action) => {
    switch (action.type) {
        case ImagesActionTypes.FETCH_REQUEST: {        
            console.log('FETCH_REQUEST');
    
            return { ...state, loading: true }
        }
        case ImagesActionTypes.FETCH_SUCCESS: {
            /**
             * merge arrays instead of nesting them like [[<images>], [<images>]]
             */
            let newState = mergeArrays(state.data, action.payload);
        
            return { ...state, loading: false, data: newState }
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
