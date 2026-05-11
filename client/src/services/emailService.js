import { api } from './api'
import { trackConversion } from './analyticsService'

export async function submitContact(values) {
  const result = await api.post('/contact', values)
  await trackConversion(values.prayerRequest ? 'prayer_request_submit' : 'contact_submit', {
    subject: values.subject || '',
    private: Boolean(values.isPrivate)
  })
  return result
}
