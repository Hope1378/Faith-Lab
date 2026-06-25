import mongoose from 'mongoose'

const sermonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    speaker: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    series: { type: String, default: '' },
    scripture: [{ type: String, trim: true }],
    description: { type: String, required: true },
    audioUrl: { type: String, required: true },
    notesUrl: { type: String, required: true },
    coverImage: { type: String, required: true },
    duration: { type: Number, required: true },
    views: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    tags: [{ type: String, trim: true }],
    publishedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

sermonSchema.index({ title: 'text', speaker: 'text', description: 'text', scripture: 'text', tags: 'text' })
sermonSchema.index({ publishedAt: -1 })
sermonSchema.index({ category: 1, speaker: 1, featured: 1 })

export default mongoose.model('Sermon', sermonSchema)
