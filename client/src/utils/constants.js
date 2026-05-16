export const navigation = [
  { label: 'Home', to: '/ministries/ffck' },
  { 
    label: 'Sermons', 
    to: '/ministries/ffck/sermons',
    dropdown: [
      { label: 'Sermon Archive', to: '/ministries/ffck/sermons' },
      { label: 'Watch Live', to: '/ministries/ffck/watch-live' }
    ]
  },
  { label: 'Events', to: '/ministries/ffck/events' },
  { label: 'Gallery', to: '/ministries/ffck/gallery' },
  { label: 'About', to: '/ministries/ffck/about' },
  { label: 'Contact', to: '/ministries/ffck/contact' },
  { label: 'Admin', to: '/ministries/ffck/admin' }
]

export const primaryNavigation = [
  { label: 'Home', to: '/ministries/ffck' },
  { 
    label: 'Sermons', 
    to: '/ministries/ffck/sermons',
    dropdown: [
      { label: 'Sermon Archive', to: '/ministries/ffck/sermons' },
      { label: 'Watch Live', to: '/ministries/ffck/watch-live' }
    ]
  },
  { label: 'Events', to: '/ministries/ffck/events' },
  { label: 'Gallery', to: '/ministries/ffck/gallery' },
  { label: 'About', to: '/ministries/ffck/about' },
  { label: 'Contact', to: '/ministries/ffck/contact' }
]

export const actionNavigation = [
  { label: 'Global Home', to: '/', accent: 'utility' },
  { label: 'Admin', to: '/ministries/ffck/admin', accent: 'utility' },
  { label: 'Give', to: '/ministries/ffck/give', accent: 'primary' }
]

export const siteConfig = {
  churchName: 'Faith Family Church Kidiki',
  tagline: 'A family of faith rooted in Christ and serving Kamuli with love.',
  description: 'Faith Family Church Kidiki is a registered NGO in Kamuli, Uganda, committed to worship, discipleship, prayer, generosity, and community impact.',
  ourHeart: {
    eyebrow: 'Welcome',
    title: 'Welcome Home',
    description: 'A Christ-centered community in Kidiki, Uganda dedicated to worship, discipleship, and service.',
    pillars: ['Worship', 'Discipleship', 'Outreach', 'Fellowship']
  },
  scriptureBar: 'This house will be filled with a greater magnificence than it once knew. — Haggai 2:9',
  scriptureBars: [
    'This house will be filled with a greater magnificence than it once knew. — Haggai 2:9',
    'My presence will go with you, and I will give you rest. — Exodus 33:14',
    'The Lord is building us together into a dwelling place for God by the Spirit. — Ephesians 2:22'
  ],
  heroArtwork: '/ffck_ultra_premium_hero_graphic_1778297535496.png',
  phone: 'US: +1 (341) 240-6219',
  secondaryPhone: 'UG: +256 744 914 802',
  email: 'faithfamilychurchkidiki@gmail.com',
  address: 'Kidiki, Kaliro Road, Kamuli, Uganda',
  mapsEmbedUrl: process.env.REACT_APP_MAPS_EMBED_URL || 'https://maps.google.com/maps?q=Kidiki%2C%20Kamuli%2C%20Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed',
  streamEmbed: 'https://www.youtube.com/embed/rODvPVYLeFo',
  socialMedia: [
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' }
  ],
  socials: [
    { label: 'Email', href: 'mailto:faithfamilychurchkidiki@gmail.com' },
    { label: 'Call US', href: 'tel:+13412406219' },
    { label: 'Call UG', href: 'tel:+256744914802' }
  ],
  paymentMethods: {
    cashapp: {
      label: 'CashApp',
      handle: '$FaithFamilyChurch',
      instructions: 'Please include your email in the note for your receipt.'
    },
    zelle: {
      label: 'Zelle',
      handle: 'giving@faithfamilychurchkidiki.org',
      instructions: 'Send to our official church email address.'
    },
    airtelMoney: {
      label: 'Airtel Money',
      number: '+256 700 000 000',
      name: 'Faith Family Church Kidiki',
      instructions: 'Use the merchant code or transfer directly to the registered church number.'
    }
  }
}

