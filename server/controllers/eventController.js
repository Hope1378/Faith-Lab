import dayjs from 'dayjs'
import nodemailer from 'nodemailer'
import Event from '../models/Event.js'
import { env } from '../config/environment.js'
import { validateEventRegistration } from '../../shared/validation.js'

function transporter() {
  if (!env.smtpHost || !env.smtpUser || !env.smtpPass) {
    return null
  }

  return nodemailer.createTransport({
    host: env.smtpHost,
    port: env.smtpPort,
    auth: { user: env.smtpUser, pass: env.smtpPass }
  })
}

function buildIcs(event) {
  const formatDate = (value) => dayjs(value).utc().format('YYYYMMDDTHHmmss[Z]')

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Radiant Grace Church//Events//EN',
    'BEGIN:VEVENT',
    `UID:${event.slug}@radiantgrace.church`,
    `DTSTAMP:${formatDate(new Date())}`,
    `DTSTART:${formatDate(event.startsAt)}`,
    `DTEND:${formatDate(event.endsAt)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.summary}`,
    `LOCATION:${event.location}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')
}

const hardcodedEvents = [
  {
    title: 'Sunday Worship Encounter',
    slug: 'sunday-service',
    category: 'Sunday Service',
    summary: 'Join us every Sunday for worship, a life-changing message, and true fellowship in Christ.',
    description: 'Experience the presence of God with Pastor Rebbecca Muwanguzzi and the Faith Family Church community. All are welcome!',
    coverImage: '/images/c2.jpg',
    startsAt: new Date(Date.now() + 86400000),
    endsAt: new Date(Date.now() + 86400000 + 10800000),
    location: 'Main Sanctuary',
    capacity: 500,
    featured: true
  },
  {
    title: 'Children\'s Fellowship',
    slug: 'children-fellowship',
    category: 'Children',
    summary: 'A special time for kids to grow in faith, make friends, and have fun.',
    description: 'Our weekly children\'s ministry includes songs, Bible stories, and creative activities.',
    coverImage: '/images/c1.jpg',
    startsAt: new Date(Date.now() + 86400000 * 3),
    endsAt: new Date(Date.now() + 86400000 * 3 + 7200000),
    location: 'Kidiki Hall',
    capacity: 100,
    featured: true
  },
  {
    title: 'City Outreach',
    slug: 'city-outreach',
    category: 'Outreach',
    summary: 'Serve families, feed neighbors, and pray block by block.',
    description: 'Volunteer teams mobilize across the city with food, prayer, and practical support.',
    coverImage: '/images/c3.jpg',
    startsAt: new Date(Date.now() + 86400000 * 7),
    endsAt: new Date(Date.now() + 86400000 * 7 + 14400000),
    location: 'FFC Kidiki',
    capacity: 120,
    featured: true
  }
]

export async function getEvents(req, res) {
  const { view = 'month' } = req.query
  res.json({ view, events: hardcodedEvents })
}

export async function getEventBySlug(req, res) {
  const event = hardcodedEvents.find(e => e.slug === req.params.slug)
  if (!event) {
    return res.status(404).json({ message: 'Event not found.' })
  }
  return res.json(event)
}

export async function createEvent(req, res) {
  const event = await Event.create(req.body)
  res.status(201).json(event)
}

export async function updateEvent(req, res) {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  if (!event) {
    return res.status(404).json({ message: 'Event not found.' })
  }

  return res.json(event)
}

export async function deleteEvent(req, res) {
  const event = await Event.findByIdAndDelete(req.params.id)

  if (!event) {
    return res.status(404).json({ message: 'Event not found.' })
  }

  return res.status(204).send()
}

import { syncToGoogleSheets } from '../services/googleSheets.js'

export async function registerForEvent(req, res) {
  const data = req.body
  try {
    // 1. Sync to Google Sheets
    await syncToGoogleSheets({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: `Registration for ${data.ticketCount || 1} guest(s)`,
      purposeOfVisit: data.purposeOfVisit || 'Event Registration'
    })

    res.status(201).json({
      message: 'Registration received.',
      success: true
    })
  } catch (error) {
    console.error('[Event Registration] Failed:', error.message)
    res.status(500).json({ success: false, message: 'Registration failed.' })
  }
}


export async function downloadEventInvite(req, res) {
  const event = await Event.findOne({ slug: req.params.slug })

  if (!event) {
    return res.status(404).json({ message: 'Event not found.' })
  }

  res.setHeader('Content-Type', 'text/calendar')
  res.setHeader('Content-Disposition', `attachment; filename="${event.slug}.ics"`)
  res.send(buildIcs(event))
}

export async function getEventDashboard(req, res) {
  const total = await Event.countDocuments()
  const upcoming = await Event.countDocuments({ startsAt: { $gte: new Date() } })
  const waitlisted = await Event.aggregate([
    { $project: { waitlistCount: { $size: '$waitlist' } } },
    { $group: { _id: null, total: { $sum: '$waitlistCount' } } }
  ])

  res.json({ total, upcoming, waitlisted: waitlisted[0]?.total || 0 })
}
