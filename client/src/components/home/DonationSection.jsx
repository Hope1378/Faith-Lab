import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import { fadeScale } from '../../utils/animationVariants'
import './DonationSection.css'

export default function DonationSection() {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeScale} className="section-shell section-shell--feature donation-home px-4 py-24 sm:px-6 lg:px-10 bg-[#faf8f5]">
      <div className="donation-home__panel mx-auto max-w-7xl rounded-[3rem] lg:rounded-[5rem] px-6 sm:px-12 py-12 sm:py-32 text-white shadow-[0_50px_100px_rgba(0,0,0,0.4)] relative flex flex-col lg:flex-row items-center lg:items-stretch bg-[#0e0c09] overflow-hidden">
        
        {/* Cinematic Background Image with Ken Burns Effect */}
        <div className="absolute inset-0 z-0">
          <img src="/images/outreach110.jpg" alt="" className="w-full h-full object-cover opacity-20 contrast-125 grayscale scale-110 animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c09] via-[#0e0c09]/95 to-transparent"></div>
        </div>

        <div className="flex-1 z-10 flex flex-col justify-center relative">
          <div className="text-center lg:text-left space-y-8">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="h-px w-10 bg-[#c69a3a]/40" />
              <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] tracking-[0.5em] uppercase text-[0.6rem] lg:text-[0.7rem] gold-text-shimmer">
                Kingdom Stewardship
              </p>
            </div>

            <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-white tracking-tighter">
              Give with confidence & <br />
              <span className="italic text-[#f1cf78]">shared purpose.</span>
            </h2>

            <p className="text-base sm:text-xl text-white/50 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed italic">
              "Support worship, discipleship, and the global work of ministry through a world-class giving experience built for clarity and trust."
            </p>
          </div>

          <motion.div variants={fadeScale} className="donation-home__actions mt-12 flex flex-col sm:flex-row gap-5 items-stretch sm:items-center justify-center lg:justify-start">
            <Link 
              to="/ministries/ffck/give" 
              style={{
                fontFamily:"'Manrope',sans-serif", 
                fontWeight:800,
                background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)',
              }}
              className="group relative rounded-full px-10 py-5 text-[0.7rem] sm:text-[0.8rem] font-black uppercase tracking-[0.2em] text-midnight shadow-[0_20px_40px_rgba(198,154,58,0.35)] hover:shadow-[0_25px_60px_rgba(198,154,58,0.55)] transition-all transform hover:-translate-y-1.5 active:scale-95 overflow-hidden text-center"
            >
              <span className="relative z-10">Open Giving Portal</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
            </Link>

            <Link to="/ministries/ffck/give" className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-10 py-5 text-[0.7rem] sm:text-[0.8rem] font-black uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all text-center border border-white/20">
              Gift Options
            </Link>
          </motion.div>
        </div>
        
        <div className="hidden lg:flex flex-1 items-center justify-end relative z-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#c69a3a]/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/5 aspect-video w-[450px]">
              <img 
                src="/images/g1.jpg" 
                alt="Generosity" 
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 brightness-90" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Ministry Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-[2rem] shadow-2xl border border-midnight/5 flex flex-col items-center gap-1">
               <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.55rem] uppercase tracking-[0.3em] text-[#c69a3a]">Impact</p>
               <p style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-3xl text-midnight italic leading-none">Global</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
