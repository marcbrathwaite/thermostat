import ApiClient from '../services/ApiClient'

class ThermostatManager {
  constructor() {
    this._apiClient = new ApiClient()
  }

  async getThermostatData() {
    const data = await this._apiClient.getThermostatData()
    return data
  }

  async getCurrentTemp(city) {
    const data = await this._apiClient.getCurrentTemp(city)
    return data
  }
}

export default ThermostatManager
