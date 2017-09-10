import React from 'react'
import { withStyles } from 'material-ui/styles'
import { Widget } from '_components'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'wrap'
  }
})

const Account = ({ classes }) => (
  <div className={classes.root}>
    <Widget />
    <Widget />
    <Widget full loading={false} />
  </div>
)

Account.displayName = 'Account'

export default withStyles(styles)(Account)
