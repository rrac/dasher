import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import * as Screens from './screens'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Screens.Dashboard} />
    <Route path='/account' component={Screens.Account} />
    <Route path='/trades' component={Screens.Trades} />
    <Route render={() => <Screens.Error code={404} />} />
  </Switch>
)

Routes.displayName = 'Routes'

export default withRouter(Routes) 
