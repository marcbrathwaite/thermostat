import meanBy from 'lodash.meanby'
import maxBy from 'lodash.maxby'
import minBy from 'lodash.minby'

// Model for thermostat data returned from the service
class ThermostatData {
  constructor(data) {
    this.dateRange = data.date
    this.data = data
    this.summary = this._generateSummary()
  }

  _generateSummary() {
    const summary = []
    this.data.point_data.forEach(point => {
      const { graph_data } = point
      summary.push({
        ...point,
        avg: this._getAverge(graph_data),
        min: this._getMin(graph_data),
        max: this._getMax(graph_data)
      })
    })
    return summary
  }

  _getAverge(pointData) {
    return meanBy(pointData, function(point) {
      return point.actual
    })
  }

  _getMin(pointData) {
    return minBy(pointData, function(point) {
      return point.actual
    })
  }

  _getMax(pointData) {
    return maxBy(pointData, function(point) {
      return point.actual
    })
  }
}

export default ThermostatData
