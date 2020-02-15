const axios = require('axios').default

const getThermostatData = async () => {
  try {
    const res = await axios.get(
      'https://raw.githubusercontent.com/ParityInc/backend-assignment/master/thermostat.json'
    )
    return res.data
  } catch (e) {
    throw e
  }
}

module.exports = { getThermostatData }
