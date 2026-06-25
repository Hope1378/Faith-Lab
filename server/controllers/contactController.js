import { syncToGoogleSheets } from '../services/googleSheets.js'

/**
 * Contact Form Controller
 * Updated to sync with new Google Sheets URL.
 */
export async function createContact(req, res) {
  const data = req.body
  try {
    // 1. Sync to Google Sheets
    await syncToGoogleSheets({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      purposeOfVisit: data.purposeOfVisit || data.subject || 'Contact Form'
    })

    // 2. Respond to the user
    res.status(201).json({ success: true, message: 'Message sent.' })
  } catch (error) {
    console.error('[Contact Controller] Failed:', error.message)
    res.status(500).json({ success: false, message: 'Server error' })
  }
}

export async function getContacts(req, res) {
  res.json([]) // Database disabled
}
