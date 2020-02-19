import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2, 0)
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
  }
}))

const SetTempCard = ({
  title,
  value,
  increaseHandler,
  decreaseHandler,
  thermostatStatus
}) => {
  const classes = useStyles()

  const isThermostatOn = thermostatStatus !== 'off'

  const upArrowHandler = () => {
    if (isThermostatOn) {
      increaseHandler()
    }
  }

  const downArrowHandler = () => {
    if (isThermostatOn) {
      decreaseHandler()
    }
  }
  return (
    <Paper className={classes.container}>
      <Typography variant="h6" component="p">
        {title}
      </Typography>
      <Box className={classes.setTempContainer}>
        <Box className={classes.arrowContainer}>
          <ArrowDropUpIcon onClick={upArrowHandler} className={classes.arrow} />
          <ArrowDropDownIcon
            onClick={downArrowHandler}
            className={classes.arrow}
          />
        </Box>
        <Typography variant="body1">{value} &deg;C</Typography>
      </Box>
    </Paper>
  )
}

export default SetTempCard
