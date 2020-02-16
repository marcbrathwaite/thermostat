import React from 'react'

// Components
import ThermostatStatus from './ThermostatStatus'
import ThermostatData from './ThermostatData'

const ControlPanel = () => {
  return (
    <div>
      <ThermostatStatus />
      <ThermostatData />
    </div>
  )
}

export default ControlPanel
