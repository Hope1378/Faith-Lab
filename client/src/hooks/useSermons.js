import { useEffect, useState } from 'react'
import { fetchSermons } from '../services/sermonService'

export default function useSermons(filters) {
  const [sermons, setSermons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)

    fetchSermons(filters)
      .then((payload) => {
        if (active) {
          // Robust check for array, some APIs might wrap in data: []
          const data = Array.isArray(payload) ? payload : (payload?.data && Array.isArray(payload.data) ? payload.data : [])
          setSermons(data)
        }
      })
      .catch(err => {
        console.error('[useSermons] Hook error:', err.message)
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [filters.category, filters.search, filters.sort, filters.speaker])

  return { sermons, loading }
}
