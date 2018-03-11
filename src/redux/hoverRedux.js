import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  hovered: ['feature']
})

export const HoverTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  feature: null,
  id: undefined
})

/* ------------- Reducers ------------- */

export const hovered = (state, { feature }) => {
  if (!feature) {
    return state.merge(INITIAL_STATE)
  }

  const prevId = state.id
  const id = feature.properties.ADMIN
  if (prevId === id) {
    return state
  }

  return state.merge({ feature, id })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOVERED]: hovered
})
