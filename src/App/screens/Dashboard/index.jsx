import React from 'react'

import { withStyles } from 'material-ui/styles'
import { Widget } from './components'

const styles = {
  dashboard: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'wrap'
  }
}

const Dashboard = ({ classes }) => (
  <div className={classes.dashboard}>
    <Widget full />
    <Widget />
    <Widget />
  </div>
)

Dashboard.displayName = 'Dashboard'

export default withStyles(styles)(Dashboard)
