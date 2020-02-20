class GetThermostatDataError extends Error {
  constructor(message = 'Could not get ThermostatData') {
    super(message)
    this.name = this.constructor.name
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GetThermostatDataError)
    }
  }
}

export default GetThermostatDataError
