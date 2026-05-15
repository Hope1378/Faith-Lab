import { api } from './api'
import { trackConversion, trackEngagement } from './analyticsService'
import { events as fallbackEvents } from '../utils/constants'

function filterFallbackEvents(filters = {}) {
  let results = [...fallbackEvents]
  if (filters.category && filters.category !== 'All') {
    results = results.filter((e) => e.category === filters.category)
  }
  return results
}

export async function fetchEvents(filters = {}) {
  try {
    const params = new URLSearchParams()
    if (filters.category && filters.category !== 'All') params.append('category', filters.category)
    if (filters.view) params.append('view', filters.view)
    if (filters.featured) params.append('featured', filters.featured)

    const response = await api.get(`/events?${params.toString()}`)
    const data = Array.isArray(response) ? response : (Array.isArray(response?.events) ? response.events : [])
    return data.length ? data : filterFallbackEvents(filters)
  } catch (error) {
    console.error('Failed to fetch events from API, using fallback:', error.message)
    return filterFallbackEvents(filters)
  }
}

export async function fetchEventBySlug(slug) {
  try {
    const event = await api.get(`/events/${slug}`)
    await trackEngagement('event_detail_view', { slug })
    return event
  } catch {
    return fallbackEvents.find((item) => item.slug === slug)
  }
}

export async function registerForEvent(slug, values) {
  const result = await api.post(`/events/${slug}/register`, values)
  await trackConversion('event_registration', { slug, ticketCount: Number(values.ticketCount) || 1 })
  return result
}
