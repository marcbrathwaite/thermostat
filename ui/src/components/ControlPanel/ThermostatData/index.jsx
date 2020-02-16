import React, { useEffect } from 'react'

// Components
import Summary from './Summary'
import Graph from './Graph'

// Managers
import ThermostatManager from '../../../managers/ThermostatManager'

const ThermostatData = () => {
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
      <Summary />
      <Graph />
    </div>
  )
}

export default ThermostatData
