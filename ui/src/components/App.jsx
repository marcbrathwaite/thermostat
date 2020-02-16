import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

const App = ({ children }) => {
  // TODO: CSS reset

  return (
    <>
      <CssBaseline />
      {children}
    </>
  )
}

// TODO: proptypes
export default App
