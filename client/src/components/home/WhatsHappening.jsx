import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import './WhatsHappening.css'

const happenings = [
  {
    title: 'Faith Family Church Kidiki',
    category: 'Ministry',
    description: 'A Christ-centered community in Kidiki Village dedicated to worship and service.',
    image: '/images/p1.jpg',
    cta: 'Get involved',
    link: '/contact'
  },
  {
    title: 'Church Expansion Project',
    category: 'Ministry',
    description: 'Help us expand our church building to accommodate our growing congregation.',
    image: '/images/p2.jpg',
    cta: 'Get involved',
    link: '/contact'
  },
  {
    title: 'Sponsorship Program',
    category: 'Ministry',
    description: 'Support a child\'s education and future through our sponsorship program.',
    image: '/images/p3.jpg',
    cta: 'Get involved',
    link: '/contact'
  }
]

export default function WhatsHappening() {
  return (
    <section className="whats-happening section-shell px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionTitle
          eyebrow={<span style={{color:'#c69a3a', fontWeight:700}}>What's Happening</span>}
          title="Ministry Opportunities"
          description={<span className="text-midnight/80 font-medium">Be part of something special—serve, connect, and help change lives at Faith Family Church Kidiki.</span>}
          align="left"
          gold={false}
        />
        <div className="whats-happening__grid grid gap-8 lg:grid-cols-3">
          {happenings.map((item, idx) => (
            <div key={idx} className="whats-happening__card premium-dark-card rounded-3xl overflow-hidden flex flex-col">
              <div className="whats-happening__image cinematic-image h-64 w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="object-cover w-full h-full cinematic-img" loading="lazy" decoding="async" />
              </div>
              <div className="flex-1 flex flex-col p-7">
                <span className="uppercase text-xs font-bold tracking-widest text-[#c69a3a] mb-2">{item.category}</span>
                <h3 className="text-2xl font-extrabold mb-3 text-white">{item.title}</h3>
                <p className="mb-6 text-white/80 flex-1">{item.description}</p>
                <Link to={item.link} className="whats-happening__cta inline-block mt-auto px-6 py-3 rounded-full bg-[#c69a3a] text-white font-bold shadow-lg hover:bg-[#b08a2e] transition">{item.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
