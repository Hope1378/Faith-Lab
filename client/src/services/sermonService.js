import { api } from './api'
import { trackEngagement } from './analyticsService'
import { sermons as fallbackSermons } from '../utils/constants'

export async function fetchSermons(filters = {}) {
  try {
    const params = new URLSearchParams()
    if (filters.search) params.append('search', filters.search)
    if (filters.category && filters.category !== 'All') params.append('category', filters.category)
    if (filters.speaker && filters.speaker !== 'All') params.append('speaker', filters.speaker)
    if (filters.sort) params.append('sort', filters.sort)

    const sermons = await api.get(`/sermons?${params.toString()}`)
    return sermons
  } catch (error) {
    console.error('Failed to fetch sermons from API, using fallback:', error.message)
    // Fallback logic
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
}

export async function fetchSermonBySlug(slug) {
  try {
    const payload = await api.get(`/sermons/${slug}`)
    await trackEngagement('sermon_detail_view', { slug })
    return payload
  } catch {
    const sermon = fallbackSermons.find((item) => item.slug === slug)
    return { sermon, recent: fallbackSermons.filter((item) => item.slug !== slug).slice(0, 3) }
  }
}
