import { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import {
  ADMIN_TOKEN_KEY,
  createAdminEvent,
  createAdminSermon,
  createAdminUser,
  deleteAdminEvent,
  deleteAdminSermon,
  emptyEventForm,
  emptySermonForm,
  emptyUserForm,
  eventToForm,
  fetchDashboardData,
  loginAdmin,
  logoutAdmin,
  restoreAdminToken,
  sermonToForm,
  updateAdminEvent,
  updateAdminSermon
} from '../services/adminService'
import { formatCurrency, formatDate } from '../utils/formatters'
import './Admin.css'

export default function Admin() {
  const [token, setToken] = useLocalStorage(ADMIN_TOKEN_KEY, '')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [authError, setAuthError] = useState('')
  const [feedback, setFeedback] = useState({ tone: '', message: '' })
  const [sermonForm, setSermonForm] = useState(emptySermonForm)
  const [eventForm, setEventForm] = useState(emptyEventForm)
  const [userForm, setUserForm] = useState(emptyUserForm)
  const [editingSermonId, setEditingSermonId] = useState('')
  const [editingEventId, setEditingEventId] = useState('')
  const [submitting, setSubmitting] = useState({ sermon: false, event: false, user: false })

  const role = data?.user?.role || 'viewer'
  const canManageContent = role === 'admin' || role === 'editor'
  const canManageUsers = role === 'admin'

  async function loadDashboard() {
    setLoading(true)

    try {
      const dashboard = await fetchDashboardData()
      setData(dashboard)
      setAuthError('')
    } catch (error) {
      setData(null)
      setAuthError(error.message || 'Unable to load the admin dashboard.')

      if (/session|auth|credential|expired|required|active/i.test(error.message || '')) {
        logoutAdmin()
        setToken('')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!token) {
      setData(null)
      return
    }

    restoreAdminToken(token)
    loadDashboard()
  }, [token])

  function handleCredentialChange(event) {
    const { name, value } = event.target
    setCredentials((current) => ({ ...current, [name]: value }))
  }

  function handleSermonChange(event) {
    const { name, value, type, checked } = event.target
    setSermonForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleEventChange(event) {
    const { name, value, type, checked } = event.target
    setEventForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleUserChange(event) {
    const { name, value } = event.target
    setUserForm((current) => ({ ...current, [name]: value }))
  }

  async function handleLogin(event) {
    event.preventDefault()
    setLoading(true)
    setAuthError('')
    setFeedback({ tone: '', message: '' })

    try {
      const session = await loginAdmin(credentials)
      setToken(session.token)
      setCredentials({ email: '', password: '' })
    } catch (error) {
      setAuthError(error.message || 'Unable to sign in.')
      logoutAdmin()
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    logoutAdmin()
    setToken('')
    setData(null)
    setFeedback({ tone: 'muted', message: 'Admin session closed.' })
  }

  function resetSermonEditor() {
    setEditingSermonId('')
    setSermonForm(emptySermonForm)
  }

  function resetEventEditor() {
    setEditingEventId('')
    setEventForm(emptyEventForm)
  }

  async function handleSermonSubmit(event) {
    event.preventDefault()
    setSubmitting((current) => ({ ...current, sermon: true }))
    setFeedback({ tone: '', message: '' })

    const isEditing = Boolean(editingSermonId)

    try {
      if (isEditing) {
        await updateAdminSermon(editingSermonId, sermonForm)
      } else {
        await createAdminSermon(sermonForm)
      }
      resetSermonEditor()
      await loadDashboard()
      setFeedback({ tone: 'success', message: isEditing ? 'Sermon updated successfully.' : 'Sermon published successfully.' })
    } catch (error) {
      setFeedback({ tone: 'error', message: error.message || 'Sermon could not be saved.' })
    } finally {
      setSubmitting((current) => ({ ...current, sermon: false }))
    }
  }

  async function handleEventSubmit(event) {
    event.preventDefault()
    setSubmitting((current) => ({ ...current, event: true }))
    setFeedback({ tone: '', message: '' })

    const isEditing = Boolean(editingEventId)

    try {
      if (isEditing) {
        await updateAdminEvent(editingEventId, eventForm)
      } else {
        await createAdminEvent(eventForm)
      }
      resetEventEditor()
      await loadDashboard()
      setFeedback({ tone: 'success', message: isEditing ? 'Event updated successfully.' : 'Event published successfully.' })
    } catch (error) {
      setFeedback({ tone: 'error', message: error.message || 'Event could not be saved.' })
    } finally {
      setSubmitting((current) => ({ ...current, event: false }))
    }
  }

  async function handleUserSubmit(event) {
    event.preventDefault()
    setSubmitting((current) => ({ ...current, user: true }))
    setFeedback({ tone: '', message: '' })

    try {
      await createAdminUser(userForm)
      setUserForm(emptyUserForm)
      await loadDashboard()
      setFeedback({ tone: 'success', message: 'Staff user created successfully.' })
    } catch (error) {
      setFeedback({ tone: 'error', message: error.message || 'User could not be created.' })
    } finally {
      setSubmitting((current) => ({ ...current, user: false }))
    }
  }

  function startSermonEdit(sermon) {
    setEditingSermonId(sermon._id)
    setSermonForm(sermonToForm(sermon))
  }

  function startEventEdit(eventItem) {
    setEditingEventId(eventItem._id)
    setEventForm(eventToForm(eventItem))
  }

  async function handleDeleteSermon(sermon) {
    if (!window.confirm(`Delete sermon "${sermon.title}"?`)) {
      return
    }

    try {
      await deleteAdminSermon(sermon._id)
      if (editingSermonId === sermon._id) {
        resetSermonEditor()
      }
      await loadDashboard()
      setFeedback({ tone: 'success', message: 'Sermon deleted successfully.' })
    } catch (error) {
      setFeedback({ tone: 'error', message: error.message || 'Sermon could not be deleted.' })
    }
  }

  async function handleDeleteEvent(eventItem) {
    if (!window.confirm(`Delete event "${eventItem.title}"?`)) {
      return
    }

    try {
      await deleteAdminEvent(eventItem._id)
      if (editingEventId === eventItem._id) {
        resetEventEditor()
      }
      await loadDashboard()
      setFeedback({ tone: 'success', message: 'Event deleted successfully.' })
    } catch (error) {
      setFeedback({ tone: 'error', message: error.message || 'Event could not be deleted.' })
    }
  }

  const latestTopSermons = data?.sermonStats?.top || []
  const recentContacts = data?.contacts?.slice(0, 4) || []
  const recentSubscribers = data?.subscribers?.slice(0, 4) || []
  const managedSermons = data?.sermons?.slice(0, 8) || []
  const managedEvents = data?.events?.slice(0, 8) || []
  const analytics = data?.analytics
  const users = data?.users || []

  if (!token) {
    return (
      <section className="admin-auth-shell px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-10">
        <div className="admin-auth-card mx-auto max-w-3xl rounded-[2rem] p-8 shadow-glow sm:p-10">
          <p className="eyebrow text-bronze">Secure Admin</p>
          <h1 className="display-title mt-4 text-5xl text-white">A protected publishing control room.</h1>
          <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
            Sign in with a seeded staff account to manage content, reporting, and communication. The first admin account is created from the server environment variables on boot.
          </p>
          <form className="mt-10 grid gap-5 sm:grid-cols-2" onSubmit={handleLogin}>
            <label className="admin-field sm:col-span-1">
              <span>Email</span>
              <input name="email" type="email" value={credentials.email} onChange={handleCredentialChange} placeholder="admin@faithfamilychurchkidiki.org" required />
            </label>
            <label className="admin-field sm:col-span-1">
              <span>Password</span>
              <input name="password" type="password" value={credentials.password} onChange={handleCredentialChange} placeholder="Enter admin password" required />
            </label>
            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button className="admin-button admin-button--primary" type="submit" disabled={loading}>
                {loading ? 'Signing in...' : 'Unlock dashboard'}
              </button>
              <p className="text-sm text-white/80">Change the seeded account credentials in the root environment file before production.</p>
            </div>
          </form>
          {authError ? <div className="admin-banner admin-banner--error mt-6">{authError}</div> : null}
        </div>
      </section>
    )
  }

  if (loading && !data) {
    return (
      <section className="admin-page px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/80 p-10 shadow-glow">
          <p className="eyebrow text-bronze">Admin Dashboard</p>
          <h1 className="display-title mt-3 text-4xl">Loading secure workspace...</h1>
        </div>
      </section>
    )
  }

  return (
    <section className="admin-page px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="admin-hero rounded-[2rem] p-8 shadow-glow sm:p-10">
          <p className="eyebrow text-bronze">Admin Dashboard</p>
          <div className="mt-4 flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="display-title text-5xl text-white">Manage sermons, events, giving, analytics, and staff.</h1>
              <p className="mt-4 max-w-3xl text-base text-white/90 sm:text-lg">
                Signed in as {data?.user?.name} with {role} access. Admins can manage staff accounts, editors can publish content, and viewers can monitor reporting.
              </p>
            </div>
            <button className="admin-button admin-button--ghost" type="button" onClick={handleLogout}>Sign out</button>
          </div>
          {feedback.message ? <div className={`admin-banner admin-banner--${feedback.tone || 'muted'} mt-6`}>{feedback.message}</div> : null}
          {authError ? <div className="admin-banner admin-banner--error mt-6">{authError}</div> : null}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 shadow-glow"><p className="text-sm uppercase tracking-[0.22em] text-midnight/50">Total Sermons</p><p className="mt-4 text-4xl font-bold">{data.sermonStats.total}</p><p className="mt-2 text-midnight/60">Featured: {data.sermonStats.featured}</p></div>
          <div className="rounded-[2rem] bg-white p-6 shadow-glow"><p className="text-sm uppercase tracking-[0.22em] text-midnight/50">Upcoming Events</p><p className="mt-4 text-4xl font-bold">{data.eventStats.total}</p><p className="mt-2 text-midnight/60">Next: {data.eventStats.upcoming}</p></div>
          <div className="rounded-[2rem] bg-white p-6 shadow-glow"><p className="text-sm uppercase tracking-[0.22em] text-midnight/50">Total Donations</p><p className="mt-4 text-4xl font-bold">{formatCurrency(data.donationReport.total)}</p><p className="mt-2 text-midnight/60">Recent Activity</p></div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-glow">
          <h2 className="text-3xl font-bold">Quick Overview</h2>
          <p className="mt-2 text-midnight/60">Reviewing recent engagement from the community.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-sand px-5 py-4">
              <p className="font-semibold">Recent Contacts</p>
              <p className="text-3xl font-bold">{recentContacts.length}</p>
            </div>
            <div className="rounded-[1.5rem] bg-sand px-5 py-4">
              <p className="font-semibold">New Subscribers</p>
              <p className="text-3xl font-bold">{recentSubscribers.length}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          <form className="admin-panel rounded-[2rem] p-8 shadow-glow" onSubmit={handleSermonSubmit}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-bronze">Publishing</p>
                <h2 className="mt-3 text-3xl font-bold text-white">{editingSermonId ? 'Edit sermon' : 'Create sermon'}</h2>
              </div>
              <div className="flex gap-3">
                {editingSermonId ? <button className="admin-button admin-button--ghost" type="button" onClick={resetSermonEditor}>Cancel</button> : null}
                <button className="admin-button admin-button--primary" type="submit" disabled={!canManageContent || submitting.sermon}>{submitting.sermon ? 'Saving...' : editingSermonId ? 'Save sermon' : 'Publish sermon'}</button>
              </div>
            </div>
            {!canManageContent ? <p className="mt-4 text-sm text-white/68">Your role can review content but cannot publish or edit it.</p> : null}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <label className="admin-field"><span>Title</span><input name="title" value={sermonForm.title} onChange={handleSermonChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Slug</span><input name="slug" value={sermonForm.slug} onChange={handleSermonChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Speaker</span><input name="speaker" value={sermonForm.speaker} onChange={handleSermonChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Category</span><input name="category" value={sermonForm.category} onChange={handleSermonChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Series</span><input name="series" value={sermonForm.series} onChange={handleSermonChange} disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Duration in seconds</span><input name="duration" type="number" min="60" value={sermonForm.duration} onChange={handleSermonChange} required disabled={!canManageContent} /></label>
              <label className="admin-field md:col-span-2"><span>Scripture references</span><input name="scripture" value={sermonForm.scripture} onChange={handleSermonChange} placeholder="John 3:16, Romans 8:28" disabled={!canManageContent} /></label>
              <label className="admin-field md:col-span-2"><span>Description</span><textarea name="description" rows="4" value={sermonForm.description} onChange={handleSermonChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Audio URL</span><input name="audioUrl" type="url" value={sermonForm.audioUrl} onChange={handleSermonChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Notes URL</span><input name="notesUrl" type="url" value={sermonForm.notesUrl} onChange={handleSermonChange} required disabled={!canManageContent} /></label>
              <label className="admin-field md:col-span-2"><span>Cover image URL</span><input name="coverImage" type="url" value={sermonForm.coverImage} onChange={handleSermonChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Tags</span><input name="tags" value={sermonForm.tags} onChange={handleSermonChange} placeholder="grace, faith, discipleship" disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Publish date</span><input name="publishedAt" type="datetime-local" value={sermonForm.publishedAt} onChange={handleSermonChange} disabled={!canManageContent} /></label>
              <label className="admin-toggle md:col-span-2"><input name="featured" type="checkbox" checked={sermonForm.featured} onChange={handleSermonChange} disabled={!canManageContent} /><span>Feature this sermon on the site</span></label>
            </div>
          </form>

          <form className="admin-panel rounded-[2rem] p-8 shadow-glow" onSubmit={handleEventSubmit}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-bronze">Events</p>
                <h2 className="mt-3 text-3xl font-bold text-white">{editingEventId ? 'Edit event' : 'Create event'}</h2>
              </div>
              <div className="flex gap-3">
                {editingEventId ? <button className="admin-button admin-button--ghost" type="button" onClick={resetEventEditor}>Cancel</button> : null}
                <button className="admin-button admin-button--primary" type="submit" disabled={!canManageContent || submitting.event}>{submitting.event ? 'Saving...' : editingEventId ? 'Save event' : 'Publish event'}</button>
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <label className="admin-field"><span>Title</span><input name="title" value={eventForm.title} onChange={handleEventChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Slug</span><input name="slug" value={eventForm.slug} onChange={handleEventChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Category</span><input name="category" value={eventForm.category} onChange={handleEventChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Ministry</span><input name="ministry" value={eventForm.ministry} onChange={handleEventChange} disabled={!canManageContent} /></label>
              <label className="admin-field md:col-span-2"><span>Summary</span><textarea name="summary" rows="3" value={eventForm.summary} onChange={handleEventChange} required disabled={!canManageContent} /></label>
              <label className="admin-field md:col-span-2"><span>Description</span><textarea name="description" rows="4" value={eventForm.description} onChange={handleEventChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Start</span><input name="startsAt" type="datetime-local" value={eventForm.startsAt} onChange={handleEventChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>End</span><input name="endsAt" type="datetime-local" value={eventForm.endsAt} onChange={handleEventChange} required disabled={!canManageContent} /></label>
              <label className="admin-field md:col-span-2"><span>Location</span><input name="location" value={eventForm.location} onChange={handleEventChange} required disabled={!canManageContent} /></label>
              <label className="admin-field md:col-span-2"><span>Cover image URL</span><input name="coverImage" type="url" value={eventForm.coverImage} onChange={handleEventChange} required disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Online URL</span><input name="onlineUrl" type="url" value={eventForm.onlineUrl} onChange={handleEventChange} disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Livestream provider</span><input name="livestreamProvider" value={eventForm.livestreamProvider} onChange={handleEventChange} disabled={!canManageContent} /></label>
              <label className="admin-field"><span>Capacity</span><input name="capacity" type="number" min="0" value={eventForm.capacity} onChange={handleEventChange} disabled={!canManageContent} /></label>
              <label className="admin-toggle"><input name="featured" type="checkbox" checked={eventForm.featured} onChange={handleEventChange} disabled={!canManageContent} /><span>Feature this event</span></label>
              <label className="admin-toggle"><input name="remindersEnabled" type="checkbox" checked={eventForm.remindersEnabled} onChange={handleEventChange} disabled={!canManageContent} /><span>Enable reminders</span></label>
              <label className="admin-toggle"><input name="recurrenceEnabled" type="checkbox" checked={eventForm.recurrenceEnabled} onChange={handleEventChange} disabled={!canManageContent} /><span>Recurring event</span></label>
              <label className="admin-field md:col-span-2"><span>Recurrence rule</span><input name="recurrenceRule" value={eventForm.recurrenceRule} onChange={handleEventChange} placeholder="FREQ=MONTHLY;BYDAY=SU;BYSETPOS=2" disabled={!canManageContent} /></label>
            </div>
          </form>
        </div>

        <div className="grid gap-8 xl:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold">Manage sermons</h2>
              <span className="text-sm text-midnight/60">{managedSermons.length} loaded</span>
            </div>
            <div className="admin-list mt-6 space-y-4">
              {managedSermons.map((sermon) => (
                <div key={sermon._id || sermon.slug} className="admin-item rounded-[1.5rem] bg-sand px-5 py-4">
                  <div>
                    <p className="font-semibold">{sermon.title}</p>
                    <p className="text-sm text-midnight/60">{sermon.speaker} · {sermon.category} · {formatDate(sermon.publishedAt)}</p>
                  </div>
                  <div className="admin-item__actions">
                    <button type="button" className="admin-chip" onClick={() => startSermonEdit(sermon)}>Edit</button>
                    {canManageContent ? <button type="button" className="admin-chip admin-chip--danger" onClick={() => handleDeleteSermon(sermon)}>Delete</button> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl font-bold">Manage events</h2>
              <span className="text-sm text-midnight/60">{managedEvents.length} loaded</span>
            </div>
            <div className="admin-list mt-6 space-y-4">
              {managedEvents.map((eventItem) => (
                <div key={eventItem._id || eventItem.slug} className="admin-item rounded-[1.5rem] bg-sand px-5 py-4">
                  <div>
                    <p className="font-semibold">{eventItem.title}</p>
                    <p className="text-sm text-midnight/60">{eventItem.category} · {formatDate(eventItem.startsAt)} · {eventItem.location}</p>
                  </div>
                  <div className="admin-item__actions">
                    <button type="button" className="admin-chip" onClick={() => startEventEdit(eventItem)}>Edit</button>
                    {canManageContent ? <button type="button" className="admin-chip admin-chip--danger" onClick={() => handleDeleteEvent(eventItem)}>Delete</button> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-glow">
            <h2 className="text-3xl font-bold">Recent contacts</h2>
            <div className="mt-6 space-y-4">
              {recentContacts.map((contact) => (
                <div key={contact._id || contact.email} className="rounded-[1.5rem] bg-sand px-5 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold">{contact.name}</p>
                    <span className="text-sm uppercase tracking-[0.18em] text-midnight/45">{contact.status}</span>
                  </div>
                  <p className="mt-2 text-sm text-midnight/70">{contact.email}</p>
                  <p className="mt-3 text-sm text-midnight/70">{contact.message}</p>
                </div>
              ))}
              {!recentContacts.length ? <p className="text-midnight/60">No contact submissions yet.</p> : null}
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] bg-white p-8 shadow-glow">
              <h2 className="text-3xl font-bold">Recent subscribers</h2>
              <div className="mt-6 space-y-4">
                {recentSubscribers.map((subscriber) => (
                  <div key={subscriber._id || subscriber.email} className="rounded-[1.5rem] bg-sand px-5 py-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold">{subscriber.firstName || 'Newsletter subscriber'}</p>
                      <span className="text-sm uppercase tracking-[0.18em] text-midnight/45">{subscriber.source}</span>
                    </div>
                    <p className="mt-2 text-sm text-midnight/70">{subscriber.email}</p>
                  </div>
                ))}
                {!recentSubscribers.length ? <p className="text-midnight/60">No subscribers yet.</p> : null}
              </div>
            </div>

          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <form className="rounded-[2rem] bg-white p-8 shadow-glow" onSubmit={handleUserSubmit}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow text-bronze">Staff Accounts</p>
                <h2 className="mt-3 text-3xl font-bold">Create user</h2>
              </div>
              <button className="admin-button admin-button--primary" type="submit" disabled={!canManageUsers || submitting.user}>{submitting.user ? 'Saving...' : 'Create user'}</button>
            </div>
            {!canManageUsers ? <p className="mt-4 text-sm text-midnight/60">Only admins can create or manage staff accounts.</p> : null}
            <div className="mt-8 grid gap-4">
              <label className="admin-field admin-field--light"><span>Name</span><input name="name" value={userForm.name} onChange={handleUserChange} required disabled={!canManageUsers} /></label>
              <label className="admin-field admin-field--light"><span>Email</span><input name="email" type="email" value={userForm.email} onChange={handleUserChange} required disabled={!canManageUsers} /></label>
              <label className="admin-field admin-field--light"><span>Role</span><select name="role" value={userForm.role} onChange={handleUserChange} disabled={!canManageUsers}><option value="admin">Admin</option><option value="editor">Editor</option><option value="viewer">Viewer</option></select></label>
              <label className="admin-field admin-field--light"><span>Password</span><input name="password" type="password" value={userForm.password} onChange={handleUserChange} required disabled={!canManageUsers} /></label>
            </div>
          </form>

          <div className="rounded-[2rem] bg-white p-8 shadow-glow">
            <h2 className="text-3xl font-bold">Staff directory</h2>
            <div className="mt-6 space-y-4">
              {users.map((user) => (
                <div key={user._id} className="admin-item rounded-[1.5rem] bg-sand px-5 py-4">
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-midnight/60">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex rounded-full bg-midnight px-4 py-2 text-sm font-semibold text-white">{user.role}</span>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-midnight/40">{user.lastLoginAt ? `Active ${formatDate(user.lastLoginAt)}` : 'No login yet'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
