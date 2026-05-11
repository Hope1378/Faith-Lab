import { motion } from 'framer-motion'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import useEvents from '../hooks/useEvents'
import EventCalendar from '../components/events/EventCalendar'
import EventGrid from '../components/events/EventGrid'
import Loader from '../components/common/Loader'
import { fadeScale, staggerTight } from '../utils/animationVariants'
import { siteConfig } from '../utils/constants'
import './Events.css'

export default function Events() {
  const [filters, setFilters] = useState({ category: '', view: 'month' })
  const { events, loading } = useEvents(filters)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <motion.section 
      initial="hidden" 
      animate="show" 
      variants={staggerTight} 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen px-4 pb-20 pt-12 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24 overflow-hidden bg-gradient-to-b from-[#faf8f5] to-[#f3efea]"
    >
      <Helmet>
        <title>Events | Faith Family Church Kidiki</title>
        <meta name="description" content="Stay updated with upcoming events, worship services, and community outreaches at Faith Family Church Kidiki." />
      </Helmet>

      {/* Ultra-Premium Sacred Stage — Reworked for Maximum Energy and Fidelity */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Animated Mesh Gradient — Adds movement and life */}
         <div className="absolute inset-0 z-0 opacity-40 mix-blend-soft-light animate-pulse-slow">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#c69a3a]/10 blur-[120px] animate-float-slow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#f1cf78]/5 blur-[150px] animate-float-slow-reverse" />
         </div>

         {/* Sacred Geometry Elements — Floating Gold Rings */}
         <div className="absolute inset-0 z-10 overflow-hidden opacity-20">
            <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] border border-[#c69a3a]/20 rounded-full animate-spin-slow-30" />
            <div className="absolute top-[10%] left-[8%] w-[380px] h-[380px] border border-[#c69a3a]/10 rounded-full animate-spin-slow-reverse-45" />
            
            <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] border border-[#c69a3a]/10 rounded-full animate-spin-slow-60" />
            <div className="absolute bottom-[25%] right-[-2%] w-[580px] h-[580px] border border-[#c69a3a]/5 rounded-full animate-spin-slow-reverse-90" />
         </div>

         {/* Dynamic Interactive Glow — Follows the cursor for a premium alive feel */}
         <div 
           className="absolute inset-0 z-20 opacity-40 transition-opacity duration-1000 group-hover:opacity-100"
           style={{
             background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(198,154,58,0.08), transparent 80%)`
           }}
         />

         {/* Subtle Radial Lighting Layers */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,154,58,0.12),transparent_60%)]" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(198,154,58,0.08),transparent_60%)]" />
         
         {/* Atmospheric Artwork Texture */}
         <img 
           src={siteConfig.heroArtwork} 
           alt="" 
           className="w-full h-full object-cover grayscale opacity-[0.15] mix-blend-overlay blur-[120px] animate-ken-burns brightness-[1.05]" 
         />
         
         {/* Premium Mesh & Grain Texture Blending */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/10 via-[#f3efea]/95 to-[#f3efea]" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.04] mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-10 lg:space-y-16">
        <motion.div 
          variants={fadeScale} 
          className="relative rounded-[3.5rem] overflow-hidden bg-[#0a0806] shadow-2xl border border-white/5 group"
        >
          {/* Ken Burns Image Backdrop */}
          <div className="absolute inset-0 z-0">
             <img src="/images/outreach6.jpg" alt="" className="w-full h-full object-cover opacity-25 scale-110 group-hover:scale-100 transition-transform duration-[6000ms] brightness-50 blur-[2px]" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/60 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806]/80 via-transparent to-[#0a0806]/80" />
          </div>

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between p-10 lg:p-20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#c69a3a]/40" />
                <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] tracking-[0.5em] uppercase text-[0.6rem] lg:text-[0.7rem] gold-text-shimmer">
                  Sacred Rhythm
                </p>
              </div>
              <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-[3.5rem] sm:text-6xl lg:text-[6.5rem] leading-[0.9] tracking-tighter text-white">
                Upcoming <br />
                <span className="italic text-[#f1cf78] font-medium">Gatherings.</span>
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-3 bg-white/5 backdrop-blur-xl p-2 rounded-full border border-white/10">
              {['month', 'week', 'day'].map((view) => (
                <button 
                  key={view} 
                  type="button" 
                  onClick={() => setFilters((current) => ({ ...current, view }))} 
                  style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}}
                  className={`rounded-full px-8 py-3 text-[0.65rem] uppercase tracking-widest transition-all ${filters.view === view ? 'bg-[#c69a3a] text-midnight shadow-lg' : 'bg-transparent text-white/40 hover:text-white'}`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={fadeScale}><EventCalendar events={events} view={filters.view} selectedCategory={filters.category} onCategoryChange={(category) => setFilters((current) => ({ ...current, category }))} /></motion.div>
        
        <div className="space-y-12">
           <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#c69a3a]" />
              <h2 style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.75rem] uppercase tracking-[0.4em] text-[#c69a3a]">Full Schedule</h2>
           </div>
           <motion.div variants={fadeScale}>{loading ? <Loader label="Loading events" /> : <EventGrid events={events} />}</motion.div>
        </div>
      </div>
    </motion.section>
  )
}
