import { useEffect, useState } from 'react'
import { fetchEvents } from '../services/eventService'

export default function useEvents(filters) {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)

    fetchEvents(filters)
      .then((payload) => {
        if (active) {
          // Handle both direct array and { view, events } wrapper
          const data = Array.isArray(payload) ? payload : (payload?.events && Array.isArray(payload.events) ? payload.events : [])
          setEvents(data)
        }
      })
      .catch(err => {
        console.error('[useEvents] Hook error:', err.message)
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [filters.category, filters.view])

  return { events, loading }
}
