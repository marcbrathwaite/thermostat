import ApiClient from '../services/ApiClient'
import randomColor from 'randomcolor'

// helpers
import { formatGraphData } from './helpers/formatGraphData'

class ThermostatManager {
  constructor() {
    this._apiClient = new ApiClient()
  }

  async getThermostatData() {
    const data = await this._apiClient.getThermostatData()

    // Generate points
    const points = formatGraphData(data.summary)
    // separate graph data series and summary info
    const dataObj = data.summary.reduce(
      (acc, curr) => {
        const { id, name, avg, min, max } = curr
        acc.dataSeries.push({
          id,
          stroke: randomColor()
        })
        acc.summaryData.push({ id, name, avg, min, max })
        return acc
      },
      {
        dataSeries: [],
        summaryData: []
      }
    )
    return {
      dateRange: data.dateRange,
      ...dataObj,
      points
    }
  }

  async getCurrentTemp(city) {
    const data = await this._apiClient.getCurrentTemp(city)
    return data
  }
}

export default ThermostatManager
