import axios from 'axios'

// Models
import ThermostatData from '../models/ThermostatData'

class ApiClient {
  // method for retrieving thermostat data
  async getThermostatData() {
    try {
      const res = await axios.get('api/v1/thermostat/data')
      return new ThermostatData(res.data)
    } catch (e) {
      throw e
    }
  }

  async getCurrentTemp(city) {
    try {
      const res = await axios.get('api/v1/thermostat/current_temp', {
        params: { city }
      })
      return res.data
    } catch (e) {
      throw e
    }
  }
}

export default ApiClient
