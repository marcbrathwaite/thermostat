import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

// Components
import Summary from './Summary'
import Graph from './Graph'
import Heading from '../../Common/Heading'

// Managers
import ThermostatManager from '../../../managers/ThermostatManager'

const ThermostatData = () => {
  // TODO: use client directly
  const thermostatManager = new ThermostatManager()

  const [thermostatData, setThermostatData] = useState({
    status: 'UNINIT'
  })

  // loading state boolean
  const isLoading = ['UNINIT', 'LOADING'].includes(thermostatData.status)
  // error state boolean
  const isError = ['ERROR'].includes(thermostatData.status)
  // success state boolean
  const isSuccess = ['SUCCESS'].includes(thermostatData.status)

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

  if (isLoading) {
    return <CircularProgress />
  }

  if (isError) {
    return <div>ERROR</div>
  }

  const { graphData, summaryData, dateRange } = thermostatData.value

  return (
    <div>
      <Heading headingText="Thermostat Data" />
      <Summary data={summaryData} dateRange={dateRange} />
      <Graph data={graphData} dateRange={dateRange} />
    </div>
  )
}

export default ThermostatData
