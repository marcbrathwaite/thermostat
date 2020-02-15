import React, { useEffect } from 'react'

// Components
import ThermostatStatus from './ThermostatStatus'
import Summary from './Summary'
import Graph from './Graph'

// Managers
import ThermostatManager from '../../managers/ThermostatManager'

const ControlPanel = () => {
  const thermostatManager = new ThermostatManager()

  useEffect(() => {
    const asyncfn = async () => {
      const data = await thermostatManager.getThermostatData()
      console.log('data', data)
    }
    asyncfn()
  }, [thermostatManager])
  return (
    <div>
      <ThermostatStatus />
      <Summary />
      <Graph />
    </div>
  )
}

export default ControlPanel
