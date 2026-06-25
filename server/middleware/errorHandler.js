export function notFoundHandler(req, res) {
  res.status(404).json({ message: 'Resource not found.' })
}

export function errorHandler(error, req, res, next) {
  const status = error.status || 500

  if (process.env.NODE_ENV !== 'test') {
    console.error(error)
  }

  res.status(status).json({
    message: error.message || 'Internal server error.',
    details: error.details || null
  })
}
