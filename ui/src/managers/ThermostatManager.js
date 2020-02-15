import ApiClient from '../services/ApiClient'

class ThermostatManager {
  constructor() {
    this._apiClient = new ApiClient()
  }

  async getThermostatData() {
    const data = await this._apiClient.getThermostatData()
    return data
  }
}

export default ThermostatManager
