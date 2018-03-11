import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
// import { firebaseStateReducer } from 'react-redux-firebase'
import { outbreakEpic } from './outbreakEpic'

export const rootEpic = combineEpics(
  outbreakEpic
)

export const rootReducer = combineReducers({
  // firebase: firebaseStateReducer,
  outbreak: require('./outbreakRedux').reducer,
  hover: require('./hoverRedux').reducer
})
