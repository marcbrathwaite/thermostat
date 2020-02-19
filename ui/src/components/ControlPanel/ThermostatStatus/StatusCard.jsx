import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2, 0)
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row'
  }
}))

const StatusCard = ({
  title,
  value,
  handler,
  a11yText,
  radioName,
  options
}) => {
  const classes = useStyles()
  return (
    <Paper className={classes.container}>
      <Box className={classes.statusContainer}>
        <Typography variant="h6" component="p">
          {title}
        </Typography>
        <Typography component="p">{value.toUpperCase()}</Typography>
      </Box>
      <FormControl component="fieldset">
        <FormLabel component="legend" style={{ textAlign: 'center' }}>
          Status
        </FormLabel>
        <RadioGroup
          aria-label={a11yText}
          name={radioName}
          value={value}
          onChange={e => {
            handler(e.target.value)
          }}
          className={classes.radioGroup}
        >
          {options.map(option => {
            return (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
                className={classes.selection}
              />
            )
          })}
        </RadioGroup>
      </FormControl>
    </Paper>
  )
}

export default StatusCard
