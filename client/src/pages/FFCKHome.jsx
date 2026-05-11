import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import WhatsHappening from '../components/home/WhatsHappening'
import LatestSermons from '../components/home/LatestSermons'
import DonationSection from '../components/home/DonationSection'
import Newsletter from '../components/home/Newsletter'
import { seoConfig } from '../utils/seoConfig'
import { siteConfig } from '../utils/constants'
import './Home.css'

import ScriptureMarquee from '../components/common/ScriptureMarquee'
import VisionMissionMandate from '../components/home/VisionMissionMandate'
import SermonCard from '../components/sermons/SermonCard'
import { sermons } from '../utils/constants'

export default function Home() {
  const siteUrl = typeof window === 'undefined' ? 'http://localhost:3000' : window.location.origin

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Faith Family Church Kidiki',
    url: siteUrl,
    description: seoConfig.home.description,
    publisher: {
      '@type': 'Organization',
      name: 'Faith Family Church Kidiki',
      logo: `${siteUrl}/images/ffclogo.png`
    }
  }

  return (
    <>
      <Helmet>
        <title>Faith Family Church Kidiki - Ministries</title>
        <meta name="description" content={seoConfig.home.description} />
        <meta property="og:title" content="Faith Family Church Kidiki" />
        <meta property="og:description" content={seoConfig.home.description} />
        <meta property="og:image" content={seoConfig.home.image} />
        <meta name="twitter:image" content={seoConfig.home.image} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="home-page bg-white selection:bg-[#c69a3a]/30">
        <Hero />
        <ScriptureMarquee />
        
        {/* Section 1: Welcome & Our Heart - Editorial Redesign */}
        <section className="py-12 sm:py-20 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 sm:space-y-12 text-center lg:text-left"
              >
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <span className="h-px w-8 bg-[#c69a3a]" />
                    <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.35em',textTransform:'uppercase',color:'#c69a3a'}}>Welcome Home</span>
                  </div>
                  <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'clamp(2.5rem, 5vw, 4.5rem)',lineHeight:1.1,letterSpacing:'-0.02em'}} className="text-midnight mb-8">
                    A Church Family <br /><span className="italic text-[#c69a3a]">Rooted in Kidiki</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-midnight/70 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
                    We are building a church family marked by the presence of God, devotion to Scripture, and practical love for people. Every gathering is designed to form steady disciples ready for His mission.
                  </p>
                </div>

                <div className="bg-[#0e0c09] rounded-[2rem] p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl text-center lg:text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c69a3a]/10 blur-3xl rounded-full" />
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500,fontSize:'1.35rem',lineHeight:1.5}} className="relative z-10 opacity-90 italic">
                    "Kidiki is our home, and as the only church in the entire village, our doors are wide open. We invite you to come, belong, and be a vital part of this mission."
                  </p>
                  <div className="mt-8 relative z-10">
                    <Link to="/ministries/ffck/contact" className="group inline-flex items-center gap-3 font-black uppercase tracking-widest text-[0.65rem] text-[#f1cf78] hover:text-white transition-colors">
                      Join Us This Sunday
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
                <div className="absolute inset-0 bg-[#c69a3a]/5 blur-3xl rounded-full scale-75" />
                {[
                  { title: 'Worship', text: 'Spirit-led gatherings anchored in Jesus.', verse: 'John 4:24' },
                  { title: 'Discipleship', text: 'Formation through Scripture and teaching.', verse: 'Matthew 28:19' },
                  { title: 'Outreach', text: 'Visible love through evangelism and service.', verse: 'Mark 16:15' },
                  { title: 'Fellowship', text: 'A warm home where people are known.', verse: 'Hebrews 10:24' }
                ].map((pillar, idx) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#c69a3a]/20 transition-all duration-500"
                  >
                    <p className="text-[0.55rem] font-black text-[#c69a3a] uppercase tracking-widest mb-4 opacity-60">{pillar.verse}</p>
                    <h3 style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'1.15rem',letterSpacing:'-0.02em'}} className="text-midnight mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-midnight/60 leading-relaxed font-medium">{pillar.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Identity - Glass-morphism Grid */}
        <section className="py-12 sm:py-20 bg-[#0a0806] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#c69a3a]/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c69a3a]/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="flex flex-col items-center mb-16 sm:mb-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#c69a3a]/40" />
                <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.4em',textTransform:'uppercase',color:'#c69a3a'}}>Core Identity</span>
                <span className="h-px w-8 bg-[#c69a3a]/40" />
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:600,fontSize:'clamp(2.2rem, 5vw, 4rem)',lineHeight:1.1}} className="text-[#f1eedc]">
                Vision, Mission <span className="italic text-[#f1cf78]">& Mandate</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: 'Vision', text: 'To be a Christ-centered community growing in faith, love, and obedience.' },
                { title: 'Mission', text: 'To worship God, disciple believers, and reach our community through service.' },
                { title: 'Mandate', text: 'Strengthen families, raise faithful disciples, bring hope to Kidiki and beyond.' }
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-10 sm:p-12 rounded-[2.5rem] border border-white/10 overflow-hidden"
                  style={{background:'linear-gradient(145deg, rgba(38,31,24,0.4), rgba(22,18,14,0.6))',backdropFilter:'blur(10px)'}}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c69a3a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <h3 style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.75rem',letterSpacing:'0.3em',textTransform:'uppercase',color:'#f1cf78'}} className="mb-6">{card.title}</h3>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500,fontSize:'1.55rem',lineHeight:1.3}} className="text-white/90">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Community Impact - Cinematic Editorial */}
        <section className="py-12 sm:py-20 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="flex-1 order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#c69a3a]/5 rounded-[2.5rem] blur-2xl group-hover:bg-[#c69a3a]/10 transition-colors duration-700" />
                  <div className="relative rounded-[2.5rem] overflow-hidden h-auto shadow-2xl border border-slate-100 bg-slate-50">
                    <img src="/images/c5.jpg" alt="Community Outreach" className="w-full h-auto block group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 order-1 lg:order-2 space-y-10 sm:space-y-14 text-center lg:text-left">
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <span className="h-px w-8 bg-[#c69a3a]" />
                    <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.35em',textTransform:'uppercase',color:'#c69a3a'}}>Community Impact</span>
                  </div>
                  <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'clamp(2.2rem, 5vw, 4rem)',lineHeight:1.1}} className="text-midnight mb-8">
                    Transforming <span className="italic text-[#c69a3a]">Kidiki Village</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-midnight/70 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                    As the spiritual anchor of our village, we believe in a gospel that is both preached and practiced. Our ministry extends beyond the sanctuary to touch the everyday lives of our neighbors.
                  </p>
                </div>

                <div className="grid gap-8 text-left lg:text-left">
                  {[
                    { title: 'Spiritual Formation', detail: 'Cultivating deep roots in Scripture and prayer for every age.' },
                    { title: 'Family Advocacy', detail: 'Supporting the household unit with radical love and practical aid.' },
                    { title: 'Youth Empowerment', detail: 'Guiding the next generation into their divine purpose and identity.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-5 group text-center sm:text-left">
                      <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#c69a3a] group-hover:text-white transition-all duration-500">
                        <span className="text-[0.65rem] font-black">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'1.1rem',letterSpacing:'-0.01em'}} className="text-midnight mb-1">{item.title}</h4>
                        <p className="text-sm text-midnight/60 font-medium leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Service Times - High-Fidelity Dark Mode */}
        <section className="py-12 sm:py-20 bg-[#0e0c09] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#c69a3a]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#c69a3a]/5 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16 sm:mb-24 text-center lg:text-left">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <span className="h-px w-8 bg-[#c69a3a]" />
                  <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.4em',textTransform:'uppercase',color:'#c69a3a'}}>Gather With Us</span>
                </div>
                <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:600,fontSize:'clamp(2rem, 4vw, 3.5rem)',lineHeight:1.1}} className="text-white">
                  Clear times, clear place, <span className="italic text-[#c69a3a]">Clear Invitation</span>
                </h2>
              </div>
              <div className="lg:max-w-sm">
                <p className="text-lg text-white/80 font-medium leading-relaxed">
                  Every gathering is built to help people encounter God and walk with others in the heart of Kidiki.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: 'Sunday Service', time: '9:00 AM - 12:00 PM', detail: 'Sanctuary' },
                { title: 'Wednesday Formation', time: '6:00 PM - 7:00 PM', detail: 'Kidiki Prayer Ground' },
                { title: 'Friday Prayer Altar', time: '6:00 PM - 7:30 PM', detail: 'Prayer Chapel' },
                { title: 'Saturday Sunday School', time: '4:00 PM - 6:00 PM', detail: "Children's Fellowship" }
              ].map((service, idx) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white/5 p-8 sm:p-10 rounded-[2.5rem] border border-white/10 hover:border-[#c69a3a]/40 transition-all duration-500"
                >
                  <p className="text-[0.6rem] font-black text-[#c69a3a] uppercase tracking-[0.2em] mb-4">{service.title}</p>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'2.2rem',lineHeight:1}} className="text-white mb-3">{service.time}</h3>
                  <div className="h-px w-10 bg-white/20 mb-4 group-hover:w-16 transition-all duration-500" />
                  <p className="text-sm text-white/70 font-medium">{service.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Community & Faith - Testimonials Redesign */}
        <section className="py-12 sm:py-20 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <div className="flex flex-col items-center mb-16 sm:mb-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#c69a3a]" />
                <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.4em',textTransform:'uppercase',color:'#c69a3a'}}>Testimonies</span>
                <span className="h-px w-8 bg-[#c69a3a]" />
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:600,fontSize:'clamp(2.2rem, 5vw, 4rem)',lineHeight:1.1}} className="text-midnight">
                Glory to <span className="italic text-[#c69a3a]">God's Work</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { author: 'Rebecca Muwanguzi', role: 'Administrator', text: 'Faith Family Church Kidiki stood with me in times of trial to treat my Mum and gave me an opportunity to serve God.' },
                { author: 'Success Andinda', role: 'Discipleship', text: 'Faith Family Church Kidiki gave me the opportunity to know God and to serve as a secretary—growing in faith and purpose.' },
                { author: 'Sharon Matovu', role: 'Student', text: 'The church pays my school fees and also gave me an opportunity to serve God.' }
              ].map((item, idx) => (
                <motion.article
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50/50 p-10 sm:p-12 rounded-[2.5rem] border border-slate-100 text-left relative group"
                >
                  <div className="text-[#c69a3a] mb-8">
                    <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V11H14.017V6H20.017V16L18.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017V11H4.017V6H10.017V16L8.017 21H4.017Z" /></svg>
                  </div>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500,fontSize:'1.45rem',lineHeight:1.4}} className="text-midnight/80 italic mb-10">
                    "{item.text}"
                  </p>
                  <div>
                    <h4 style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.9rem',letterSpacing:'-0.01em'}} className="text-midnight uppercase">{item.author}</h4>
                    <p className="text-[0.6rem] font-black text-[#c69a3a] uppercase tracking-widest mt-1">{item.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Whats Happening - Cinematic Outreach Grid */}
        <section className="py-12 sm:py-20 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 sm:mb-28 text-center lg:text-left">
              <div className="max-w-2xl">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <span className="h-px w-8 bg-[#c69a3a]" />
                  <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.4em',textTransform:'uppercase',color:'#c69a3a'}}>What's Happening</span>
                </div>
                <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:600,fontSize:'clamp(2.5rem, 5vw, 4.2rem)',lineHeight:1.1,letterSpacing:'-0.02em'}} className="text-midnight">
                  Ministry <span className="italic text-[#c69a3a]">Opportunities</span>
                </h2>
              </div>
              <div className="max-w-md mx-auto lg:mx-0">
                <p style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500,fontSize:'1.35rem',lineHeight:1.4}} className="text-midnight/50 italic">
                  Be part of something special—serve, connect, and help change lives in the heart of Kidiki Village.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
              {[
                { title: 'Faith Family Church Kidiki', category: 'Ministry', image: '/images/p1.jpg', text: 'A Christ-centered community in Kidiki Village dedicated to worship and service.' },
                { title: 'Church Expansion Project', category: 'Vision', image: '/images/p2.jpg', text: 'Help us expand our church building to accommodate our growing congregation.' },
                { title: 'Sponsorship Program', category: 'Impact', image: '/images/p3.jpg', text: "Support a child's education and future through our sponsorship program." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group relative flex flex-col"
                >
                  <div className="relative rounded-[2.5rem] overflow-hidden mb-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] border border-slate-100 h-auto bg-midnight">
                    <img src={item.image} alt={item.title} className="w-full h-auto block group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="absolute top-8 left-8">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                        <span className="w-1 h-1 rounded-full bg-[#f1cf78]" />
                        <span className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-10 left-10 right-10">
                      <h3 style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'1.5rem',lineHeight:1.2,letterSpacing:'-0.02em',textShadow:'0 2px 10px rgba(0,0,0,0.5)'}} className="text-white mb-4">{item.title}</h3>
                      <p style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500,fontSize:'1.15rem',lineHeight:1.4,textShadow:'0 1px 8px rgba(0,0,0,0.8)'}} className="text-white/90 italic mb-8 line-clamp-3">
                        "{item.text}"
                      </p>
                      <Link to="/ministries/ffck/contact" className="inline-flex items-center gap-3 text-[0.65rem] font-black uppercase tracking-widest text-[#f1cf78] group/link">
                        Get involved
                        <div className="w-8 h-px bg-[#f1cf78]/40 group-hover/link:w-12 transition-all duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LatestSermons />

        {/* Section 8: Donation - Radical Generosity Redesign */}
        <section className="relative py-12 sm:py-20 bg-[#0e0c09] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/outreach100.jpg" alt="" className="w-full h-full object-cover opacity-30 brightness-[0.4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c09] via-transparent to-[#0e0c09]" />
          </div>

          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-[#c69a3a]" />
                  <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.4em',textTransform:'uppercase',color:'#c69a3a'}}>Generosity</span>
                  <span className="h-px w-8 bg-[#c69a3a]" />
                </div>
                <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:600,fontSize:'clamp(2.5rem, 5vw, 4.5rem)',lineHeight:1.1}} className="text-[#f1eedc]">
                  Fuel the <span className="italic text-[#f1cf78]">Mission</span>
                </h2>
                <p className="mt-8 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium">
                  Your giving directly impacts Kidiki Village—from church expansion to sponsoring child education and spiritual formation.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <Link
                  to="/ministries/ffck/give"
                  className="group inline-flex items-center gap-4 font-black uppercase px-12 py-6 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-midnight"
                  style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.8rem',letterSpacing:'0.14em',background:'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)',boxShadow:'0 15px_40px_rgba(198,154,58,0.4)'}}
                >
                  Partner with Us
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 9: Newsletter - Bespoke Asymmetric Editorial Design */}
        <section className="py-12 sm:py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#c69a3a]/[0.04] blur-[150px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3.5rem] border border-slate-100 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)]"
              style={{background:'rgba(255, 255, 255, 0.9)', backdropFilter:'blur(30px)'}}
            >
              {/* Premium Accents */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d4a93c] via-[#f1cf78] to-[#c69a3a] opacity-80" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-8 border-[#c69a3a]/5 rounded-full" />
              
              <div className="flex flex-col lg:flex-row">
                {/* Left Side: Editorial Typography */}
                <div className="flex-1 p-10 sm:p-20 lg:p-24 border-b lg:border-b-0 lg:border-r border-slate-100 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
                    <span className="h-px w-8 bg-[#c69a3a]" />
                    <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.6rem',letterSpacing:'0.5em',textTransform:'uppercase',color:'#c69a3a'}}>Ministry Journal</span>
                  </div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:600,fontSize:'clamp(3rem, 6vw, 4.5rem)',lineHeight:1,letterSpacing:'-0.03em'}} className="text-midnight mb-8 mx-auto lg:mx-0">
                    Stay <br /><span className="italic text-[#c69a3a]">Connected</span>
                  </h3>
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500,fontSize:'1.45rem',lineHeight:1.4}} className="text-midnight/40 italic max-w-sm mx-auto lg:mx-0">
                    "Join our church family for weekly encouragement and mission updates from the heart of Kidiki."
                  </p>
                </div>

                {/* Right Side: Minimalist Membership Portal */}
                <div className="flex-1 p-10 sm:p-20 lg:p-24 bg-slate-50/30 flex flex-col justify-center text-center lg:text-left">
                  <form className="w-full space-y-6">
                    <div className="space-y-2">
                      <label style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.55rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'#c69a3a'}} className="block lg:ml-6">Your Email Address</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com" 
                        className="w-full px-8 py-6 rounded-2xl bg-white border border-slate-100 text-midnight focus:outline-none focus:ring-2 focus:ring-[#c69a3a]/20 focus:border-[#c69a3a] transition-all duration-300 text-sm font-medium shadow-sm text-center lg:text-left"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full py-6 rounded-2xl bg-midnight text-white text-[0.7rem] font-black uppercase tracking-[0.2em] hover:bg-[#c69a3a] transition-all duration-500 shadow-xl shadow-midnight/10 flex items-center justify-center gap-3 group"
                    >
                      Join the Family
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                    <p className="text-[0.6rem] text-center text-midnight/30 font-bold uppercase tracking-widest">No spam. Only the Gospel & Mission.</p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

    </>
  )
}
