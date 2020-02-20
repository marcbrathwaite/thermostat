class GetCurrentTempError extends Error {
  constructor(message = 'Could not get current temperature') {
    super(message)
    this.name = this.constructor.name

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GetCurrentTempError)
    }
  }
}

export default GetCurrentTempError
