import Sermon from '../models/Sermon.js'

const hardcodedSermons = [
  {
    title: 'The Power of Faith',
    slug: 'power-of-faith',
    speaker: 'Pastor Rebbecca Muwanguzzi',
    category: 'Spiritual Growth',
    series: 'Faith Foundations',
    scripture: ['Hebrews 11:1'],
    description: 'Understanding the substance of things hoped for and the evidence of things not seen.',
    audioUrl: '#',
    notesUrl: '#',
    coverImage: '/images/s1.jpg',
    duration: 3200,
    publishedAt: new Date(Date.now() - 86400000 * 14),
    featured: true,
    views: 245
  },
  {
    title: 'Walking in Grace',
    slug: 'walking-in-grace',
    speaker: 'Pastor Rebbecca Muwanguzzi',
    category: 'Christian Life',
    series: 'Living the Word',
    scripture: ['Ephesians 2:8'],
    description: 'Exploring the unmerited favor of God that sustains us through every trial.',
    audioUrl: '#',
    notesUrl: '#',
    coverImage: '/images/outreach102.jpg',
    duration: 3450,
    publishedAt: new Date(Date.now() - 86400000 * 7),
    featured: true,
    views: 187
  },
  {
    title: 'Sunday Worship Encounter',
    slug: 'sunday-service-blessing',
    speaker: 'Pastor Rebbecca Muwanguzzi',
    category: 'Sunday Service',
    series: 'Weekly Gatherings',
    scripture: ['John 3:16'],
    description: 'Join us every Sunday for worship, a life-changing message, and true fellowship in Christ.',
    audioUrl: '#',
    notesUrl: '#',
    coverImage: '/images/c2.jpg',
    duration: 3600,
    publishedAt: new Date(),
    featured: true,
    views: 124
  },
  {
    title: 'The Prayer Altar',
    slug: 'prayer-altar-blessing',
    speaker: 'Pastor Rebbecca Muwanguzzi',
    category: 'Prayer',
    series: 'Friday Prayer',
    scripture: ['Matthew 6:6'],
    description: 'Prayer is every Friday, led by Pastor Rebbecca Muwanguzzi.',
    audioUrl: '#',
    notesUrl: '#',
    coverImage: '/images/sundayservice5.jpg',
    duration: 2700,
    publishedAt: new Date(),
    featured: true,
    views: 89
  }
]

export async function getSermons(req, res) {
  res.json(hardcodedSermons)
}

export async function getSermonBySlug(req, res) {
  const sermon = hardcodedSermons.find(s => s.slug === req.params.slug)
  if (!sermon) {
    return res.status(404).json({ message: 'Sermon not found.' })
  }
  const recent = hardcodedSermons.filter(s => s.slug !== sermon.slug).slice(0, 4)
  return res.json({ sermon, recent })
}

export async function createSermon(req, res) {
  const sermon = await Sermon.create(req.body)
  res.status(201).json(sermon)
}

export async function updateSermon(req, res) {
  const sermon = await Sermon.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  if (!sermon) {
    return res.status(404).json({ message: 'Sermon not found.' })
  }

  return res.json(sermon)
}

export async function deleteSermon(req, res) {
  const sermon = await Sermon.findByIdAndDelete(req.params.id)

  if (!sermon) {
    return res.status(404).json({ message: 'Sermon not found.' })
  }

  return res.status(204).send()
}

export async function getSermonDashboard(req, res) {
  const total = await Sermon.countDocuments()
  const featured = await Sermon.countDocuments({ featured: true })
  const top = await Sermon.find().sort({ views: -1 }).limit(5)
  res.json({ total, featured, top })
}
