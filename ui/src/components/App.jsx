import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
// Components
import AppBar from './AppBar'
import ControlPanel from './ControlPanel'

const App = ({ children }) => {

  return (
    <>
      <CssBaseline />
      <AppBar />
      <ControlPanel />
    </>
  )
}

export default App
