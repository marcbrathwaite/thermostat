import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(6, 0)
  }
}))

const DisplayTempCard = ({ title, value, status }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.container}>
      <Typography variant="h6">{title}</Typography>
      <Box>
        {status.isLoading && (
          <Skeleton variant="circle" width={40} height={40} />
        )}
        {status.isSuccess && (
          <Typography variant="body1">{value} &deg;C</Typography>
        )}
        {status.isError && <Typography>N/A</Typography>}
      </Box>
    </Paper>
  )
}

export default DisplayTempCard
