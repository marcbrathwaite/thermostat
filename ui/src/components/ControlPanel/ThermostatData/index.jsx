import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'

// Components
import Summary from './Summary'
import Graph from './Graph'
import Heading from '../../Common/Heading'

// Managers
import ThermostatManager from '../../../managers/ThermostatManager'

const useStyles = makeStyles(theme => ({
  dataContainer: {
    '& > *': {
      marginBottom: theme.spacing(3),
      '&:last-child': {
        marginBottom: '0'
      }
    }
  }
}))

const ThermostatData = () => {
  const classes = useStyles()
  const thermostatManager = new ThermostatManager()

  const [thermostatData, setThermostatData] = useState({
    status: 'UNINIT'
  })

  // loading state boolean
  const isLoading = ['UNINIT', 'LOADING'].includes(thermostatData.status)
  // error state boolean
  const isError = ['ERROR'].includes(thermostatData.status)

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

  const { points, dataSeries, summaryData, dateRange } = thermostatData.value

  return (
    <Box>
      <Heading headingText="Thermostat Data" />
      <Box className={classes.dataContainer}>
        <Summary data={summaryData} dateRange={dateRange} />
        <Graph dataSeries={dataSeries} points={points} />
      </Box>
    </Box>
  )
}

export default ThermostatData
