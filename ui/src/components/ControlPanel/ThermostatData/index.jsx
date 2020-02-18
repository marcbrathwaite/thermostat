import React, { useEffect, useState } from 'react'

// Components
import Summary from './Summary'
import Graph from './Graph'

// Managers
import ThermostatManager from '../../../managers/ThermostatManager'

const ThermostatData = () => {
  // TODO: use client directly
  const thermostatManager = new ThermostatManager()

  const [thermostatData, setThermostatData] = useState({
    status: 'UNINIT'
  })

  useEffect(() => {
    const asyncfn = async () => {
      try {
        setThermostatData({
          status: 'LOADING'
        })
        const data = await thermostatManager.getThermostatData()
        setThermostatData({
          status: 'SUCCESS',
          value: data
        })
      } catch (e) {
        setThermostatData({
          status: 'ERROR',
          error: e
        })
      }
    }
    if (thermostatData.status === 'UNINIT') {
      asyncfn()
    }
  }, [thermostatManager, thermostatData.status])
  console.log('thermostatData', thermostatData)

  return (
    <div>
      <Summary />
      <Graph />
    </div>
  )
}

export default ThermostatData
