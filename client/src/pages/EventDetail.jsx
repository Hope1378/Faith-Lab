import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import RegistrationForm from '../components/events/RegistrationForm'
import { fetchEventBySlug } from '../services/eventService'
import { trackEngagement } from '../services/analyticsService'
import { formatDate, formatTime } from '../utils/formatters'
import { fadeScale, staggerTight } from '../utils/animationVariants'
import { siteConfig } from '../utils/constants'
import './EventDetail.css'

export default function EventDetail() {
  const { slug } = useParams()
  const [event, setEvent] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    fetchEventBySlug(slug).then(setEvent)
  }, [slug])

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  async function handleInviteDownload() {
    await trackEngagement('event_invite_download', { slug: event?.slug, title: event?.title })
  }

  async function handleJoinOnline() {
    await trackEngagement('event_join_online_click', { slug: event?.slug, title: event?.title })
  }

  if (!event) {
    return null
  }

  return (
    <motion.section 
      initial="hidden" 
      animate="show" 
      variants={staggerTight} 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen px-4 pb-24 pt-12 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24 overflow-hidden bg-gradient-to-b from-[#faf8f5] to-[#f3efea]"
    >
      <Helmet>
        <title>{event.title} | Faith Family Church Kidiki</title>
        <meta name="description" content={event.summary || event.description} />
      </Helmet>

      {/* Ultra-Premium Sacred Stage Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Animated Mesh Gradient */}
         <div className="absolute inset-0 z-0 opacity-40 mix-blend-soft-light animate-pulse-slow">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#c69a3a]/10 blur-[120px] animate-float-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#f1cf78]/5 blur-[150px] animate-float-slow-reverse" />
         </div>

         {/* Sacred Geometry Elements */}
         <div className="absolute inset-0 z-10 overflow-hidden opacity-10">
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] border border-[#c69a3a]/20 rounded-full animate-spin-slow-30" />
            <div className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] border border-[#c69a3a]/10 rounded-full animate-spin-slow-reverse-60" />
         </div>

         {/* Dynamic Interactive Glow */}
         <div 
           className="absolute inset-0 z-20 opacity-40 transition-opacity duration-1000"
           style={{
             background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(198,154,58,0.08), transparent 80%)`
           }}
         />

         {/* Atmospheric Artwork Texture */}
         <img src={siteConfig.heroArtwork} alt="" className="w-full h-full object-cover grayscale opacity-[0.12] mix-blend-overlay blur-[120px] animate-ken-burns brightness-[1.05]" />
         
         <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/10 via-[#f3efea]/95 to-[#f3efea]" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-2 lg:pt-4 space-y-12">
        {/* Atmospheric Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-8 bg-[#c69a3a]/40" />
              <p style={{fontFamily:"'Manrope', sans-serif", fontWeight:800}} className="text-[#c69a3a] text-[0.65rem] uppercase tracking-[0.5em] gold-text-shimmer">Sacred Encounter</p>
            </div>
            <div className="flex items-center gap-6">
              <h2 style={{fontFamily:"'Cormorant Garamond', serif", fontWeight:700}} className="text-3xl lg:text-5xl text-midnight leading-none">FFCK <span className="italic text-[#c69a3a]">Events.</span></h2>
              <div className="h-10 w-[1px] bg-midnight/5 hidden lg:block" />
              <p style={{fontFamily:"'Manrope', sans-serif", fontWeight:600}} className="text-[0.65rem] uppercase tracking-[0.2em] text-midnight/30 hidden lg:block pt-2">Encountering Now — <span className="text-midnight/60">{event.title}</span></p>
            </div>
          </div>
          
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-midnight/5 to-transparent hidden lg:block mb-4" />
          
          <div className="flex items-center gap-5 mb-1">
             <div className="w-12 h-12 rounded-2xl bg-white shadow-xl border border-midnight/5 flex items-center justify-center text-[#c69a3a] relative overflow-hidden group/presence">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c69a3a]/20 to-transparent opacity-0 group-hover/presence:opacity-100 transition-opacity duration-700" />
                <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
             </div>
             <div>
                <p style={{fontFamily:"'Manrope', sans-serif", fontWeight:800}} className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c69a3a] mb-1">Ministry Presence</p>
                <p className="text-[0.65rem] font-black text-midnight/40 uppercase tracking-widest leading-tight">Faith Family <br/>Church Kidiki</p>
             </div>
          </div>
        </div>
        <motion.div variants={fadeScale} className="relative rounded-[3rem] lg:rounded-[4.5rem] overflow-hidden bg-[#0d0b0a] shadow-3xl border border-white/5 group">
           <div className="h-[280px] sm:h-[320px] lg:h-[380px] relative overflow-hidden">
              {/* Cinematic Underlay Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,154,58,0.15)_0%,transparent_70%)] animate-pulse-slow" />
              
              <img 
                src={event.coverImage || "/images/outreach6.jpg"} 
                alt="" 
                style={{
                  height: 'calc(100% + 45px)',
                  top: '45px',
                  transform: `scale(${ (slug === 'sunday-service' || slug === 'childrens-fellowship' || event.title.toLowerCase().includes('sunday')) ? 1.3 : 1.2})`
                }}
                className="absolute inset-x-0 w-full object-cover object-center opacity-60 transition-transform duration-[6000ms] brightness-75 blur-[1px]" 
              />
              
              {/* Premium Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b0a] via-[#0d0b0a]/40 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(13,11,10,0.8)_100%)] mix-blend-multiply" />
              <div className="absolute inset-0 bg-[#c69a3a]/5 mix-blend-color opacity-20" />
           </div>

           <div className="absolute inset-0 flex flex-col justify-end p-10 lg:px-20 lg:pt-20 lg:pb-14 pb-8">
              <div className="space-y-6 max-w-4xl">
                 <motion.p 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   style={{fontFamily:"'Manrope', sans-serif", fontWeight:800}} 
                   className="text-[#c69a3a] text-[0.65rem] lg:text-[0.8rem] uppercase tracking-[0.5em]"
                 >
                   {event.category || 'Gathering'}
                 </motion.p>
                 <h1 
                    style={{fontFamily:"'Cormorant Garamond', serif", fontWeight:700}} 
                    className="text-4xl sm:text-5xl lg:text-8xl text-white leading-[0.9] tracking-[-0.04em] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:scale-[1.01] transition-transform duration-1000"
                 >
                    <span className="block">{event.title.split(' ').slice(0, 2).join(' ')}</span>
                    <span className="block italic text-[#f1cf78] gold-text-shimmer">{event.title.split(' ').slice(2).join(' ')}</span>
                 </h1>
              </div>
              <div className="flex flex-wrap gap-4 items-center mt-8">
                 <Link to="/ministries/ffck/events" className="text-white/40 hover:text-[#c69a3a] transition-colors flex items-center gap-3 group/back">
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/back:border-[#c69a3a] transition-all">
                       <i className="fas fa-arrow-left text-[10px]" />
                    </div>
                    <span style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-widest">Back to schedule</span>
                 </Link>
              </div>
           </div>
        </motion.div>

        {/* Experience Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div variants={fadeScale} className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c69a3a]/30 to-transparent" />
                <h3 style={{fontFamily:"'Cormorant Garamond', serif", fontWeight:700}} className="text-4xl text-midnight italic tracking-tight">The <span className="text-[#c69a3a]">Experience.</span></h3>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#c69a3a]/30 to-transparent" />
              </div>
              
              <div className="bg-[#faf8f5]/60 backdrop-blur-3xl rounded-[3.5rem] p-10 lg:p-14 border border-white/60 shadow-2xl space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c69a3a]/10 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-1000" />
                
                <p style={{fontFamily:"'Manrope', sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-[0.4em] text-[#c69a3a]">Sacred Summary</p>
                <p className="text-2xl font-medium text-midnight/80 leading-relaxed italic">"{event.summary || event.description}"</p>
                <div className="h-[1px] w-20 bg-[#c69a3a]/20" />
                <div className="prose prose-lg text-midnight/70 leading-loose font-medium">
                  {event.description && event.description !== event.summary ? event.description : ''}
                </div>
              </div>
            </motion.div>

            {/* Sacred Metadata Cards */}
            <div className="grid sm:grid-cols-2 gap-8">
              {/* Sacred Timing Card */}
              <motion.div 
                variants={fadeScale} 
                className="group/card relative bg-[#faf8f5]/60 backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c69a3a] via-[#f1cf78] to-[#c69a3a] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#c69a3a]/10 flex items-center justify-center text-[#c69a3a] group-hover/card:scale-110 transition-transform duration-500 shadow-inner">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{fontFamily:"'Manrope', sans-serif", fontWeight:800}} className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c69a3a] mb-2">Sacred Timing</p>
                    <h4 className="text-xl font-bold text-midnight tracking-tight mb-1">{formatDate(event.startsAt || event.date)}</h4>
                    <p className="text-sm font-semibold text-midnight/50 uppercase tracking-widest">{formatTime(event.startsAt || event.time)}</p>
                  </div>
                </div>
              </motion.div>

              {/* Gathering Place Card */}
              <motion.div 
                variants={fadeScale} 
                className="group/card relative bg-[#faf8f5]/60 backdrop-blur-3xl rounded-[2.5rem] p-10 border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c69a3a] via-[#f1cf78] to-[#c69a3a] opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#c69a3a]/10 flex items-center justify-center text-[#c69a3a] group-hover/card:scale-110 transition-transform duration-500 shadow-inner">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p style={{fontFamily:"'Manrope', sans-serif", fontWeight:800}} className="text-[0.6rem] uppercase tracking-[0.3em] text-[#c69a3a] mb-2">Gathering Place</p>
                    <h4 className="text-xl font-bold text-midnight tracking-tight mb-1">{event.location}</h4>
                    <p className="text-sm font-semibold text-midnight/50 uppercase tracking-widest whitespace-nowrap">Main Sanctuary</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <motion.a 
                whileHover={{ scale: 1.02, y: -2 }}
                href={`/api/events/${event.slug}/invite`}
                style={{background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)'}}
                className="group/btn relative px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-midnight shadow-xl overflow-hidden flex items-center gap-4 transition-all"
              >
                <span className="relative z-10">Download Invitation</span>
                <svg className="relative z-10 w-4 h-4 transition-transform group-hover/btn:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
              </motion.a>

              {event.onlineUrl && (
                <motion.a 
                  whileHover={{ scale: 1.02, y: -2 }}
                  href={event.onlineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn relative px-10 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-midnight bg-white/60 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-xl transition-all flex items-center gap-4 overflow-hidden"
                >
                  <span className="relative z-10">Join Sanctuary Online</span>
                  <svg className="relative z-10 w-4 h-4 text-[#c69a3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c69a3a]/5 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Sidebar - Registration Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
             <RegistrationForm event={event} />
          </div>
        </div>
      </div>
    </motion.section>
  )
}
