import { useState } from 'react'
import { processDonation } from '../services/donationService'

export default function useDonation() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function donate(values) {
    setLoading(true)
    setError('')

    try {
      return await processDonation(values)
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { donate, loading, error }
}
