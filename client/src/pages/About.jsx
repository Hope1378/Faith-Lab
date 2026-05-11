import { motion } from 'framer-motion'
import LeadershipCard from '../components/about/LeadershipCard'
import BeliefCard from '../components/about/BeliefCard'
import { beliefs, leaders, ministries } from '../utils/constants'
import { fadeScale, staggerTight } from '../utils/animationVariants'
import './About.css'

export default function About() {
  return (
    <div className="about-page pb-20">
      {/* Cinematic Hero */}
      <section className="relative lg:h-[85vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden text-white bg-midnight">
        {/* MOBILE/TABLET: Stacked Layout (No Crop, No Borders, All People Visible) */}
        <div className="lg:hidden w-full bg-midnight">
          {/* Top: The Image (Natural wide aspect ratio) */}
          <div className="relative w-full aspect-[3648/1517] bg-black">
            <img 
              src="/images/c3.jpg" 
              alt="Church Community Full View" 
              className="w-full h-full object-cover"
            />
            {/* Soft edge fade to unify with the background */}
            <div className="absolute inset-0 shadow-[inset_0_-20px_40px_rgba(0,0,0,0.6)]" />
          </div>
          
          {/* Bottom: The Narrative Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 py-20 text-center bg-gradient-to-b from-black to-midnight"
          >
            <motion.p 
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.5 }}
              className="text-[#f1cf78] font-bold uppercase text-[10px] mb-4 drop-shadow-xl"
            >
              Our Journey of Faith
            </motion.p>
            <h1 className="display-title text-3xl font-black leading-tight !text-white mb-6">
              A Legacy of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c69a3a] to-[#f1cf78]">Love & Service</span>
            </h1>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#f1cf78] to-transparent mx-auto opacity-50" />
          </motion.div>
        </div>

        {/* DESKTOP ONLY: Cinematic Overlay Layout */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <img 
            src="/images/c3.jpg" 
            alt="Faith Family Church Community Desktop" 
            className="w-full h-full object-cover contrast-[1.02] saturate-[1.05]" 
            style={{ objectPosition: 'center 25%' }}
          />
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-midnight/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />
          <div className="cinematic-grain opacity-[0.04] z-20" />
        </div>

        {/* Desktop Title Layer */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="hidden lg:block relative z-40 text-center max-w-5xl px-4"
        >
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1.5 }}
            className="text-[#f1cf78] font-bold uppercase text-sm mb-6 drop-shadow-xl"
          >
            Our Journey of Faith
          </motion.p>
          <h1 className="display-title text-7xl lg:text-8xl font-black leading-[0.9] !text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            A Legacy of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c69a3a] to-[#f1cf78]">Love & Service</span>
          </h1>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mt-8 lg:-mt-20 relative z-20 space-y-24">
        {/* Core Identity Section */}
        <motion.section 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }}
          variants={fadeScale}
          className="about-identity-card rounded-[3rem] p-8 sm:p-16 shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow text-[#c69a3a] mb-4">Our Heart</p>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tight drop-shadow-md">Formed by Presence, Sent with Love.</h2>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-medium">
                Faith Family Church Kidiki exists to exalt Jesus Christ, disciple believers, strengthen families, and serve the people of Kamuli with love, prayer, and biblical truth. We believe in a church that is not just a building, but a living body of Christ.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group/img relative">
                <img 
                  src="/images/s1.jpg" 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 brightness-[1.02] contrast-[1.1] saturate-[1.15]" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group/img relative">
                <img 
                  src="/images/outreach8.jpg" 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 brightness-[1.02] contrast-[1.1] saturate-[1.15]" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group/img relative">
                <img 
                  src="/images/c5.jpg" 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110 brightness-[1.02] contrast-[1.1] saturate-[1.15]" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Beliefs Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow text-[#c69a3a] mb-3">Foundations</p>
            <h2 className="display-title text-4xl sm:text-5xl font-bold text-midnight">What We Believe</h2>
          </div>
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            variants={staggerTight}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {beliefs.map((belief) => <BeliefCard key={belief.id} belief={belief} />)}
          </motion.div>
        </section>

        {/* Leadership Section */}
        <section className="space-y-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="eyebrow text-[#c69a3a] mb-3">Our Stewards</p>
              <h2 className="display-title text-4xl sm:text-5xl font-bold text-midnight">Guiding the Vision</h2>
            </div>
            <p className="text-midnight/60 font-medium max-w-md">
              Led by a commitment to prayer and deep theological roots, our leadership serves to equip the saints for the work of ministry.
            </p>
          </div>
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            variants={staggerTight}
            className="grid gap-8 lg:grid-cols-2"
          >
            {leaders.slice(0, 2).map((leader) => <LeadershipCard key={leader.id} leader={leader} />)}
          </motion.div>
        </section>

        {/* Ministries Section */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="eyebrow text-[#c69a3a] mb-3">Engagement</p>
            <h2 className="display-title text-4xl sm:text-5xl font-bold text-midnight">Areas of Ministry</h2>
          </div>
          <motion.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            variants={staggerTight}
            className="grid gap-8 md:grid-cols-3"
          >
            {ministries.map((ministry) => (
              <div key={ministry.id} className="glass-panel-dark rounded-[2.5rem] p-10 transform transition-all duration-500 hover:-translate-y-2">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c69a3a]/10 text-[#c69a3a]">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l-8-4.5v-9L12 3l8 4.5v9L12 21z" />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#c69a3a] font-bold">Ministry</p>
                <h3 className="mt-4 text-2xl font-black text-white">{ministry.name}</h3>
                <p className="mt-4 text-white/70 leading-relaxed">{ministry.description}</p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-sm font-bold text-[#f1cf78]">{ministry.meetingTime}</p>
                  <p className="mt-1 text-sm text-white/50">{ministry.location}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  )
}
