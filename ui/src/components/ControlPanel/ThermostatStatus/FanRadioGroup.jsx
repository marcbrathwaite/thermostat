import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const FanRadioGroup = ({ fan }) => {
  const { value, handler } = fan
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Fan Control</FormLabel>
      <RadioGroup
        aria-label="fan control"
        name="fan"
        value={value}
        onChange={e => {
          handler(e.target.value)
        }}
      >
        <FormControlLabel value="auto" control={<Radio />} label="auto" />
        <FormControlLabel value="on" control={<Radio />} label="on" />
      </RadioGroup>
    </FormControl>
  )
}

export default FanRadioGroup
