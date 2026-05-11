import { api } from './api'
import { trackConversion } from './analyticsService'

/**
 * Sends donation details to the backend to log the gift intent.
 * Handles both electronic placeholders and manual method notifications.
 */
export async function processDonation(values) {
  // We call our simplified donation endpoint which just logs the intent
  const result = await api.post('/donations', values)
  
  await trackConversion('donation_recorded', {
    amount: Number(values.amount),
    fund: values.fund,
    frequency: values.frequency,
    anonymous: Boolean(values.anonymous),
    paymentMethod: values.paymentMethod
  })

  return result
}

/**
 * Confirms a Stripe payment with the backend to finalize the donation record.
 */
export async function confirmDonation(id) {
  return api.post(`/donations/${id}/confirm`, {})
}

export async function fetchDonationReport(year) {
  return api.get(`/donations/report?year=${year}`)
}