export const serviceTimes = [
  { title: 'Sunday Service', time: '9:00 AM - 12:00 PM', detail: 'Sanctuary' },
  { title: 'Wednesday Formation', time: '6:00 PM - 7:00 PM', detail: 'Kidiki Prayer Ground' },
  { title: 'Friday Prayer Altar', time: '6:00 PM - 7:30 PM', detail: 'Prayer Chapel' },
  { title: 'Saturday Sunday School', time: '4:00 PM - 6:00 PM', detail: "Children's Fellowship" }
]

export const galleryItems = [
  { id: 'g1', image: '/images/s1.jpg', title: 'Worship Encounter', category: 'Sunday Service' },
  { id: 'g2', image: '/images/s2.jpg', title: 'Power of Prayer', category: 'Sunday Service' },
  { id: 'g4', image: '/images/c1.jpg', title: 'Children Ministry', category: 'Events' },
  { id: 'g5', image: '/images/c2.jpg', title: 'Worship Atmosphere', category: 'Sunday Service' },
  { id: 'g6', image: '/images/c3.jpg', title: 'Community Outreach', category: 'Outreach' },
  { id: 'g7', image: '/images/outreach100.jpg', title: 'Village Outreach', category: 'Outreach' },
  { id: 'g8', image: '/images/outreach102.jpg', title: 'Supporting Families', category: 'Outreach' },
  { id: 'g9', image: '/images/outreach103.jpg', title: 'Community Support', category: 'Outreach' },
  { id: 'g10', image: '/images/outreach105.jpg', title: 'Hearts for People', category: 'Outreach' },
  { id: 'g11', image: '/images/c5.jpg', title: 'Joy in Serving', category: 'Outreach' },
  { id: 'g12', image: '/images/c6.jpg', title: 'Ministering Hope', category: 'Outreach' },
  { id: 'g13', image: '/images/sundayservice2.jpg', title: 'Praise & Worship', category: 'Sunday Service' },
  { id: 'g14', image: '/images/sundayservice5.jpg', title: 'Sunday Blessing', category: 'Sunday Service' },
  { id: 'g15', image: '/images/sundayservice6.jpg', title: 'Worship United', category: 'Sunday Service' },
  { id: 'g16', image: '/images/youthfelloship.jpg', title: 'Youth Impact', category: 'Community' },
  { id: 'g17', image: '/images/youthfellowship2.jpg', title: 'Next Generation', category: 'Community' },
  { id: 'g18', image: '/images/youthfellowship3.jpg', title: 'Faithful Youth', category: 'Community' },
  { id: 'g20', image: '/images/photo4.jpeg', title: 'Outreach Smile', category: 'Outreach' },
  { id: 'g24', image: '/images/m11.jpg', title: 'Ministry Focus', category: 'Events' },
  { id: 'g3', image: '/images/s3.jpg', title: 'Fellowship Moments', category: 'Community', isWide: true, position: 'center 15%' }
]

export const galleryVideos = []

export const ministries = [
  { id: 'min-1', name: 'Worship Team', description: 'Preparing hearts for worship through music, prayer, and faithful service.', meetingTime: 'Thursdays at 7:00 PM', location: 'Main Hall' },
  { id: 'min-2', name: 'Community Outreach', description: 'Serving families with prayer, practical care, and compassion in the community.', meetingTime: 'Second Saturday, 10:00 AM', location: 'Kidiki & Kamuli' },
  { id: 'min-3', name: 'Youth Fellowship', description: 'Helping young people grow in Christ, Scripture, and godly friendship.', meetingTime: 'Wednesdays at 7:00 PM', location: 'Youth Space' }
]

