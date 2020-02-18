import ApiClient from '../services/ApiClient'

class ThermostatManager {
  constructor() {
    this._apiClient = new ApiClient()
  }

  async getThermostatData() {
    const data = await this._apiClient.getThermostatData()
    // separate graph data and summary info
    const dataObj = data.summary.reduce(
      (acc, curr) => {
        const { id, name, unit, graph_data, avg, min, max } = curr
        acc.graphData.push({
          id,
          name,
          unit,
          graph_data
        })
        acc.summaryData.push({ id, name, unit, avg, min, max })
        return acc
      },
      {
        graphData: [],
        summaryData: []
      }
    )
    return {
      dateRange: data.dateRange,
      ...dataObj
    }
  }

  async getCurrentTemp(city) {
    const data = await this._apiClient.getCurrentTemp(city)
    return data
  }
}

export default ThermostatManager
