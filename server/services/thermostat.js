const axios = require('axios').default

// Errors
const AppError = require('../errors/AppError')

const getThermostatData = async () => {
  try {
    const res = await axios.get(
      'https://raw.githubusercontent.com/ParityInc/backend-assignment/master/thermostat.json'
    )
    return res.data
  } catch (e) {
    throw e
  }
}

const getTempforCoorindates = async ({ lat, long }) => {
  const res = await axios.get(
    `https://api.darksky.net/forecast/92c187129a515029f881a7302d78e4e5/${lat},${long}?units=si`
  )
  return res.data.currently.temperature
}

const getCoordinates = async city => {
  const res = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      city
    )}.json?access_token=pk.eyJ1IjoiYnJhdGhob2xlIiwiYSI6ImNrNmVmbHF1OTAxbGoza3AyOWdrNjkzNzMifQ.cTbuNyKf78sntScT972aTQ&limit=1`
  )
  if (res.data.features.length === 0) {
    throw new AppError('City not found', 404)
  }
  const [long, lat] = res.data.features[0].center
  return { long, lat }
}

const getCurrentTemp = async city => {
  try {
    // get Coodinates of city
    const coordinates = await getCoordinates(city)
    // get temp
    return getTempforCoorindates(coordinates)
  } catch (e) {
    throw new AppError(e.message)
  }
}

module.exports = { getThermostatData, getCurrentTemp }
