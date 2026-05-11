import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { livestreamSchedule, pastBroadcasts, siteConfig } from '../utils/constants'
import { fadeScale, staggerTight } from '../utils/animationVariants'
import './WatchLive.css'

export default function WatchLive() {
  return (
    <motion.section 
      initial="hidden" 
      animate="show" 
      variants={staggerTight} 
      className="relative min-h-screen px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24 overflow-hidden bg-[#faf8f5]"
    >
      {/* Ultra-Premium Depth Layer — Replicated from Archive Pages */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
         <img src={siteConfig.heroArtwork} alt="" className="w-full h-full object-cover grayscale opacity-10 mix-blend-multiply blur-3xl animate-ken-burns" />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf8f5]/80 to-[#faf8f5]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-10 lg:space-y-16">
        {/* Cinematic Live Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          
          {/* THE STAGE: Main Stream Viewport */}
          <motion.div variants={fadeScale} className="relative overflow-hidden rounded-[3.5rem] bg-[#0a0806] shadow-[0_50px_100px_rgba(0,0,0,0.3)] border border-white/5 group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c69a3a]/10 via-transparent to-transparent opacity-40 z-0" />
            
            <div className="relative z-10 aspect-video">
              <iframe 
                title="Live Stream" 
                src={siteConfig.streamEmbed} 
                className="h-full w-full" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen 
              />
            </div>

            <div className="relative z-10 space-y-6 p-10 lg:p-14 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/80 to-transparent">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#c69a3a] animate-pulse shadow-[0_0_12px_rgba(198,154,58,1)]" />
                <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] tracking-[0.5em] uppercase text-[0.6rem] lg:text-[0.7rem] gold-text-shimmer">
                  Live Experience
                </p>
              </div>
              <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:600}} className="text-white text-4xl sm:text-5xl lg:text-7xl leading-tight tracking-tighter">
                An Apostolic <br />
                <span className="italic text-[#f1cf78] font-medium">Encounter.</span>
              </h1>
              <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:500}} className="text-white/50 max-w-3xl text-lg leading-relaxed">
                Experience the profound ministry of <span className="text-white font-bold">Apostle Denis Kasirye</span>, the General Overseer of all <span className="text-[#c69a3a]">Faith Family Church Centers</span> and Spiritual Patriarch of the Main Branch. As the visionary leader of Latter Glory Ministries, he delivers the Word today from the Rubaga Main Sanctuary.
              </p>
            </div>
          </motion.div>

          {/* THE PROGRAM: Side Panels */}
          <motion.div variants={staggerTight} className="space-y-8">
            {/* Upcoming Streams Card */}
            <motion.div variants={fadeScale} className="p-10 rounded-[3rem] bg-white shadow-xl shadow-midnight/5 border border-midnight/5 space-y-8">
              <div className="flex items-center gap-3">
                 <span className="h-px w-6 bg-[#c69a3a]" />
                 <h2 style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-[0.3em] text-[#c69a3a]">Next Encounters</h2>
              </div>
              <div className="space-y-8">
                {livestreamSchedule.map((stream) => (
                  <div key={stream.id} className="group relative">
                    <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-midnight text-[1.05rem] group-hover:text-[#c69a3a] transition-colors">{stream.title}</p>
                    <p className="text-midnight/40 text-[0.75rem] font-bold mt-1 tracking-wide">{stream.time} • {stream.platform}</p>
                    <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-[#c69a3a] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Broadcast Archive Card */}
            <motion.div variants={fadeScale} className="p-10 rounded-[3rem] bg-[#0a0806] shadow-2xl border border-white/5 space-y-8">
              <div className="flex items-center gap-3">
                 <span className="h-px w-6 bg-[#c69a3a]/40" />
                 <h2 style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-[0.3em] text-[#c69a3a]">Past Presence</h2>
              </div>
              <div className="space-y-4">
                {pastBroadcasts.map((broadcast) => (
                  <button 
                    key={broadcast.id} 
                    className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#c69a3a]/40 hover:bg-white/[0.08] transition-all group text-left"
                  >
                    <span className="text-[0.7rem] font-bold text-white/70 group-hover:text-white uppercase tracking-widest">{broadcast.title}</span>
                    <svg className="w-4 h-4 text-[#c69a3a] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Community Connect */}
            <motion.div variants={fadeScale} className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#c69a3a] to-[#d4a93c] shadow-lg shadow-[#c69a3a]/20">
               <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-midnight text-[0.8rem] uppercase tracking-widest">Connect Live</p>
               <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:600}} className="text-white text-2xl mt-2 leading-tight">Need prayer during the stream?</h3>
               <Link 
                 to="/ministries/ffck/contact" 
                 className="mt-6 block w-full py-4 bg-midnight text-white text-center text-[0.6rem] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white hover:text-midnight transition-all shadow-xl"
               >
                 Request Prayer Now
               </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
