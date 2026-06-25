import fs from 'fs'
import os from 'os'
import path from 'path'
import PDFDocument from 'pdfkit'
import nodemailer from 'nodemailer'
import Donation from '../models/Donation.js'
import { env } from '../config/environment.js'
import { stripe } from '../config/stripe.js'
import { syncToGoogleSheets } from '../services/googleSheets.js'

function buildTransporter() {
  if (!env.smtpHost || !env.smtpUser || !env.smtpPass) {
    return null
  }

  return nodemailer.createTransport({
    host: env.smtpHost,
    port: env.smtpPort,
    auth: { user: env.smtpUser, pass: env.smtpPass }
  })
}

async function createReceiptPdf(donation) {
  const filePath = path.join(os.tmpdir(), `donation-${donation._id}.pdf`)
  const doc = new PDFDocument()
  const stream = fs.createWriteStream(filePath)
  doc.pipe(stream)
  doc.fontSize(22).text('Faith Family Church Kidiki Donation Receipt', { underline: true })
  doc.moveDown()
  doc.fontSize(12).text(`Donor: ${donation.anonymous ? 'Anonymous' : donation.name || 'Anonymous'}`)
  doc.text(`Email: ${donation.email}`)
  doc.text(`Fund: ${donation.fund}`)
  doc.text(`Amount: $${donation.amount.toFixed(2)}`)
  doc.text(`Frequency: ${donation.frequency}`)
  doc.text(`Date: ${new Date(donation.createdAt).toLocaleString()}`)
  doc.text('This donation may be tax-deductible according to applicable laws.')
  doc.end()
  await new Promise((resolve) => stream.on('finish', resolve))
  return filePath
}

async function sendReceipt(donation) {
  const transporter = buildTransporter()
  if (!transporter) {
    return
  }

  const pdfPath = await createReceiptPdf(donation)
  await transporter.sendMail({
    from: env.smtpFrom,
    to: donation.email,
    subject: 'Your donation receipt from Faith Family Church Kidiki',
    html: `<p>Thank you for your generosity. Attached is your donation receipt for $${donation.amount.toFixed(2)}.</p>`,
    attachments: [{ filename: 'donation-receipt.pdf', path: pdfPath }]
  })
}

export async function createDonation(req, res) {
  const payload = req.body
  let donation = null
  
    // Database saving disabled by user request
    donation = {
      _id: 'stripe_' + Math.random().toString(36).substr(2, 9),
      ...payload,
      amount: Number(payload.amount),
      createdAt: new Date()
    }

  // 1. Sync to Google Sheets immediately to record the intent/attempt
  try {
    await syncToGoogleSheets({
      name: payload.name || (payload.anonymous ? 'Anonymous' : 'Donor'),
      email: payload.email,
      phone: payload.phone || '',
      subject: `Donation: ${payload.fund}`,
      message: `Amount: $${payload.amount} | Fund: ${payload.fund} | Method: ${payload.paymentMethod}${payload.anonymous ? ' (Anonymous)' : ''}`,
      purposeOfVisit: 'Donation',
      amount: payload.amount,
      fund: payload.fund
    })
  } catch (syncError) {
    console.error('[Donation Sync] Google Sheets failed:', syncError.message)
    // We don't block the user if sync fails, just log it
  }

  // Handle Stripe Card Payment if selected
  if (payload.paymentMethod === 'card') {
    if (!stripe) {
      return res.status(503).json({ message: 'Stripe is not configured on the server.' })
    }

    try {
      const intent = await stripe.paymentIntents.create({
        amount: Math.round(Number(payload.amount) * 100),
        currency: 'usd',
        receipt_email: payload.email,
        description: `Faith Family Church ${payload.fund} Fund Donation`,
        metadata: {
          donationId: String(donation._id),
          fund: payload.fund,
          frequency: payload.frequency || 'one-time',
          anonymous: String(Boolean(payload.anonymous))
        }
      })

      // Database storage disabled

      return res.status(201).json({ 
        success: true, 
        clientSecret: intent.client_secret, 
        donationId: donation._id 
      })
    } catch (error) {
      console.error('Stripe Intent error:', error)
      return res.status(500).json({ message: 'Failed to initiate Stripe payment.' })
    }
  }

  // Handle manual methods (CashApp, Zelle, Airtel)
  res.status(201).json({ 
    success: true, 
    donationId: donation._id,
    message: 'Donation intent recorded successfully.'
  })
}


export async function confirmDonationPayment(req, res) {
  const { id } = req.params
  
  // 1. Respond immediately
  res.json({ success: true, message: 'Donation confirmed.' })

  // 2. Heavy lifting in background
    // Background confirmation now only sends email (No DB lookup)
    console.log('[Background Confirmation] Payment confirmed for ID:', id)
    // In a real stateless app, we would use the Stripe Webhook to trigger sendReceipt
    // For now we just log it since we removed the DB persistence
}



// Webhook logic removed (Stripe cleanup)

export async function getDonations(req, res) {
  res.json([]) // No database storage available
}

export async function getDonationReport(req, res) {
  res.json({ total: 0, count: 0, byFund: {} }) // No database storage available
}
