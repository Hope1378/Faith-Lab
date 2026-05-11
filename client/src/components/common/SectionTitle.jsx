import { motion } from 'framer-motion'
import { fadeUp } from '../../utils/animationVariants'
import './SectionTitle.css'

export default function SectionTitle({ eyebrow, title, description, align = 'center', tone = 'dark', gold = false, className = '' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className={`section-title section-title--${tone} max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow ? <p className="eyebrow text-bronze">{eyebrow}</p> : null}
      <h2 className={`display-title mt-3 text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight${gold ? ' gold-premium' : ''}`}>{title}</h2>
      {description ? <p className="prose-copy mt-4 text-base sm:text-lg leading-relaxed">{description}</p> : null}
    </motion.div>
  )
}
