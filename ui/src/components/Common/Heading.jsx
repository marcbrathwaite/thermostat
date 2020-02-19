import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: '1.5rem',
    fontWeight: '400',
    marginBottom: theme.spacing(5)
  }
}))

const Heading = ({ headingText }) => {
  const classes = useStyles()
  return (
    <Typography variant="h2" className={classes.heading}>
      {headingText}
    </Typography>
  )
}

export default Heading
