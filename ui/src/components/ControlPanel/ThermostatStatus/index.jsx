import React, { useEffect, useState } from 'react'
// Manager
import ThermostatManager from '../../../managers/ThermostatManager'

const Status = () => {
  const thermostatManager = new ThermostatManager()
  const [currentTemp, setCurrentTemp] = useState({
    status: 'UNINIT',
    value: null
  })

  const isLoading = ['UNINIT', 'LOADING'].includes(currentTemp.status)
  const isError = ['ERROR'].includes(currentTemp.status)
  useEffect(() => {
    const asynFn = async () => {
      try {
        setCurrentTemp({ status: 'LOADING' })
        const data = await thermostatManager.getCurrentTemp('hshgdsg$%')
        console.log(data)
        setCurrentTemp({
          status: 'SUCCESS',
          value: data.temp
        })
      } catch (e) {
        setCurrentTemp({ status: 'ERROR' })
      }
    }
    if (currentTemp.status === 'UNINIT') {
      asynFn()
    }
  }, [thermostatManager])

  if (isLoading) {
    return <div>Loading</div>
  }
  if (isError) {
    return <div>Error</div>
  }
  return <div>Current Temp: {currentTemp.value}</div>
}

export default Status
