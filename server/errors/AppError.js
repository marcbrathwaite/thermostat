class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.name = 'AppError'
    this.statusCode = statusCode
    // all stack trace functionality
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = AppError
