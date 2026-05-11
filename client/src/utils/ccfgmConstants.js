export const ccfgmNavigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

export const ccfgmPrimaryNavigation = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { 
    label: 'Explore Ministries', 
    dropdown: [
      { label: 'Faith Family Church Kidiki', to: '/ministries/ffck' },
      { label: 'Sermon Archive', to: '/ministries/ffck/sermons' },
      { label: 'Upcoming Events', to: '/ministries/ffck/events' },
      { label: 'Ministry Giving', to: '/ministries/ffck/give' }
    ] 
  }
]

export const ccfgmActionNavigation = [
  { label: 'Sow a Seed', to: '/ministries/ffck/give', accent: 'primary' }
]

export const ccfgmSiteConfig = {
  churchName: 'Christ Centered Family Global Ministries',
  tagline: 'A global family of faith rooted in Christ, impacting nations with love.',
  description: 'Christ Centered Family Global Ministries is a registered NGO and global network of churches dedicated to worship, discipleship, prayer, generosity, and community impact.',
  email: 'connect@christcenteredfamily.org',
  address: '3425 Concord Blvd. Concord, CA 94519',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=3425%20Concord%20Blvd.%20Concord%2C%20CA%2094519&t=&z=15&ie=UTF8&iwloc=&output=embed',
  socialMedia: [
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' }
  ],
  paymentMethods: {
    cashapp: {
      label: 'CashApp',
      handle: '$CCFGlobal',
      instructions: 'Please include your email in the note for your receipt.'
    },
    zelle: {
      label: 'Zelle',
      handle: 'giving@christcenteredfamily.org',
      instructions: 'Send to our official ministry email address.'
    }
  },
  values: [
    { 
      title: "Global Mission", 
      description: "Impactful ministry reaching across borders to share the transformative love of Christ with every nation." 
    },
    { 
      title: "Faith Centered", 
      description: "Unwavering commitment to Scripture and the Holy Spirit, grounding everything we do in Christ's truth." 
    },
    { 
      title: "Authentic Family", 
      description: "Building a genuine community where every generation belongs and grows together in the grace of God." 
    }
  ]
}

export const ccfgmServiceTimes = [
  { title: 'Sunday Service', time: '12:00 PM - 2:00 PM', detail: 'Led by Bishop Joel Kikomeko' },
  { title: 'Tuesday Bible Study', time: '6:00 PM - 9:00 PM', detail: 'Interactive Study' },
  { title: 'Saturday Choir Practice', time: '9:00 AM - 12:00 PM', detail: 'Main Sanctuary' }
]

export const ccfgmStaffDirectory = [
  { name: 'Suubi Anthony', role: 'Head of Global Ministries', email: 'suubi.anthony@christcenteredfamily.org' }
]

export const ccfgmGallery = [
  '/images/s1.jpg',
  '/images/s2.jpg',
  '/images/s3.jpg',
  '/images/ch1.jpeg',
  '/images/p3.jpg'
]
