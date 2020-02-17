import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

// Components
import ThermostatStatus from './ThermostatStatus'
import ThermostatData from './ThermostatData'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}))

const ControlPanel = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container>
        <ThermostatStatus />
        <ThermostatData />
      </Container>
    </div>
  )
}

export default ControlPanel
