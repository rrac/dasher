import React from 'react'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import { account } from 'store/getters'
import { Widget } from '_components'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexFlow: 'wrap'
  }
})

const Account = ({ classes, activities }) => (
  <div className={classes.root}>
    {activities.map(data => <Widget {...data} key={data.id} />)}
  </div>
)

Account.displayName = 'Account'

const StyledAccount = withStyles(styles)(Account)

const mapStateToProps = state => ({
  activities: account.recentActivity(state)
})

export default connect(mapStateToProps)(StyledAccount)
