import R from 'ramda'
import { createStore } from 'redux'
import { createReducer } from './utils'
import * as setters from './setters'

const handlers =  R.values(setters).reduce((fn, curr) => {
  const actions = R.keys(curr)

  actions.forEach(action => {
    const handler = curr[action]
    
    if (R.has(action, fn)) {
      fn.push(...handler)
    } else {
      fn[action] = handler
    }
  })
  return fn
}, {})

const reducer = createReducer(handlers)

export default () => createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)