const express = require('express')

// Controllers
const thermostatController = require('../controllers/thermostat')

const thermostatRouter = express.Router()

thermostatRouter.get('/data', thermostatController.getThermostatData)
thermostatRouter.get('/current_temp', thermostatController.getCurrentTemp)

module.exports = thermostatRouter
