import { motion } from 'framer-motion'
import { FaCross, FaHandsHelping, FaUsers } from 'react-icons/fa'
import SectionTitle from '../common/SectionTitle'
import { fadeUp, staggerContainer } from '../../utils/animationVariants'
import './VisionMissionMandate.css'

export default function VisionMissionMandate() {
  const cards = [
    {
      icon: FaCross,
      title: 'Vision',
      text: 'To be a Christ-centered community growing in faith, love, and obedience.',
      accent: 'text-[#c69a3a]'
    },
    {
      icon: FaHandsHelping,
      title: 'Mission',
      text: 'To worship God, disciple believers, and reach our community through service.',
      accent: 'text-[#c69a3a]'
    },
    {
      icon: FaUsers,
      title: 'Mandate',
      text: 'Strengthen families, raise faithful disciples, bring hope to Kidiki and beyond.',
      accent: 'text-[#c69a3a]'
    }
  ]

  return (
    <section className="vmm-section section-shell px-6 py-12 sm:py-24 lg:px-10 overflow-hidden bg-slate-50/50">
      <SectionTitle
        eyebrow="Core Identity"
        title="Vision, Mission & Mandate"
        align="center"
      />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {cards.map((card, idx) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            className="group relative bg-white rounded-[2rem] p-8 sm:p-10 shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[#c69a3a]/20"
          >
            <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-[#c69a3a] group-hover:text-white transition-all duration-500 ${card.accent}`}>
              <card.icon className="text-2xl" />
            </div>
            <h3 className="font-black text-2xl mb-4 text-midnight tracking-tight uppercase tracking-widest text-[0.9rem]">{card.title}</h3>
            <p className="text-midnight/60 leading-relaxed font-medium text-sm sm:text-base">
              {card.text}
            </p>
            
            <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <card.icon className="text-6xl text-[#c69a3a]" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
