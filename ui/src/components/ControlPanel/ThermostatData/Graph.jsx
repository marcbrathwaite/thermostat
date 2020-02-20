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

const CustomizedAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-60)"
      >
        {payload.value}
      </text>
    </g>
  )
}

const Graph = ({ dataSeries, points }) => {

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={points} margin={{
          bottom: 200
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="x"
          interval="preserveStartEnd"
          tick={<CustomizedAxisTick />}
        />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={36}/>
        {dataSeries.map((d) => {
          return (
            <Line key={d.id} type="monotone" dot={false} dataKey={d.id} stroke={d.stroke} />
          )
        })}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Graph
