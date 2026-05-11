import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ccfgmSiteConfig as siteConfig } from '../utils/ccfgmConstants'
import ScriptureMarquee from '../components/common/ScriptureMarquee'
import './Home.css'

export default function Home() {
  const siteUrl = typeof window === 'undefined' ? 'http://localhost:3000' : window.location.origin

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.churchName,
    url: siteUrl,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.churchName
    }
  }

  return (
    <>
      <Helmet>
        <title>Home - {siteConfig.churchName}</title>
        <meta name="description" content={siteConfig.description} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="home-page min-h-screen">
        {/* Premium Hero Section */}
        <section className="hero-shell relative isolate h-[calc(100svh-var(--navbar-offset,135px))] min-h-[500px] flex items-center justify-center bg-midnight text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/ch1.jpeg"
              alt="Global Ministry"
              className="w-full h-full object-contain sm:object-cover opacity-60"
              style={{ objectPosition: 'center 20%' }}
            />
            {/* Cinematic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative z-10 text-center max-w-5xl px-4 sm:px-12 mx-auto">
            <div className="bg-black/40 backdrop-blur-md p-4 sm:p-10 rounded-[1.2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl">

              {/* ── Premium Eyebrow ── */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-6"
              >
                <span className="h-px w-5 sm:w-8 bg-[#f1cf78]/50" />
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#f1cf78]" />
                <p className="text-[#f1cf78] font-black tracking-[0.28em] sm:tracking-[0.38em] uppercase text-[0.52rem] sm:text-[0.7rem] drop-shadow-md">
                  Welcome to our global family
                </p>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#f1cf78]" />
                <span className="h-px w-5 sm:w-8 bg-[#f1cf78]/50" />
              </motion.div>

              {/* ── Premium Title ── */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-black leading-[1.08] tracking-[-0.03em] text-white mb-3 sm:mb-6
                           text-[1.55rem] sm:text-5xl md:text-7xl
                           drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
              >
                Christ Centered Family
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(95deg,#c69a3a 0%,#f1cf78 45%,#ffe9a0 70%,#d4a93c 100%)' }}
                >
                  Global Ministries
                </span>
              </motion.h1>

              {/* ── Gold Rule ── */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mx-auto mb-3 sm:mb-7 h-px w-16 sm:w-24 origin-center"
                style={{ background: 'linear-gradient(90deg, transparent, #c69a3a, transparent)' }}
              />

              {/* ── Premium Description ── */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="font-serif italic leading-relaxed text-white/85 mb-5 sm:mb-10 max-w-2xl mx-auto
                           text-[0.82rem] sm:text-xl
                           drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
              >
                Connecting hearts from{' '}
                <span className="text-[#f1cf78] not-italic font-bold">California</span>
                {' '}to{' '}
                <span className="text-[#f1cf78] not-italic font-bold">Uganda</span>
                {' '}and across the nations through the transformative love of Jesus Christ.
              </motion.p>

              {/* ── Premium CTA Buttons ── */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3 sm:gap-5 pt-1 sm:pt-2"
              >
                {/* Primary — gold fill */}
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 whitespace-nowrap
                             px-5 sm:px-9 py-2.5 sm:py-4
                             rounded-full font-black uppercase tracking-[0.12em]
                             text-[0.62rem] sm:text-[0.78rem]
                             text-midnight
                             transition-all duration-300
                             shadow-[0_8px_28px_rgba(198,154,58,0.45)]
                             hover:shadow-[0_12px_36px_rgba(198,154,58,0.65)]
                             hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)' }}
                >
                  Our Vision
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                {/* Secondary — ghost outline */}
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 whitespace-nowrap
                             px-5 sm:px-9 py-2.5 sm:py-4
                             rounded-full font-black uppercase tracking-[0.12em]
                             text-[0.62rem] sm:text-[0.78rem]
                             text-white border border-white/30
                             bg-white/5 backdrop-blur-md
                             transition-all duration-300
                             hover:bg-white hover:text-midnight hover:border-white
                             hover:shadow-[0_8px_28px_rgba(255,255,255,0.2)]
                             hover:-translate-y-0.5"
                >
                  Join Us
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Premium Scripture Marquee (Anchored Outside Hero) */}
        <ScriptureMarquee />

        {/* Global Partnership Section */}
        <section className="py-16 sm:py-28 bg-[#faf8f5] text-midnight relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 10% 20%, rgba(198,154,58,0.06), transparent 40%), radial-gradient(circle at 90% 80%, rgba(198,154,58,0.04), transparent 40%)'}} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* Premium eyebrow */}
                <div className="flex items-center gap-2 mb-5">
                  <span className="h-px w-8" style={{background:'linear-gradient(90deg,#c69a3a,transparent)'}} />
                  <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.62rem',letterSpacing:'0.32em',textTransform:'uppercase',color:'#c69a3a'}}>Our Partnership</span>
                </div>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'clamp(2.2rem,4vw,3.4rem)',lineHeight:1.05,letterSpacing:'-0.02em'}} className="mb-6 text-midnight">
                  United in Christ,<br /><span style={{fontStyle:'italic',color:'#c69a3a'}}>Coast to Coast</span>
                </h3>
                <p className="text-base sm:text-lg text-midnight/65 leading-relaxed mb-8 font-medium">
                  Christ Centered Family Global Ministries is proud to partner with <strong className="text-midnight font-black">The Throne</strong> in California. Together, we are building a foundation of prayer and community, seeking God's presence in all we do.
                </p>

                {/* Location card — dark premium */}
                <div className="rounded-2xl border border-[#c69a3a]/20 overflow-hidden shadow-lg" style={{background:'linear-gradient(145deg,#1a140f,#0e0c09)'}}>
                  <div className="h-px w-full" style={{background:'linear-gradient(90deg,transparent,rgba(198,154,58,0.5),transparent)'}} />
                  <div className="p-6">
                    <p style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.58rem',letterSpacing:'0.32em',textTransform:'uppercase',color:'rgba(198,154,58,0.7)'}} className="mb-3">Meeting Location</p>
                    <p className="text-white font-black text-lg mb-1">The Throne Church</p>
                    <p className="text-white/50 text-sm font-mono">3425 Concord Blvd.</p>
                    <p className="text-white/50 text-sm font-mono mb-5">Concord, CA 94519, USA</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                      <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#d4a93c,#c69a3a)',boxShadow:'0 4px 14px rgba(198,154,58,0.35)'}}>
                        <svg className="w-4 h-4 text-midnight" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </span>
                      <p className="text-white/80 font-semibold text-sm leading-snug">Every Sunday at 12:00 PM – 2:00 PM<br/><span className="text-white/40 text-xs font-normal">Service and Prayer</span></p>
                    </div>
                  </div>
                  <div className="h-px w-full" style={{background:'linear-gradient(90deg,transparent,rgba(198,154,58,0.2),transparent)'}} />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative group"
              >
                {/* Image frame */}
                <div className="cinematic-frame rounded-[2rem] shadow-[0_32px_80px_rgba(0,0,0,0.25)] border border-black/8 flex items-center justify-center bg-midnight/40 overflow-hidden h-auto">
                  <div className="cinematic-grain" />
                  <img src="/images/p333.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-110" />
                  <img src="/images/p333.jpeg" alt="Church Gathering" className="relative z-10 w-full h-auto block hover:scale-105 transition-all duration-1000" />
                </div>

                {/* Quote card */}
                <div className="mt-5 p-6 rounded-2xl border border-[#c69a3a]/20 shadow-xl" style={{background:'linear-gradient(145deg,rgba(22,18,14,0.96),rgba(14,12,9,0.99))'}}>
                  <div className="h-px w-full mb-5" style={{background:'linear-gradient(90deg,#c69a3a,rgba(198,154,58,0.1))'}} />
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500,fontSize:'clamp(1.05rem,2vw,1.25rem)',fontStyle:'italic',lineHeight:1.55}} className="text-[#f1eedc] mb-4">
                    "A global movement of faith, grounded in the love of Jesus Christ."
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-px" style={{background:'#c69a3a'}} />
                    <p style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.6rem',letterSpacing:'0.28em',textTransform:'uppercase',color:'#c69a3a'}}>Pastor Suubi Anthony</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Leadership Section */}
        <section className="py-24 bg-[#0e0c09] text-white overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 25% 50%, rgba(198,154,58,0.07), transparent 50%), radial-gradient(circle at 75% 50%, rgba(198,154,58,0.05), transparent 50%)'}} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-10" style={{background:'linear-gradient(90deg,transparent,#c69a3a)'}} />
              <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.6rem',letterSpacing:'0.32em',textTransform:'uppercase',color:'#c69a3a'}}>Leadership</span>
              <span className="h-px w-10" style={{background:'linear-gradient(90deg,#c69a3a,transparent)'}} />
            </div>
            <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'clamp(2rem,4vw,3.2rem)',lineHeight:1.05,letterSpacing:'-0.02em',fontStyle:'italic'}} className="text-white mb-16">
              Guiding the Vision
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {[
                { img:'/images/p444.jpeg', name:'Pastor Suubi Anthony', title:'Head of CCF Global Ministries', bio:'Leading with a heart for the nations and a commitment to deep, authentic discipleship across all our global church plants.' },
                { img:'/images/p222.jpeg', name:'Bishop Joel Kikomeko', title:'Head of The Throne', bio:'A visionary leader anchoring the ministry in California, providing apostolic oversight and a passion for spiritual awakening.' }
              ].map((leader, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl border border-white/8 hover:border-[#c69a3a]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_64px_rgba(0,0,0,0.5)]" style={{background:'linear-gradient(145deg,rgba(26,20,15,0.95),rgba(14,12,9,0.98))'}}>
                    {/* Top gold line */}
                    <div className="absolute top-0 left-8 right-8 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(198,154,58,0.4),transparent)'}} />
                    {/* Portrait */}
                    <div className="relative w-32 h-32 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{background:'conic-gradient(from 0deg,#c69a3a,#f1cf78,#c69a3a)',padding:'2px',borderRadius:'9999px'}}>
                        <div className="w-full h-full rounded-full bg-[#0e0c09]" />
                      </div>
                      <div className="absolute inset-[3px] rounded-full overflow-hidden bokeh-container">
                        <img src={leader.img} alt="" className="bokeh-bg" />
                        <img src={leader.img} alt={leader.name} className="bokeh-subject" />
                      </div>
                    </div>
                    {/* Name */}
                    <h4 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'1.6rem',lineHeight:1.1,letterSpacing:'-0.01em'}} className="text-white mb-1">{leader.name}</h4>
                    {/* Title */}
                    <p style={{fontFamily:"'Manrope',sans-serif",fontWeight:700,fontSize:'0.58rem',letterSpacing:'0.28em',textTransform:'uppercase',color:'#c69a3a'}} className="mb-5">{leader.title}</p>
                    {/* Gold divider */}
                    <div className="h-px mb-5 mx-auto w-16" style={{background:'linear-gradient(90deg,transparent,#c69a3a,transparent)'}} />
                    {/* Bio */}
                    <p className="text-white/55 leading-relaxed text-sm font-medium">{leader.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Core Pillars Section */}
        <section className="py-24 bg-[#faf8f5] text-midnight overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 50% 0%, rgba(198,154,58,0.06), transparent 55%)'}} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-10" style={{background:'linear-gradient(90deg,transparent,#c69a3a)'}} />
                <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.6rem',letterSpacing:'0.32em',textTransform:'uppercase',color:'#c69a3a'}}>Our Core Pillars</span>
                <span className="h-px w-10" style={{background:'linear-gradient(90deg,#c69a3a,transparent)'}} />
              </div>
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'clamp(2rem,4vw,3.2rem)',lineHeight:1.05,letterSpacing:'-0.02em'}} className="text-midnight">
                Built on the <span style={{fontStyle:'italic',color:'#c69a3a'}}>Rock</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title:'Sacred Worship', icon:<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, description:'Creating an atmosphere where the presence of God is the primary pursuit.' },
                { title:'Authentic Family', icon:<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, description:'Building deep, covenantal relationships that transcend borders and cultures.' },
                { title:'Global Impact', icon:<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 012.5 2.5v.5m-1.5 5.5V20a2 2 0 01-2-2v-1a2 2 0 00-2-2 2 2 0 01-2-2V7.5a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2h-4" /></svg>, description:'Transforming communities through radical generosity and Spirit-led mission.' }
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative p-8 rounded-2xl border border-white/0 hover:border-[#c69a3a]/20 transition-all duration-500 hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)]"
                  style={{background:'linear-gradient(145deg,#ffffff,#f5f2ee)'}}
                >
                  <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background:'linear-gradient(90deg,transparent,rgba(198,154,58,0.4),transparent)'}} />
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-midnight shadow-[0_8px_24px_rgba(198,154,58,0.3)] group-hover:scale-110 transition-transform duration-300" style={{background:'linear-gradient(135deg,#d4a93c,#f1cf78,#c69a3a)'}}>
                    {pillar.icon}
                  </div>
                  <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'1.45rem',lineHeight:1.1,letterSpacing:'-0.01em'}} className="text-midnight mb-3">{pillar.title}</h3>
                  <div className="h-px mb-4 w-10" style={{background:'linear-gradient(90deg,#c69a3a,transparent)'}} />
                  <p className="text-midnight/60 leading-relaxed text-sm font-medium">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Radical Generosity Section - Cinematic Redesign */}
        <section className="relative min-h-[500px] flex items-center py-20 overflow-hidden">
          {/* Background Image & Overlays */}
          <div className="absolute inset-0 z-0">
            <img src="/images/outreach110.jpg" alt="" className="w-full h-full object-cover opacity-60 brightness-[0.3] sm:brightness-[0.5]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c09] via-[#0e0c09]/95 to-transparent" />
            <div className="absolute inset-0 bg-black/60 sm:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#c69a3a]" />
                  <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.35em',textTransform:'uppercase',color:'#c69a3a'}}>Radical Generosity</span>
                </div>

                <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'clamp(2.2rem, 5vw, 4.2rem)',lineHeight:1.1,letterSpacing:'-0.02em',textShadow:'0 2px 15px rgba(0,0,0,0.8)'}} className="text-white">
                  Partner in the <span className="italic text-[#f1cf78]">Eternal Work</span>
                </h2>

                <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-medium" style={{textShadow:'0 1px 8px rgba(0,0,0,0.6)'}}>
                  Your generosity is the catalyst for global transformation. From building sacred spaces in California to supporting our vibrant ministry in Uganda, every gift fuels the mandate to establish a global altar of prayer.
                </p>

                {/* Luxury Metadata Stats */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#f1cf78] text-2xl font-serif">2026</span>
                    <span className="h-4 w-px bg-white/20" />
                    <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.55rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(255,255,255,0.4)'}}>Vision Year</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white text-2xl font-serif uppercase tracking-tighter">Global</span>
                    <span className="h-4 w-px bg-white/20" />
                    <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.55rem',letterSpacing:'0.2em',textTransform:'uppercase',color:'#c69a3a'}}>Ministry Reach</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    to="/give"
                    className="group inline-flex items-center gap-4 font-black uppercase px-10 py-5 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-midnight"
                    style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.75rem',letterSpacing:'0.14em',background:'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)',boxShadow:'0 15px_40px_rgba(198,154,58,0.4)'}}
                  >
                    Partner with Us
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sacred Mandate Section */}
        <section className="py-20 sm:py-36 bg-[#0e0c09] text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c69a3a]/5 blur-[120px] rounded-full" />
          </div>
          
          <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10 sm:space-y-16"
            >
              {/* Sacred Icon */}
              <div className="flex justify-center items-center gap-6">
                <div className="h-px w-16 sm:w-24" style={{background:'linear-gradient(90deg,transparent,rgba(198,154,58,0.3))'}} />
                <div className="text-[#f1cf78] opacity-80">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21h22L12 2zm0 3.45l8.15 14.1H3.85L12 5.45z"/>
                  </svg>
                </div>
                <div className="h-px w-16 sm:w-24" style={{background:'linear-gradient(90deg,rgba(198,154,58,0.3),transparent)'}} />
              </div>
              
              <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:500,fontSize:'clamp(1.6rem,4vw,3.2rem)',fontStyle:'italic',lineHeight:1.4,letterSpacing:'-0.01em'}} className="text-[#f1eedc] max-w-4xl mx-auto">
                "Our mandate is to establish a global altar of prayer that spans across borders, uniting hearts in a singular pursuit of God's presence."
              </h2>
              
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-px bg-[#c69a3a]" />
                  <p style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.4em',textTransform:'uppercase',color:'#c69a3a'}}>The Vision for 2026</p>
                  <span className="w-6 h-px bg-[#c69a3a]" />
                </div>
                <p className="text-white/40 max-w-xl mx-auto leading-relaxed text-sm sm:text-base font-medium">
                  Through the partnership of The Throne and our global church plants, we are witnessing a sovereign move of God that is restoring families and transforming nations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Global Network Section - Clean Editorial Redesign */}
        <section className="py-24 sm:py-40 relative overflow-hidden bg-[#0a0806]">
          {/* Cinematic Background */}
          <div className="absolute inset-0 z-0">
            <img src="/images/s1.jpg" alt="" className="w-full h-full object-cover opacity-30 brightness-[0.25] scale-105 blur-[1px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] via-transparent to-[#0a0806]" />
            <div className="absolute inset-0 bg-black/60 sm:hidden" />
          </div>
          
          <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10 sm:space-y-16"
            >
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#c69a3a]/40" />
                <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.35em',textTransform:'uppercase',color:'#c69a3a'}}>Global Footprint</span>
                <span className="h-px w-8 bg-[#c69a3a]/40" />
              </div>

              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'clamp(2.2rem, 5vw, 4.2rem)',lineHeight:1.1,letterSpacing:'-0.03em',textShadow:'0 2px 15px rgba(0,0,0,0.8)'}} className="text-white">
                Connecting Hearts <br className="hidden sm:block" /><span className="italic text-[#f1cf78]">Across Continents</span>
              </h3>
              
              <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-medium" style={{textShadow:'0 1px 8px rgba(0,0,0,0.6)'}}>
                From the bustling streets of California to the vibrant villages of Uganda, our ministry is a testament to the unifying power of the Gospel.
              </p>

              <div className="flex justify-center pt-6">
                <Link
                  to="/ministries/ffck"
                  className="group inline-flex items-center gap-4 font-black uppercase rounded-full transition-all duration-300 hover:-translate-y-0.5 text-midnight px-10 py-5"
                  style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.82rem',letterSpacing:'0.14em',background:'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)',boxShadow:'0 15px_40px_rgba(198,154,58,0.4)'}}
                >
                  Explore Faith Family Church Kidiki
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
