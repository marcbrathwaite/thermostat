import axios from 'axios'
// Models
import ThermostatData from '../models/ThermostatData'
// Errors
import GetThermostatDataError from './errors/GetThermostatDataError'
import GetCurrentTempError from './errors/GetCurrentTempError'

class ApiClient {
  // method for retrieving thermostat data
  async getThermostatData() {
    try {
      const res = await axios.get('api/v1/thermostat/data')
      return new ThermostatData(res.data)
    } catch (e) {
      throw new GetThermostatDataError(e.message)
    }
  }

  async getCurrentTemp(city) {
    try {
      const res = await axios.get('api/v1/thermostat/current_temp', {
        params: { city }
      })
      return res.data
    } catch (e) {
      throw new GetCurrentTempError(e.message)
    }
  }
}

export default ApiClient
