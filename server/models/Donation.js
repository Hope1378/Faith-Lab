import mongoose from 'mongoose'

const donationSchema = new mongoose.Schema(
  {
    stripeSessionId: { type: String, unique: true, sparse: true },
    stripeCustomerId: { type: String, default: '' },
    name: { type: String, default: '' },
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    fund: { type: String, required: true },
    frequency: { type: String, enum: ['one-time', 'monthly'], default: 'one-time' },
    anonymous: { type: Boolean, default: false },
    message: { type: String, default: '' },
    statementYear: { type: Number, default: () => new Date().getFullYear() },
    status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    paymentMethod: { type: String, enum: ['card', 'cashapp', 'zelle', 'airtel_money'], default: 'card' },
    receiptUrl: { type: String, default: '' },
    manualNote: { type: String, default: '' }
  },
  { timestamps: true }
)

donationSchema.index({ status: 1, createdAt: -1 })
donationSchema.index({ fund: 1, createdAt: -1 })

export default mongoose.model('Donation', donationSchema)
