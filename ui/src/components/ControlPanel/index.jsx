import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

// Components
import ThermostatStatus from './ThermostatStatus'
import ThermostatData from './ThermostatData'

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(5, 0),
    '& > *': {
      marginBottom: theme.spacing(7)
    }
  }
}))

const ControlPanel = () => {
  const classes = useStyles()
  return (
    <Container className={classes.container} maxWidth="xl">
      <ThermostatStatus />
      <ThermostatData />
    </Container>
  )
}

export default ControlPanel
