import { api } from './api'
import { trackConversion } from './analyticsService'

export async function subscribeToNewsletter(values) {
  const result = await api.post('/newsletter', values)
  await trackConversion('newsletter_subscribe', { source: values.source || 'unknown' })
  return result
}
