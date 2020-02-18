import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Skeleton from '@material-ui/lab/Skeleton'
// Components
import StatusRadioGroup from './StatusRadioGroup'
import FanRadioGroup from './FanRadioGroup'

// define styles
const useStyles = makeStyles(theme => ({
  statusContainer: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
    '& > div:first-child': {
      marginRight: theme.spacing(5)
    }
  },
  statusPaper: {
    width: '10%',
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  readingContainer: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    justifyContent: 'center',
    '& > div:last-child': {
      marginRight: theme.spacing(0)
    }
  },
  readingPaper: {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    padding: theme.spacing(2),
    textAlign: 'center',
    marginRight: theme.spacing(5)
  },
  setTempContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrowContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  arrow: {
    cursor: 'pointer',
    fontSize: '2rem'
  },
  valueContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 auto'
  },
  controlPaper: {
    width: '25%',
    padding: theme.spacing(2),
    textAlign: 'center'
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

  return (
    <>
      <Box className={classes.statusContainer}>
        <Paper className={classes.statusPaper}>
          <Typography variant="h6" component="p">
            Status:
          </Typography>
          <Typography>{thermostat.value}</Typography>
        </Paper>
        <Paper className={classes.statusPaper}>
          <Typography variant="h6" component="p">
            Fan:
          </Typography>
          <Typography>{fan.value}</Typography>
        </Paper>
      </Box>
      <Box className={classes.readingContainer}>
        <Paper className={classes.readingPaper}>
          <Typography variant="h6" component="p">
            Outside Temp:
          </Typography>
          <Box className={classes.valueContainer}>
            {isLoading && <Skeleton variant="circle" width={40} height={40} />}
            {isSuccess && <Typography>{`${outsideTemp.value} C`}</Typography>}
            {isError && <Typography>N/A</Typography>}
          </Box>
        </Paper>
        <Paper className={classes.readingPaper}>
          <Typography variant="h6" component="p">
            Set Temp:
          </Typography>
          <Box className={classes.setTempContainer}>
            <Box className={classes.arrowContainer}>
              <ArrowDropUpIcon
                className={classes.arrow}
                onClick={tempSetPoint.increase}
              />
              <ArrowDropDownIcon
                className={classes.arrow}
                onClick={tempSetPoint.decrease}
              />
            </Box>
            <Typography>{`${tempSetPoint.value} C`}</Typography>
          </Box>
        </Paper>
        <Paper className={classes.readingPaper}>
          <Typography variant="h6" component="p">
            Ambient Temp:
          </Typography>
          <Box className={classes.valueContainer}>
            <Typography>20 C</Typography>
          </Box>
        </Paper>
      </Box>
      <Box className={classes.statusContainer}>
        <Paper className={classes.controlPaper}>
          <StatusRadioGroup thermostat={thermostat} />
        </Paper>
        <Paper className={classes.controlPaper}>
          <FanRadioGroup fan={fan} />
        </Paper>
      </Box>
    </>
  )
}

export default ThermostatStatus
