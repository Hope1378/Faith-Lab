import mongoose from 'mongoose'

const newsletterSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, default: '' },
    source: { type: String, default: 'website' },
    tags: [{ type: String }]
  },
  { timestamps: true }
)

newsletterSchema.index({ createdAt: -1 })

export default mongoose.model('Newsletter', newsletterSchema)
