import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { serviceTimes } from '../../utils/constants'
import { fadeScale, staggerTight } from '../../utils/animationVariants'
import './ServiceTimes.css'

export default function ServiceTimes() {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={staggerTight} className="section-shell section-shell--dark service-times-home px-4 py-24 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-end">
          <SectionTitle
            eyebrow="Gather With Us"
            title="Clear times, clear place, clear invitation."
            description="Plan your next visit with confidence and join the church family for worship, prayer, and Scripture-centered community."
            tone="light"
            align="left"
          />
          <motion.div variants={fadeScale} className="service-times-home__intro premium-light-card rounded-[2rem] p-6">
            <p className="eyebrow text-gold">This Week in Kidiki</p>
            <p className="mt-4 text-lg text-midnight/72">
              Whether you are joining for Sunday worship, midweek formation, or Friday prayer, every gathering is built to help people encounter God and walk with others.
            </p>
          </motion.div>
        </div>

        <motion.div variants={staggerTight} className="grid gap-8 md:grid-cols-3">
          {serviceTimes.map((item) => (
            <motion.article 
              key={item.title} 
              variants={fadeScale} 
              whileHover={{ y: -10 }}
              className="relative overflow-hidden group rounded-[2.5rem] p-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-midnight/5 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(198,154,58,0.12)] hover:border-[#c69a3a]/20"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c69a3a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col h-full">
                <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] text-[0.6rem] uppercase tracking-[0.4em] mb-6">
                  {item.title}
                </p>
                <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-4xl sm:text-5xl text-midnight mb-4">
                  {item.time}
                </h3>
                <div className="h-px w-12 bg-[#c69a3a]/20 mb-6" />
                <p className="text-midnight/50 font-medium leading-relaxed italic">
                  "{item.detail}"
                </p>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#c69a3a]/5 rounded-full blur-3xl group-hover:bg-[#c69a3a]/10 transition-colors" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
