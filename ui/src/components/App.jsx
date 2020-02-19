import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
// Components
import AppBar from './AppBar'
import ControlPanel from './ControlPanel'

const App = ({ children }) => {
  // TODO: CSS reset

  return (
    <>
      <CssBaseline />
      <AppBar />
      <ControlPanel />
    </>
  )
}

// TODO: proptypes
export default App