export const testimonials = [
  {
    id: 'tes-1',
    quote: `Glory to God\nFaith Family Church Kidiki stood with me in times of trial to treat my Mum and gave me an opportunity to serve God.`,
    author: 'Rebecca Muwanguzi\nAdministrator of Ministry'
  },
  {
    id: 'tes-2',
    quote: `Glory to God\nFaith Family Church Kidiki gave me the opportunity to know God and to serve as a secretary—growing in faith and purpose.`,
    author: 'Success Andinda\nDiscipleship'
  },
  {
    id: 'tes-3',
    quote: `Glory to God\nThe church pays my school fees and also gave me an opportunity to serve God.`,
    author: 'Sharon Matovu\nStudent'
  }
]

export const leaders = [
  { id: 'lead-1', name: 'Suubi Anthony', role: 'Lead Pastor', bio: 'Suubi leads with a focus on prayer, theological depth, and city renewal.', image: '/images/Suubi.jpeg' },
  { id: 'lead-2', name: 'Apostle Denis Kasirye', role: 'Spiritual Overseer', bio: 'The Senior Pastor of Latter Glory Ministries, Apostle Denis serves as the Spiritual Overseer for Faith Family Church, providing apostolic stewardship and guidance to our global network of branches and centers.', image: '/images/002.jpg' }
]

export const beliefs = [
  { id: 'bel-1', title: 'Jesus at the Center', description: 'We believe Jesus Christ is Lord, Savior, and the center of all life and mission.', scripture: 'Colossians 1:18, John 14:6' },
  { id: 'bel-2', title: 'Scripture as Authority', description: 'We receive Scripture as inspired, trustworthy, and formative for faith and practice.', scripture: '2 Timothy 3:16-17, Hebrews 4:12' },
  { id: 'bel-3', title: 'Spirit-Empowered Church', description: 'We pursue a Spirit-filled life marked by holiness, compassion, and mission.', scripture: 'Acts 1:8, Galatians 5:22-23' },
  { id: 'bel-4', title: 'Formation and Justice', description: 'We seek personal transformation and the flourishing of our city through the gospel.', scripture: 'Romans 12:2, Jeremiah 29:7' }
]

export const givingHistory = [
  { id: 'giv-1', date: '2026-03-01', fund: 'General', amount: 250 },
  { id: 'giv-2', date: '2026-02-14', fund: 'Missions', amount: 100 },
  { id: 'giv-3', date: '2026-01-21', fund: 'Building', amount: 180 }
]

export const ministryPhotos = ['/images/c3.jpg', '/images/c5.jpg', '/images/c6.jpg']

export const livestreamSchedule = [
  { id: 'stream-1', title: 'Sunday Worship Live', time: 'Sundays at 9:00 AM', platform: 'YouTube Live' },
  { id: 'stream-2', title: 'Wednesday Bible Study', time: 'Wednesdays at 6:00 PM', platform: 'YouTube Live' }
]

export const pastBroadcasts = [
  { id: 'pb-1', title: 'Presence and Peace', url: 'https://www.youtube.com/embed/jfKfPfyJRdk' },
  { id: 'pb-2', title: 'A Church for the City', url: 'https://www.youtube.com/embed/rODvPVYLeFo' }
]

export const staffDirectory = leaders.map((leader) => ({
  name: leader.name,
  role: leader.role,
  email: `${leader.name.toLowerCase().replace(/ /g, '.')}@faithfamilychurchkidiki.org`
}))

function getNextUgandaDate(targetDayOfWeek, hours = 9) {
  const now = new Date()
  const ugandaNow = new Date(now.getTime() + 3 * 60 * 60 * 1000)
  let daysUntilTarget = targetDayOfWeek - ugandaNow.getDay()
  if (daysUntilTarget < 0 || (daysUntilTarget === 0 && ugandaNow.getHours() >= hours)) {
    daysUntilTarget += 7
  }
  const nextDate = new Date(ugandaNow)
  nextDate.setDate(ugandaNow.getDate() + daysUntilTarget)
  nextDate.setHours(hours, 0, 0, 0)
  return new Date(nextDate.getTime() - 3 * 60 * 60 * 1000).toISOString()
}

