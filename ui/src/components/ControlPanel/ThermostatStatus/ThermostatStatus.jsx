import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
// Components
import StatusCard from './StatusCard'
import SetTempCard from './SetTempCard'
import DisplayTempCard from './DisplayTempCard'
import Heading from '../../Common/Heading'

// define styles
const useStyles = makeStyles(theme => ({
  statusContainer: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    justifyContent: 'space-between',
    '& > *': {
      width: `calc(33.33% - ${theme.spacing(2)}px)`
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '& > *': {
        width: '100%',
        marginBottom: theme.spacing(2),
        '&:last-child': {
          marginBottom: '0'
        }
      }
    }
  },
  readingContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    '& > *': {
      width: `calc(33.33% - ${theme.spacing(2)}px)`
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& > *': {
        width: '100%',
        marginBottom: theme.spacing(2),
        '&:last-child': {
          marginBottom: '0'
        }
      }
    }
  }
}))

const ThermostatStatus = ({ thermostat, fan, outsideTemp, tempSetPoint }) => {
  const classes = useStyles()

  // loading state boolean
  const isLoading = ['UNINIT', 'LOADING'].includes(outsideTemp.status)
  // error state boolean
  const isError = ['ERROR'].includes(outsideTemp.status)
  // success state boolean
  const isSuccess = ['SUCCESS'].includes(outsideTemp.status)

  // status object for outside temp async call
  const outsideTempStatus = {
    isLoading,
    isError,
    isSuccess
  }

  const ambientTempStatus = {
    isLoading: false,
    isError: false,
    isSuccess: true
  }

  return (
    <Box>
      <Heading headingText="Thermostat Status" />
      <Box className={classes.statusContainer}>
        <StatusCard
          title="Thermostat"
          value={thermostat.value}
          handler={thermostat.handler}
          options={thermostat.options}
          a11yText="thermostat control"
          radioName="thermostat"
        />
        <SetTempCard
          title="Set Temp"
          value={tempSetPoint.value}
          thermostatStatus={thermostat.value}
          increaseHandler={tempSetPoint.increase}
          decreaseHandler={tempSetPoint.decrease}
        />
        <StatusCard
          title="Fan"
          value={fan.value}
          handler={fan.handler}
          options={fan.options}
          a11yText="fan control"
          radioName="fan"
        />
      </Box>
      <Box className={classes.readingContainer}>
        <DisplayTempCard
          title="Outside Temp."
          value={outsideTemp.value}
          status={outsideTempStatus}
        />
        <DisplayTempCard
          title="Ambient Temp."
          value={20}
          status={ambientTempStatus}
        />
      </Box>
    </Box>
  )
}

export default ThermostatStatus
