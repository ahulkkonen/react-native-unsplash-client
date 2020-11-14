import { Store, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// We'll be using Redux Devtools. We can use the `composeWithDevTools()`
// directive so we can pass our middleware along with it
import { composeWithDevTools } from 'redux-devtools-extension'

// Import the state interface and our combined reducers/sagas.
import { ApplicationState, createRootReducer, rootSaga } from './state'

export default function configureStore(history: History, initialState: ApplicationState | any): Store<ApplicationState> {
  // create the composing function for our middlewares
  const composeEnhancers = composeWithDevTools({})
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // We'll create our store with the combined reducers/sagas, and the initial Redux state that
  // we'll be passing from our entry point.
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga)
  return store
}
