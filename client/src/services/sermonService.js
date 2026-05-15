import { api } from './api'
import { trackEngagement } from './analyticsService'
import { sermons as fallbackSermons } from '../utils/constants'

function filterFallbackSermons(filters = {}) {
  let results = [...fallbackSermons]
  if (filters.search) {
    const q = filters.search.toLowerCase()
    results = results.filter((s) => s.title.toLowerCase().includes(q) || s.speaker.toLowerCase().includes(q) || s.description.toLowerCase().includes(q))
  }
  if (filters.category && filters.category !== 'All') {
    results = results.filter((s) => s.category === filters.category)
  }
  if (filters.speaker && filters.speaker !== 'All') {
    results = results.filter((s) => s.speaker === filters.speaker)
  }
  if (filters.sort === 'oldest') {
    results.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
  } else {
    results.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  }
  return results
}

function getFallbackSermonPayload(slug) {
  const sermon = fallbackSermons.find((item) => item.slug === slug)
  return { sermon, recent: fallbackSermons.filter((item) => item.slug !== slug).slice(0, 3) }
}

function withTimeout(promise, milliseconds) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timed out.')), milliseconds)
    })
  ])
}

export async function fetchSermons(filters = {}) {
  try {
    const params = new URLSearchParams()
    if (filters.search) params.append('search', filters.search)
    if (filters.category && filters.category !== 'All') params.append('category', filters.category)
    if (filters.speaker && filters.speaker !== 'All') params.append('speaker', filters.speaker)
    if (filters.sort) params.append('sort', filters.sort)

    const sermons = await api.get(`/sermons?${params.toString()}`)
    const data = Array.isArray(sermons) ? sermons : (Array.isArray(sermons?.data) ? sermons.data : [])
    return data.length ? data : filterFallbackSermons(filters)
  } catch (error) {
    console.error('Failed to fetch sermons from API, using fallback:', error.message)
    return filterFallbackSermons(filters)
  }
}

export async function fetchSermonBySlug(slug) {
  try {
    const payload = await withTimeout(api.get(`/sermons/${slug}`), 6000)
    trackEngagement('sermon_detail_view', { slug })
    return payload?.data || payload
  } catch {
    return getFallbackSermonPayload(slug)
  }
}
