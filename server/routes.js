const express = require('express')
//Routers
const thermostatRouter = require('./routers/thermostat')

const router = express.Router()

// Thermostat Data Router
router.use('/thermostat', thermostatRouter)

module.exports = router
