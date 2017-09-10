import React from 'react'

import { Widget } from './components'

const Dashboard = () => (
  <div>
    <Widget full />
    <Widget />
    <Widget />
  </div>
)

Dashboard.displayName = 'Dashboard'

export default Dashboard
