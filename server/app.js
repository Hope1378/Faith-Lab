import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import analyticsRouter from './routes/analytics.js'
import adminUsersRouter from './routes/adminUsers.js'
import authRouter from './routes/auth.js'
import sermonsRouter from './routes/sermons.js'
import eventsRouter from './routes/events.js'
import donationsRouter from './routes/donations.js'
import newsletterRouter from './routes/newsletter.js'
import contactRouter from './routes/contact.js'
import { apiLimiter } from './middleware/rateLimiter.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'
import { connectDatabase } from './config/database.js'
import { env } from './config/environment.js'

const app = express()
app.set('trust proxy', 1)

// Database initialization middleware removed per user request

app.use(helmet({
  contentSecurityPolicy: false // Disable CSP for easier integration if needed, or configure specifically
}))
app.use(cors({ origin: env.clientUrl, credentials: true }))
app.use(morgan('dev'))
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(apiLimiter)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', environment: env.nodeEnv })
})

app.use('/api/auth', authRouter)
app.use('/api/admin/users', adminUsersRouter)
app.use('/api/analytics', analyticsRouter)
app.use('/api/sermons', sermonsRouter)
app.use('/api/events', eventsRouter)
app.use('/api/donations', donationsRouter)
app.use('/api/newsletter', newsletterRouter)
app.use('/api/contact', contactRouter)

app.use(notFoundHandler)
app.use(errorHandler)

export default app
