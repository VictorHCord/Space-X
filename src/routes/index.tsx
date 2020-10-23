import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashboardPages from '../pages/DashboardPages'
import MissionsPages from '../pages/MissionsPages'

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path={'/'} exact component={DashboardPages} />
        <Route path={'/mission_start'} exact component={MissionsPages} />
      </Switch>
    </>
  )
}

export default Routes
