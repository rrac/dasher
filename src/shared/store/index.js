import { createStore } from 'redux'
import * as setters from './setters'

export default () => createStore(
  (s = { name: 'Tim' }) => s,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)