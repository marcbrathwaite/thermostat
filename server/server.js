const express = require('express')
const bodyParser = require('body-parser')

// routes
const backendRouter = require('./routes')

// Create express instance
const app = express()

const BACKEND_BASEURL = '/api/v1'
app.use(BACKEND_BASEURL, backendRouter)

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  res.status(err.statusCode).json({
    statusCd: err.statusCode,
    message: err.message
  })
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
