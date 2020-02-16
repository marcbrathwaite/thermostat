import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// Manager
import ThermostatManager from '../../../managers/ThermostatManager'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  testBorder: {
    border: '1px solid black'
  }
}))

const Status = () => {
  const classes = useStyles()
  const thermostatManager = new ThermostatManager()
  const [currentTemp, setCurrentTemp] = useState({
    status: 'UNINIT',
    value: null
  })

  const isLoading = ['UNINIT', 'LOADING'].includes(currentTemp.status)
  const isError = ['ERROR'].includes(currentTemp.status)
  useEffect(() => {
    const asynFn = async () => {
      try {
        setCurrentTemp({ status: 'LOADING' })
        const data = await thermostatManager.getCurrentTemp('Toronto')
        console.log(data)
        setCurrentTemp({
          status: 'SUCCESS',
          value: data.temp
        })
      } catch (e) {
        setCurrentTemp({ status: 'ERROR' })
      }
    }
    if (currentTemp.status === 'UNINIT') {
      asynFn()
    }
  }, [thermostatManager])

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.testBorder}>
        <Grid
          container
          item
          justify="center"
          xs={12}
          className={classes.testBorder}
        >
          <Grid
            item
            container
            xs={3}
            className={classes.testBorder}
            justify="center"
          >
            Status: ON
          </Grid>
          <Grid
            item
            container
            xs={3}
            className={classes.testBorder}
            justify="center"
          >
            Fsn: Auto
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.testBorder}>
          Outside Temp
        </Grid>
        <Grid item xs={4} className={classes.testBorder}>
          SetPoint Temp
        </Grid>
        <Grid item xs={4} className={classes.testBorder}>
          Indoor Temp
        </Grid>
      </Grid>
    </div>
  )
}

export default Status
