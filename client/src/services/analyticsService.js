import { api } from './api'

const ANALYTICS_SESSION_KEY = 'radiant-grace-analytics-session'

function getAnalyticsSessionId() {
  if (typeof window === 'undefined') {
    return 'server'
  }

  const existing = window.localStorage.getItem(ANALYTICS_SESSION_KEY)
  if (existing) {
    return existing
  }

  const sessionId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`
  window.localStorage.setItem(ANALYTICS_SESSION_KEY, sessionId)
  return sessionId
}

export async function trackAnalyticsEvent({ name, type, path, metadata = {} }) {
  try {
    await api.post('/analytics/events', {
      name,
      type,
      path: path || (typeof window !== 'undefined' ? window.location.pathname : '/'),
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      sessionId: getAnalyticsSessionId(),
      metadata
    })
  } catch {
    return null
  }

  return true
}

export function trackPageView(path, metadata = {}) {
  return trackAnalyticsEvent({ name: 'page_view', type: 'pageview', path, metadata })
}

export function trackConversion(name, metadata = {}) {
  return trackAnalyticsEvent({ name, type: 'conversion', metadata })
}

export function trackEngagement(name, metadata = {}) {
  return trackAnalyticsEvent({ name, type: 'engagement', metadata })
}