import { AppContainer } from 'react-hot-loader';
import React from 'react'
import { render as DOMRender } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createStore from './shared/store'
import App from './App'


const store = createStore()

const rootEl = document.getElementById('mount')

const theme = createMuiTheme()

const render = Component =>
  DOMRender(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <Router>
            <Component />
          </Router>
        </AppContainer>
      </MuiThemeProvider>
    </Provider>,
    rootEl
  )

render(App)
if (module.hot) module.hot.accept('./App', () => render(App))