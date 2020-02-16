import React from 'react'
import Container from '@material-ui/core/Container'

// Components
import ThermostatStatus from './ThermostatStatus'
import ThermostatData from './ThermostatData'

const ControlPanel = () => {
  return (
    <Container>
      <ThermostatStatus />
      <ThermostatData />
    </Container>
  )
}

export default ControlPanel
