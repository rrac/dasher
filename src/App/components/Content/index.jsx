import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
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

const Content = ({ classes, children }) => (
  <main className={classes.content}>
    {children}
  </main>
)

export default withStyles(styles)(Content)