import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  outbreakUpdateRequested: [],
  outbreakUpdateFulfilled: ['payload']
})

export const OutbreakTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  outbreaks: null
})

/* ------------- Reducers ------------- */

export const outbreakUpdateRequested = (state, action) => {
  return state.merge({ fetching: true })
}

export const outbreakUpdateFulfilled = (state, { payload }) => {
  return state.merge({ fetching: false })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.OUTBREAK_UPDATE_REQUESTED]: outbreakUpdateRequested,
  [Types.OUTBREAK_UPDATE_FULFILLED]: outbreakUpdateFulfilled
})
