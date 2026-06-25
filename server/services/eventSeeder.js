import Event from '../models/Event.js'

export async function seedEvents() {
  const count = await Event.countDocuments()
  if (count > 0) return

  console.log('Seeding initial events from constants...')
  
  const initialEvents = [
    {
      title: 'Sunday Worship Encounter',
      slug: 'sunday-service',
      category: 'Sunday Service',
      summary: 'Join us every Sunday for worship, a life-changing message, and true fellowship in Christ.',
      description: 'Experience the presence of God with Pastor Rebbecca Muwanguzzi and the Faith Family Church community. All are welcome!',
      coverImage: '/images/c2.jpg',
      startsAt: new Date(Date.now() + 86400000), // Tomorrow
      endsAt: new Date(Date.now() + 86400000 + 10800000),
      location: 'Main Sanctuary',
      capacity: 500,
      featured: true
    },
    {
      title: 'City Outreach',
      slug: 'city-outreach',
      category: 'Outreach',
      summary: 'Serve families, feed neighbors, and pray block by block.',
      description: 'Volunteer teams mobilize across the city with food, prayer, and practical support.',
      coverImage: '/images/c3.jpg',
      startsAt: new Date(Date.now() + 86400000 * 7), // Next week
      endsAt: new Date(Date.now() + 86400000 * 7 + 14400000),
      location: 'FFC Kidiki',
      capacity: 120,
      featured: true
    },
    {
      title: "Children's Fellowship",
      slug: 'childrens-fellowship',
      category: 'Children',
      summary: 'A fun and interactive Bible study for children.',
      description: 'Children gather for a special time of learning, worship, and fun activities led by the Children Ministry Team.',
      coverImage: '/images/c1.jpg',
      startsAt: new Date(Date.now() + 86400000 * 3),
      endsAt: new Date(Date.now() + 86400000 * 3 + 7200000),
      location: "Children's Fellowship Hall",
      capacity: 80,
      featured: true
    },
    {
      title: 'Church Anniversary 2026',
      slug: 'anniversary-2026',
      category: 'Special Event',
      summary: 'Join us as we celebrate another year of God\'s faithfulness.',
      description: 'A special day of worship, testimony, and community fellowship.',
      coverImage: '/images/event-anniversary.webp',
      startsAt: new Date('2026-05-15T10:00:00Z'),
      endsAt: new Date('2026-05-15T14:00:00Z'),
      location: 'Radiant Grace Church - Main Sanctuary',
      capacity: 200,
      featured: true
    }
  ]

  await Event.insertMany(initialEvents)
}
