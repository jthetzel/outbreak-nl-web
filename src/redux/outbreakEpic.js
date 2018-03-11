import { ajax } from 'rxjs/observable/dom/ajax'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import { OutbreakTypes } from './outbreakRedux'
// import { apiHost } from '../Constants'
import fetchOutbreak from '../api/outbreak'

const apiHost = 'http://faker.hook.io'

const UPDATE_REQUESTED = OutbreakTypes.OUTBREAK_UPDATE_REQUESTED
const UPDATE_FULFILLED = OutbreakTypes.OUTBREAK_UPDATE_FULFILLED

const updateFulfilled = payload => ({ type: UPDATE_FULFILLED, payload })

export const outbreakEpic = (action$, store) =>
  action$.ofType(
    UPDATE_REQUESTED
  )
  .switchMap(action => fetchOutbreak())            
            .map(response => updateFulfilled(response))
