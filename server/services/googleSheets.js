import { env } from '../config/environment.js'

/**
 * Syncs form data to Google Sheets.
 * Adds .trim() to URL to prevent failures from accidental spaces in Vercel configs.
 */
export async function syncToGoogleSheets(data) {
  const rawUrl = env.googleSheetsUrl
  if (!rawUrl) {
    console.warn('[Google Sheets] No URL found.')
    return false
  }

  const cleanUrl = rawUrl.trim()

  try {
    const payload = {
      Timestamp: new Date().toLocaleString(),
      Name: String(data.name || ''),
      Email: String(data.email || ''),
      Phone: String(data.phone || ''),
      Subject: String(data.subject || 'Donation'),
      Message: String(data.message || ''),
      'Purpose of Visit': String(data.purposeOfVisit || 'Donation'),
      Amount: String(data.amount || ''),
      Fund: String(data.fund || '')
    }

    console.log('[Google Sheets] Syncing via text/plain JSON...')
    
    // Using 'text/plain' prevents many preflight/CORS/proxy issues while still sending valid JSON
    const response = await fetch(cleanUrl, {
      method: 'POST',
      headers: { 
        'Content-Type': 'text/plain' 
      },
      body: JSON.stringify(payload),
      redirect: 'follow'
    })
    
    return response.ok
  } catch (error) {
    console.error('[Google Sheets] Sync Error:', error.message)
    return false
  }
}
