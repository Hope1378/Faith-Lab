import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '../../.env') })

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5001),
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || '',
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
  mapsEmbedUrl: process.env.MAPS_EMBED_URL || '',
  jwtSecret: process.env.JWT_SECRET || 'development-secret',
  adminEmail: process.env.ADMIN_EMAIL || 'admin@faithfamilychurchkidiki.org',
  adminPassword: process.env.ADMIN_PASSWORD || 'change-me-now',
  adminName: process.env.ADMIN_NAME || 'Site Administrator',
  googleSheetsUrl: process.env.GOOGLE_SHEETS_URL || ''
}
