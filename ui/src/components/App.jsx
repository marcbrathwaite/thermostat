import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './Header'

const App = ({ children }) => {
  // TODO: CSS reset

  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  )
}

// TODO: proptypes
export default App
