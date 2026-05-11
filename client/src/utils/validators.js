const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateNewsletter(values) {
  const errors = {}
  if (!emailPattern.test(values.email || '')) {
    errors.email = 'Enter a valid email address.'
  }
  return errors
}

export function validateDonation(values) {
  const errors = {}
  if (!values.anonymous && !values.name?.trim()) {
    errors.name = 'Name is required unless the gift is anonymous.'
  }
  if (!emailPattern.test(values.email || '')) {
    errors.email = 'Enter a valid email address.'
  }
  if (!Number(values.amount) || Number(values.amount) < 5) {
    errors.amount = 'Minimum donation is $5.'
  }
  if (!values.fund) {
    errors.fund = 'Select a fund.'
  }
  return errors
}

export function validateContact(values) {
  const errors = {}
  if (!values.name?.trim()) {
    errors.name = 'Name is required.'
  }
  if (!emailPattern.test(values.email || '')) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message?.trim() || values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  return errors
}

export function validateEventRegistration(values) {
  const errors = {}
  if (!values.name?.trim()) {
    errors.name = 'Name is required.'
  }
  if (!emailPattern.test(values.email || '')) {
    errors.email = 'Enter a valid email address.'
  }
  if (!Number(values.ticketCount) || Number(values.ticketCount) < 1) {
    errors.ticketCount = 'Choose at least one ticket.'
  }
  return errors
}
