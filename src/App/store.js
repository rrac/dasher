import { createStore } from 'redux'

export default () => createStore(
  (s = {}) => s,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)