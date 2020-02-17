import React, { useEffect, useState } from 'react'
// Components
import ThermostatStatus from './ThermostatStatus'
// Manager
import ThermostatManager from '../../../managers/ThermostatManager'

const ThermostatStatusContainer = () => {
  const thermostatManager = new ThermostatManager()
  const [outsideTemp, setOutsideTemp] = useState({
    status: 'UNINIT',
    value: null
  })
  // state for the thermostat status
  const [thermostatStatus, setThermostatStatus] = useState('off')
  // state for fan status
  const [fanStatus, setFanStatus] = useState('auto')
  // state for temperature setpoint
  const [temperature, setTemperature] = useState(20)

  useEffect(() => {
    const asynFn = async () => {
      try {
        setOutsideTemp({ status: 'LOADING' })
        // const data = await thermostatManager.getCurrentTemp('Toronto')
        // TODO: remove
        const data = { temp: 15 }
        setOutsideTemp({
          status: 'SUCCESS',
          value: data.temp
        })
      } catch (e) {
        setOutsideTemp({ status: 'ERROR' })
      }
    }
    if (outsideTemp.status === 'UNINIT') {
      asynFn()
    }
  }, [thermostatManager, outsideTemp.status])

  const thermostat = {
    value: thermostatStatus,
    handler: setThermostatStatus
  }

  const fan = {
    value: fanStatus,
    handler: setFanStatus
  }

  const tempSetPoint = {
    value: temperature,
    decrease: () => setTemperature(temperature - 1),
    increase: () => setTemperature(temperature + 1)
  }

  return (
    <ThermostatStatus
      thermostat={thermostat}
      fan={fan}
      outsideTemp={outsideTemp}
      tempSetPoint={tempSetPoint}
    />
  )
}

export default ThermostatStatusContainer
