/**
 * Helper function for formatting data sets returned from the thermostat service into a format to be displayed graphically
 * @param {Array} data - data sets from the thermostat service
 * @return {Array}  - array of points
 */

export const formatGraphData = (data) => {
  const points = []
  const { graph_data } = data[0]
  for (let i = 0; i < graph_data.length; i++) {
    const point = {
      x: graph_data[i].x,
      [data[0].id]: graph_data[i].actual
    }
    for (let j = 1; j < data.length; j++) {
      const { graph_data } = data[j]
      point[data[j].id] = graph_data[i].actual
    }
    points.push(point)
  }
  return points
}