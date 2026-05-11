import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: '' },
    subject: { type: String, default: '' },
    message: { type: String, required: true },
    purposeOfVisit: { type: String, default: '' },
    prayerRequest: { type: Boolean, default: false },
    isPrivate: { type: Boolean, default: false },
    status: { type: String, enum: ['new', 'reviewed', 'resolved'], default: 'new' }
  },
  { timestamps: true }
)

contactSchema.index({ status: 1, createdAt: -1 })
contactSchema.index({ prayerRequest: 1, createdAt: -1 })

export default mongoose.model('Contact', contactSchema)
