import mongoose from 'mongoose'

const analyticsEventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    type: { type: String, enum: ['pageview', 'engagement', 'conversion', 'admin'], required: true },
    path: { type: String, default: '/' },
    sessionId: { type: String, default: '' },
    referrer: { type: String, default: '' },
    userAgent: { type: String, default: '' },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} }
  },
  { timestamps: true }
)

analyticsEventSchema.index({ type: 1, createdAt: -1 })
analyticsEventSchema.index({ name: 1, createdAt: -1 })
analyticsEventSchema.index({ path: 1, createdAt: -1 })
analyticsEventSchema.index({ sessionId: 1, createdAt: -1 })

export default mongoose.model('AnalyticsEvent', analyticsEventSchema)