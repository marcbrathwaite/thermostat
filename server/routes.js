const express = require('express')
// Controllers
const thermostatController = require('./controllers/thermostat')

const router = express.Router()

// Thermostat Data Router
router.get('/thermostat', thermostatController.getThermostatData)

module.exports = router
