export function validatePayload(validator) {
  return (req, res, next) => {
    const result = validator(req.body)

    if (!result.valid) {
      return res.status(422).json({ message: 'Validation failed.', errors: result.errors })
    }

    return next()
  }
}
