import { createStore } from 'redux'
import { makeReducer } from './utils'
import * as setters from './setters'

const reducer = makeReducer(setters)

export default () => createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)