import { syncToGoogleSheets } from '../services/googleSheets.js'

/**
 * Newsletter Controller
 * Updated to sync with new Google Sheets URL.
 */
export async function subscribe(req, res) {
  const data = req.body
  try {
    // 1. Sync to Google Sheets
    await syncToGoogleSheets({
      name: 'Newsletter Subscriber',
      email: data.email,
      message: 'New newsletter subscription',
      purposeOfVisit: 'Newsletter'
    })

    res.status(201).json({ success: true, message: 'Subscribed successfully.' })
  } catch (error) {
    console.error('[Newsletter] Failed:', error.message)
    res.status(500).json({ success: false, message: 'Subscription failed' })
  }
}

export async function getSubscribers(req, res) {
  res.json([]) // Database disabled
}
