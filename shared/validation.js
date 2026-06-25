const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isUrl(value = '') {
  try {
    const parsed = new URL(String(value).trim())
    return ['http:', 'https:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

function isValidDate(value) {
  return !Number.isNaN(Date.parse(value))
}

export function isEmail(value = '') {
  return emailPattern.test(String(value).trim())
}

export function isRequired(value) {
  if (typeof value === 'boolean') {
    return true
  }

  return value !== undefined && value !== null && String(value).trim().length > 0
}

export function minLength(value = '', min = 2) {
  return String(value).trim().length >= min
}

export function validateDonation(payload = {}) {
  const errors = {}

  if (!isRequired(payload.name) && !payload.anonymous) {
    errors.name = 'Name is required unless donation is anonymous.'
  }

  if (!isEmail(payload.email)) {
    errors.email = 'A valid email is required.'
  }

  if (!Number(payload.amount) || Number(payload.amount) < 5) {
    errors.amount = 'Donation amount must be at least $5.'
  }

  if (!isRequired(payload.fund)) {
    errors.fund = 'Select a fund.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateContact(payload = {}) {
  const errors = {}

  if (!minLength(payload.name, 2)) {
    errors.name = 'Name is required.'
  }

  if (!isEmail(payload.email)) {
    errors.email = 'Email is invalid.'
  }

  if (!minLength(payload.message, 10)) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateNewsletter(payload = {}) {
  const errors = {}
  if (!isEmail(payload.email)) {
    errors.email = 'Email is invalid.'
  }
  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateEventRegistration(payload = {}) {
  const errors = {}

  if (!minLength(payload.name, 2)) {
    errors.name = 'Name is required.'
  }

  if (!isEmail(payload.email)) {
    errors.email = 'Email is invalid.'
  }

  if (!payload.ticketCount || Number(payload.ticketCount) < 1) {
    errors.ticketCount = 'Select at least one ticket.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateAdminLogin(payload = {}) {
  const errors = {}

  if (!isEmail(payload.email)) {
    errors.email = 'Email is invalid.'
  }

  if (!minLength(payload.password, 8)) {
    errors.password = 'Password must be at least 8 characters.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateSermon(payload = {}) {
  const errors = {}

  if (!minLength(payload.title, 3)) {
    errors.title = 'Title is required.'
  }

  if (!minLength(payload.slug, 3)) {
    errors.slug = 'Slug is required.'
  }

  if (!minLength(payload.speaker, 2)) {
    errors.speaker = 'Speaker is required.'
  }

  if (!minLength(payload.category, 2)) {
    errors.category = 'Category is required.'
  }

  if (!minLength(payload.description, 20)) {
    errors.description = 'Description must be at least 20 characters.'
  }

  if (!isUrl(payload.audioUrl)) {
    errors.audioUrl = 'Audio URL must be a valid http or https URL.'
  }

  if (!isUrl(payload.notesUrl)) {
    errors.notesUrl = 'Notes URL must be a valid http or https URL.'
  }

  if (!isUrl(payload.coverImage)) {
    errors.coverImage = 'Cover image URL must be a valid http or https URL.'
  }

  if (!Number(payload.duration) || Number(payload.duration) < 60) {
    errors.duration = 'Duration must be at least 60 seconds.'
  }

  if (payload.publishedAt && !isValidDate(payload.publishedAt)) {
    errors.publishedAt = 'Publish date must be valid.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateEvent(payload = {}) {
  const errors = {}

  if (!minLength(payload.title, 3)) {
    errors.title = 'Title is required.'
  }

  if (!minLength(payload.slug, 3)) {
    errors.slug = 'Slug is required.'
  }

  if (!minLength(payload.category, 2)) {
    errors.category = 'Category is required.'
  }

  if (!minLength(payload.summary, 12)) {
    errors.summary = 'Summary must be at least 12 characters.'
  }

  if (!minLength(payload.description, 20)) {
    errors.description = 'Description must be at least 20 characters.'
  }

  if (!isUrl(payload.coverImage)) {
    errors.coverImage = 'Cover image URL must be a valid http or https URL.'
  }

  if (!isValidDate(payload.startsAt)) {
    errors.startsAt = 'Start date is invalid.'
  }

  if (!isValidDate(payload.endsAt)) {
    errors.endsAt = 'End date is invalid.'
  }

  if (isValidDate(payload.startsAt) && isValidDate(payload.endsAt) && new Date(payload.endsAt) <= new Date(payload.startsAt)) {
    errors.endsAt = 'End date must be after the start date.'
  }

  if (!minLength(payload.location, 2)) {
    errors.location = 'Location is required.'
  }

  if (payload.onlineUrl && !isUrl(payload.onlineUrl)) {
    errors.onlineUrl = 'Online URL must be a valid http or https URL.'
  }

  if (payload.capacity !== undefined && Number(payload.capacity) < 0) {
    errors.capacity = 'Capacity cannot be negative.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateAdminUser(payload = {}) {
  const errors = {}

  if (!minLength(payload.name, 2)) {
    errors.name = 'Name is required.'
  }

  if (!isEmail(payload.email)) {
    errors.email = 'Email is invalid.'
  }

  if (!['admin', 'editor', 'viewer'].includes(String(payload.role || '').trim())) {
    errors.role = 'Role must be admin, editor, or viewer.'
  }

  if (!minLength(payload.password, 8)) {
    errors.password = 'Password must be at least 8 characters.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

export function validateAnalyticsEvent(payload = {}) {
  const errors = {}

  if (!minLength(payload.name, 2)) {
    errors.name = 'Event name is required.'
  }

  if (!['pageview', 'engagement', 'conversion', 'admin'].includes(String(payload.type || '').trim())) {
    errors.type = 'Analytics type is invalid.'
  }

  if (payload.path && !String(payload.path).startsWith('/')) {
    errors.path = 'Path must start with /.'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}
