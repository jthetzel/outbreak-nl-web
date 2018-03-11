import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  vaccineToggled: ['vaccine']
})

export const VaccineTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  vaccines: []
})

/* ------------- Reducers ------------- */

export const vaccineToggled = (state, { vaccine }) => {
  const prevVaccines = state.vaccines
  const index = prevVaccines.indexOf(vaccine)
  console.log(prevVaccines)
  console.log(vaccine)
  console.log(index)
  const nextVaccines = (index === -1)
    ? prevVaccines.concat(vaccine)
        : prevVaccines.filter(item => item !== vaccine)
  console.log(nextVaccines)
  return state.merge({ vaccines: nextVaccines })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.VACCINE_TOGGLED]: vaccineToggled
})
