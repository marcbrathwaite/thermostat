import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Components
import App from './components/App'

// Routes
import getUIRoutes from './routes'

ReactDOM.render(
  <Router>
    <App>{getUIRoutes()}</App>
  </Router>,
  document.getElementById('root')
)
