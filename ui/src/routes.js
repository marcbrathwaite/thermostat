import React from 'react'
import { Route } from 'react-router-dom'

// Components
import Header from './components/Header'
import Home from './components/Home'
import ControlPanel from './components/ControlPanel'

const getUIRoutes = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/control-panel" component={ControlPanel} />
    </>
  )
}

export default getUIRoutes
