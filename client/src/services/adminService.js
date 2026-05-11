import { ADMIN_TOKEN_KEY, api, clearApiAuthToken, setApiAuthToken } from './api'

export const emptyUserForm = {
  name: '',
  email: '',
  role: 'editor',
  password: ''
}

export const emptySermonForm = {
  title: '',
  slug: '',
  speaker: '',
  category: '',
  series: '',
  scripture: '',
  description: '',
  audioUrl: '',
  notesUrl: '',
  coverImage: '',
  duration: '1800',
  featured: true,
  tags: '',
  publishedAt: ''
}

export const emptyEventForm = {
  title: '',
  slug: '',
  category: '',
  summary: '',
  description: '',
  coverImage: '',
  startsAt: '',
  endsAt: '',
  location: '',
  onlineUrl: '',
  livestreamProvider: '',
  capacity: '0',
  ministry: '',
  featured: false,
  remindersEnabled: true,
  recurrenceEnabled: false,
  recurrenceRule: ''
}

function splitCsv(value = '') {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

function toIsoString(value) {
  return value ? new Date(value).toISOString() : undefined
}

function toDateTimeLocal(value) {
  if (!value) {
    return ''
  }

  const date = new Date(value)
  const offset = date.getTimezoneOffset()
  const localDate = new Date(date.getTime() - offset * 60 * 1000)
  return localDate.toISOString().slice(0, 16)
}

function serializeSermonForm(form) {
  const payload = {
    title: form.title.trim(),
    slug: form.slug.trim(),
    speaker: form.speaker.trim(),
    category: form.category.trim(),
    series: form.series.trim(),
    scripture: splitCsv(form.scripture),
    description: form.description.trim(),
    audioUrl: form.audioUrl.trim(),
    notesUrl: form.notesUrl.trim(),
    coverImage: form.coverImage.trim(),
    duration: Number(form.duration),
    featured: Boolean(form.featured),
    tags: splitCsv(form.tags)
  }

  if (form.publishedAt) {
    payload.publishedAt = toIsoString(form.publishedAt)
  }

  return payload
}

function serializeEventForm(form) {
  return {
    title: form.title.trim(),
    slug: form.slug.trim(),
    category: form.category.trim(),
    summary: form.summary.trim(),
    description: form.description.trim(),
    coverImage: form.coverImage.trim(),
    startsAt: toIsoString(form.startsAt),
    endsAt: toIsoString(form.endsAt),
    location: form.location.trim(),
    onlineUrl: form.onlineUrl.trim(),
    livestreamProvider: form.livestreamProvider.trim(),
    capacity: Number(form.capacity) || 0,
    ministry: form.ministry.trim(),
    featured: Boolean(form.featured),
    remindersEnabled: Boolean(form.remindersEnabled),
    recurrence: {
      enabled: Boolean(form.recurrenceEnabled),
      rule: form.recurrenceRule.trim()
    }
  }
}

export function sermonToForm(sermon) {
  return {
    title: sermon.title || '',
    slug: sermon.slug || '',
    speaker: sermon.speaker || '',
    category: sermon.category || '',
    series: sermon.series || '',
    scripture: Array.isArray(sermon.scripture) ? sermon.scripture.join(', ') : '',
    description: sermon.description || '',
    audioUrl: sermon.audioUrl || '',
    notesUrl: sermon.notesUrl || '',
    coverImage: sermon.coverImage || '',
    duration: String(sermon.duration || 1800),
    featured: Boolean(sermon.featured),
    tags: Array.isArray(sermon.tags) ? sermon.tags.join(', ') : '',
    publishedAt: toDateTimeLocal(sermon.publishedAt)
  }
}

export function eventToForm(event) {
  return {
    title: event.title || '',
    slug: event.slug || '',
    category: event.category || '',
    summary: event.summary || '',
    description: event.description || '',
    coverImage: event.coverImage || '',
    startsAt: toDateTimeLocal(event.startsAt),
    endsAt: toDateTimeLocal(event.endsAt),
    location: event.location || '',
    onlineUrl: event.onlineUrl || '',
    livestreamProvider: event.livestreamProvider || '',
    capacity: String(event.capacity || 0),
    ministry: event.ministry || '',
    featured: Boolean(event.featured),
    remindersEnabled: event.remindersEnabled !== false,
    recurrenceEnabled: Boolean(event.recurrence?.enabled),
    recurrenceRule: event.recurrence?.rule || ''
  }
}

export function restoreAdminToken(token) {
  setApiAuthToken(token)
}

export function logoutAdmin() {
  clearApiAuthToken()
}

export async function loginAdmin(credentials) {
  const result = await api.post('/auth/login', credentials)
  setApiAuthToken(result.token)
  return result
}

export async function fetchDashboardData() {
  const [session, sermonStats, eventStats, donationReport, subscribers, contacts, sermons, eventPayload, users, analytics] = await Promise.all([
    api.get('/auth/session'),
    api.get('/sermons/dashboard'),
    api.get('/events/dashboard'),
    api.get(`/donations/report?year=${new Date().getFullYear()}`),
    api.get('/newsletter'),
    api.get('/contact'),
    api.get('/sermons'),
    api.get('/events'),
    api.get('/admin/users'),
    api.get('/analytics/overview?days=30')
  ])

  return {
    user: session.user,
    sermonStats,
    eventStats,
    donationReport,
    subscribers,
    contacts,
    sermons,
    events: eventPayload.events || [],
    users,
    analytics
  }
}

export async function createAdminSermon(form) {
  return api.post('/sermons', serializeSermonForm(form))
}

export async function createAdminEvent(form) {
  return api.post('/events', serializeEventForm(form))
}

export async function updateAdminSermon(id, form) {
  return api.put(`/sermons/${id}`, serializeSermonForm(form))
}

export async function deleteAdminSermon(id) {
  return api.delete(`/sermons/${id}`)
}

export async function updateAdminEvent(id, form) {
  return api.put(`/events/${id}`, serializeEventForm(form))
}

export async function deleteAdminEvent(id) {
  return api.delete(`/events/${id}`)
}

export async function createAdminUser(form) {
  return api.post('/admin/users', {
    name: form.name.trim(),
    email: form.email.trim(),
    role: form.role,
    password: form.password
  })
}

export { ADMIN_TOKEN_KEY }
