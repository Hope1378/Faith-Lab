export const CHURCH_INFO = {
  name: 'Radiant Grace Church',
  tagline: 'A house of presence, formation, and mission.',
  phone: '+1 (555) 014-1480',
  email: 'hello@radiantgrace.church',
  address: '145 Hope Avenue, Charlotte, NC 28202',
  coordinates: { lat: 35.2271, lng: -80.8431 },
  serviceTimes: [
    { label: 'Sunday Worship', time: '9:00 AM & 11:15 AM', location: 'Main Sanctuary' },
    { label: 'Wednesday Bible Study', time: '7:00 PM', location: 'Community Hall' },
    { label: 'Friday Prayer Night', time: '6:30 PM', location: 'Prayer Chapel' }
  ],
  givingFunds: ['General', 'Building', 'Missions', 'Benevolence'],
  sermonCategories: ['Sunday Service', 'Bible Study', 'Youth', 'Prayer'],
  eventCategories: ['Worship', 'Outreach', 'Youth', 'Children', 'Prayer'],
  galleryCategories: ['Worship', 'Events', 'Outreach', 'Youth', 'Baptism', 'Conferences'],
  roles: ['Admin', 'Editor', 'Viewer']
}

export const API_ROUTES = {
  sermons: '/api/sermons',
  events: '/api/events',
  donations: '/api/donations',
  newsletter: '/api/newsletter',
  contact: '/api/contact'
}

export const DEFAULT_GIVING_GOALS = {
  monthly: 45000,
  yearly: 540000
}
