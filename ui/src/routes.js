import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Home from './components/Home'
import ControlPanel from './components/ControlPanel'

const getUIRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/control-panel" component={ControlPanel} />
    </>
  )
}

export default getUIRoutes
