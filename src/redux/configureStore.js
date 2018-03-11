import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic, rootReducer } from './root'
// import { reactReduxFirebase } from 'react-redux-firebase'
// import { firebaseConfig, config } from '../config/firebase'

const epicMiddleware = createEpicMiddleware(rootEpic)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore () {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware),
      // reactReduxFirebase(firebaseConfig, config)
    )
  )

  return store
}
