const express = require('express')

// routes
const backendRouter = require('./routes')

// Create express instance
const app = express()

const BACKEND_BASEURL = '/api/v1'
app.use(BACKEND_BASEURL, backendRouter)

const PORT = 4000
app.listen(PORT, () => {
  console.log('Server is running on port: ${PORT}')
})
