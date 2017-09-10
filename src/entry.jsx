import { AppContainer } from 'react-hot-loader';
import React from 'react'
import { render as DOMRender } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './shared/store'
import App from './App'


const store = createStore()

const rootEl = document.getElementById('mount')

const render = Component =>
  DOMRender(
    <Provider store={store}>
      <AppContainer>
          <Component />
      </AppContainer>
    </Provider>,
    rootEl
  )

render(App)
if (module.hot) module.hot.accept('./App', () => render(App))