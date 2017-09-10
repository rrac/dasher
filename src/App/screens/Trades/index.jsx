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

const Trades = ({ classes }) => (
  <div className={classes.root}>
    <Widget full />
    <Widget />
    <Widget full loading={false} />
  </div>
)

Trades.displayName = 'Trades'

export default withStyles(styles)(Trades)
