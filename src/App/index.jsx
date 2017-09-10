import React from 'react'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import { Drawer, TopBar, Content } from './components'
import Routes from './routes'

const drawerWidth = 240

const styles = theme => ({
  root: {
    width: '100%',
    minHeight: '100%',
    height: '100%',
    zIndex: 1
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
})

const App = ({ classes, location }) => (
  <div className={classes.root}>
    <div className={classes.appFrame}>
      <TopBar />
      <Drawer />
      <Content>
        <Routes />
      </Content>
    </div>
  </div>
)

App.displayName = 'ApplicationWrapper'

export default withRouter(withStyles(styles)(App))
