// Services
const thermostatService = require('../services/thermostat')
const getThermostatData = async (req, res) => {
  try {
    const data = await thermostatService.getThermostatData()
    res.json(data)
  } catch (e) {
    throw e
  }
}

module.exports = { getThermostatData }
