import Sermon from '../models/Sermon.js'

export async function seedSermons() {
  const count = await Sermon.countDocuments()
  if (count > 0) return

  console.log('Seeding initial sermons from constants...')

  const initialSermons = [
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
      featured: true
    },
    {
      title: "Children's Fellowship",
      slug: 'childrens-fellowship',
      speaker: 'Children Ministry Team',
      category: 'Children',
      series: 'Bible Study',
      scripture: ['Proverbs 22:6'],
      description: 'A fun and interactive Bible study for children. Let your kids grow in faith and friendship every Saturday!',
      audioUrl: '#',
      notesUrl: '#',
      coverImage: '/images/c1.jpg',
      duration: 1800,
      publishedAt: new Date(),
      featured: true
    },
    {
      title: 'The Prayer Altar',
      slug: 'prayer-altar-blessing',
      speaker: 'Rebbecca Muwanguzzi',
      category: 'Prayer',
      series: 'Friday Prayer',
      scripture: ['Matthew 6:6'],
      description: 'Prayer is every Friday, led by Pastor Rebbecca Muwanguzzi.',
      audioUrl: '#',
      notesUrl: '#',
      coverImage: '/images/s2.jpg',
      duration: 2700,
      publishedAt: new Date(),
      featured: false
    }
  ]

  await Sermon.insertMany(initialSermons)
}
