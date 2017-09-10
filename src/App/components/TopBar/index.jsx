import React from 'react'

import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Search from '../Search'

const drawerWidth = 240

const styles = theme => ({
  appBar: {
    position: 'absolute',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    order: 1
  }
})

const TopBar = ({ classes }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <Typography type='title' color='inherit' noWrap>
        <Search />
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(TopBar)
