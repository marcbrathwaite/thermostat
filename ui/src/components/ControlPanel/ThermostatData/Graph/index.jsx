import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const Graph = ({ data, dateRange }) => {
  console.log('data', data)
  // TODO: move to manager
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
  console.log(points)
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={points}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        {data.map(d => {
          return (
            <Line key={d.id} type="monotone" dataKey={d.id} stroke="#8884d8" />
          )
        })}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
