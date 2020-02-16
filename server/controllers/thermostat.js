// Services
const thermostatService = require('../services/thermostat')
// Errors
const AppError = require('../errors/AppError')

const getThermostatData = async (req, res, next) => {
  try {
    const data = await thermostatService.getThermostatData()
    res.json(data)
  } catch (e) {
    next(e)
  }
}

const getCurrentTemp = async (req, res, next) => {
  try {
    const { query } = req
    const { city } = query
    if (city === undefined) {
      return next(new AppError('Missing or invalid query param. Use city', 401))
    }
    const temp = await thermostatService.getCurrentTemp(city)
    res.json({
      temp
    })
  } catch (e) {
    next(e)
  }
}

module.exports = { getThermostatData, getCurrentTemp }
