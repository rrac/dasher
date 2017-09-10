import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import MaterialDrawer from 'material-ui/Drawer'
import Typography from 'material-ui/Typography'
import { Dashboard, AccountBox, Timeline } from 'material-ui-icons'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const URL_MAPPING = {
  ['/']: 'Dashboard',
  ['/account']: 'Account',
  ['/trades']: 'Trades'
}

const drawerWidth = 240

const styles = theme => ({
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
})

const Drawer = ({ classes }) => (
  <MaterialDrawer
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
      <ListItem button component={Link} to='/'>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
      <ListItem button component={Link} to='/account'>
        <ListItemIcon>
          <AccountBox />
        </ListItemIcon>
        <ListItemText primary='Account' />
      </ListItem>
      <ListItem button component={Link} to='/trades'>
        <ListItemIcon>
          <Timeline />
        </ListItemIcon>
        <ListItemText primary='Trades' />
      </ListItem>
    </List>
  </MaterialDrawer>
)

Drawer.displayName = 'SideNavDrawer'

export default withStyles(styles)(Drawer)