export const sermons = [
  {
    id: 'ser-1',
    slug: 'sunday-service-blessing',
    title: 'Sunday Worship Encounter',
    speaker: 'Pastor Rebbecca Muwanguzzi',
    category: 'Sunday Service',
    series: 'Weekly Gatherings',
    scripture: ['John 3:16'],
    description: 'Join us every Sunday for worship, a life-changing message, and true fellowship in Christ.',
    coverImage: '/images/c2.jpg',
    duration: 5400,
    featured: true,
    publishedAt: getNextUgandaDate(0, 9)
  },
  {
    id: 'ser-2',
    slug: 'power-of-faith',
    title: 'The Power of Faith',
    speaker: 'Pastor Rebbecca Muwanguzzi',
    category: 'Spiritual Growth',
    series: 'Faith Foundations',
    scripture: ['Hebrews 11:1'],
    description: 'Understanding the substance of things hoped for and the evidence of things not seen.',
    coverImage: '/images/s1.jpg',
    duration: 3200,
    featured: true,
    publishedAt: new Date(Date.now() - 86400000 * 14).toISOString()
  },
  {
    id: 'ser-3',
    slug: 'walking-in-grace',
    title: 'Walking in Grace',
    speaker: 'Pastor Rebbecca Muwanguzzi',
    category: 'Christian Life',
    series: 'Living the Word',
    scripture: ['Ephesians 2:8'],
    description: 'Exploring the unmerited favor of God that sustains us through every trial.',
    coverImage: '/images/outreach102.jpg',
    duration: 3450,
    featured: true,
    publishedAt: new Date(Date.now() - 86400000 * 7).toISOString()
  },
  {
    id: 'ser-4',
    slug: 'prayer-altar-blessing',
    title: 'The Prayer Altar',
    speaker: 'Pastor Rebbecca Muwanguzzi',
    category: 'Prayer',
    series: 'Friday Prayer',
    scripture: ['Matthew 6:6'],
    description: 'Prayer is every Friday, led by Pastor Rebbecca Muwanguzzi.',
    coverImage: '/images/sundayservice5.jpg',
    duration: 2700,
    featured: true,
    publishedAt: new Date().toISOString()
  }
]

export const events = [
  {
    id: 'evt-1',
    slug: 'sunday-service',
    title: 'Sunday Worship Encounter',
    category: 'Sunday Service',
    summary: 'Join us every Sunday for worship, a life-changing message, and true fellowship in Christ.',
    description: 'Experience the presence of God with Pastor Rebbecca Muwanguzzi and the Faith Family Church community.',
    coverImage: '/images/c2.jpg',
    startsAt: getNextUgandaDate(0, 9),
    endsAt: getNextUgandaDate(0, 12),
    location: 'Main Sanctuary',
    capacity: 500,
    featured: true
  },
  {
    id: 'evt-2',
    slug: 'city-outreach',
    title: 'City Outreach',
    category: 'Outreach',
    summary: 'Serve families, feed neighbors, and pray block by block.',
    description: 'Volunteer teams mobilize across the city with food, prayer, and practical support.',
    coverImage: '/images/c3.jpg',
    startsAt: new Date(Date.now() + 86400000 * 7).toISOString(),
    endsAt: new Date(Date.now() + 86400000 * 7 + 14400000).toISOString(),
    location: 'FFC Kidiki',
    capacity: 120,
    featured: true
  },
  {
    id: 'evt-3',
    slug: 'childrens-fellowship',
    title: "Children's Fellowship",
    category: 'Children',
    summary: 'A fun and interactive Bible study for children.',
    description: 'Children gather for a special time of learning, worship, and fun activities led by the Children Ministry Team.',
    coverImage: '/images/c1.jpg',
    startsAt: getNextUgandaDate(3, 10),
    endsAt: getNextUgandaDate(3, 12),
    location: "Children's Fellowship Hall",
    capacity: 80,
    featured: true
  }
]
