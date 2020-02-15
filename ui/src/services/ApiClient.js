import axios from 'axios'

class ApiClient {
  // method for retrieving thermostat data
  async getThermostatData() {
    try {
      const res = await axios.get('api/v1/thermostat')
      return res.data
    } catch (e) {
      throw e
    }
  }
}

export default ApiClient
