import React, { Switch, Route } from 'react-router-dom'

import ApplicationList from '../../pages/ApplicationList/ApplicationList'
import Home from '../../pages/Home/Home'
import ApplicationDetail from '../../pages/ApplicationDetail/ApplicationDetail'

const SwitchView = () => (
    <Switch>
        <Route path="/applications/:id/:action?" component={ApplicationDetail} />
        <Route path="/applications" component={ApplicationList} />
        <Route path="/" component={Home} />
  </Switch>
)

export default SwitchView