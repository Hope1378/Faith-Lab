import mongoose from 'mongoose'

const registrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    ticketCount: { type: Number, default: 1 },
    waitlisted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
  },
  { _id: false }
)

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    startsAt: { type: Date, required: true },
    endsAt: { type: Date, required: true },
    recurrence: {
      enabled: { type: Boolean, default: false },
      rule: { type: String, default: '' }
    },
    location: { type: String, required: true },
    onlineUrl: { type: String, default: '' },
    livestreamProvider: { type: String, default: '' },
    capacity: { type: Number, default: 0 },
    remindersEnabled: { type: Boolean, default: true },
    registrations: [registrationSchema],
    waitlist: [registrationSchema],
    ministry: { type: String, default: '' },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
)

eventSchema.index({ startsAt: 1 })
eventSchema.index({ category: 1, featured: 1, startsAt: 1 })

export default mongoose.model('Event', eventSchema)
