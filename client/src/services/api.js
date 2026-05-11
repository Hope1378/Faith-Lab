const API_URL = process.env.REACT_APP_API_URL || '/api'

export const ADMIN_TOKEN_KEY = 'radiant-grace-admin-token'

function getStoredToken() {
  if (typeof window === 'undefined') {
    return ''
  }

  return window.localStorage.getItem(ADMIN_TOKEN_KEY)?.replace(/^"|"$/g, '') || ''
}

export function setApiAuthToken(token) {
  if (typeof window === 'undefined') {
    return
  }

  if (!token) {
    window.localStorage.removeItem(ADMIN_TOKEN_KEY)
    return
  }

  window.localStorage.setItem(ADMIN_TOKEN_KEY, JSON.stringify(token))
}

export function clearApiAuthToken() {
  setApiAuthToken('')
}

async function request(path, options = {}) {
  const token = getStoredToken()
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    },
    ...options
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}))
    throw new Error(payload.message || 'Request failed.')
  }

  if (response.status === 204) {
    return null
  }

  const contentType = response.headers.get('content-type') || ''
  return contentType.includes('application/json') ? response.json() : response.text()
}

export const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: 'PUT', body: JSON.stringify(body) }),
  delete: (path) => request(path, { method: 'DELETE' })
}
