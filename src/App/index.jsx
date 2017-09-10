import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import { Dashboard, AccountBox, Timeline } from 'material-ui-icons'

import Routes from './routes'
import { Search } from './components'

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
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    order: 1
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth
  },
  drawerHeader: {
    height: 56,
    [theme.breakpoints.up('sm')]: {
      height: 64
    },
    background: theme.palette.primary['500'],
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64
    }
  }
})

const URL_MAPPING = {
  ['/']: 'Dashboard',
  ['/account']: 'Account',
  ['/trades']: 'Trades'
}

const App = ({ classes, location }) => (
  <div className={classes.root}>
    <div className={classes.appFrame}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography type='title' color='inherit' noWrap>
            <Search />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        type='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography type='headline' color='inherit' noWrap>
            {URL_MAPPING[location.pathname] || 'Unknown!'}
          </Typography>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary='Dashboard' />
          </ListItem>
          <ListItem button component={Link} to="/account">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary='Account' />
          </ListItem>
          <ListItem button component={Link} to="/trades">
            <ListItemIcon>
              <Timeline />
            </ListItemIcon>
            <ListItemText primary='Trades' />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <Routes />
      </main>
    </div>
  </div>
)

App.displayName = 'ApplicationWrapper'

export default withRouter(withStyles(styles)(App))
