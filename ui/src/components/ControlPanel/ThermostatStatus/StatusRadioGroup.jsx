import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const StatusRadioGroup = ({ thermostat }) => {
  const { value, handler } = thermostat
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Thermostat Control</FormLabel>
      <RadioGroup
        aria-label="thermostat control"
        name="thermostat"
        value={value}
        onChange={e => {
          handler(e.target.value)
        }}
      >
        <FormControlLabel value="off" control={<Radio />} label="off" />
        <FormControlLabel value="heat" control={<Radio />} label="heat" />
        <FormControlLabel value="cool" control={<Radio />} label="cool" />
      </RadioGroup>
    </FormControl>
  )
}

export default StatusRadioGroup
