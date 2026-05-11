import { motion } from 'framer-motion'
import { testimonials } from '../../utils/constants'
import SectionTitle from '../common/SectionTitle'
import { driftIn, staggerTight } from '../../utils/animationVariants'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={staggerTight} className="section-shell section-shell--dark testimonials-home px-6 py-12 sm:py-24 text-white lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
        <SectionTitle
          eyebrow="Stories"
          title="Testimonies of belonging, growth, and service."
          description="These voices reflect the warmth, prayer, and discipleship shaping the life of the church family."
          tone="light"
        />
        <motion.div variants={staggerTight} className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.blockquote
              key={item.id}
              variants={driftIn}
              className="testimonials-home__card premium-light-card rounded-[2rem] p-6 sm:p-10 flex flex-col"
            >
              <p className="premium-testimonial-quote text-[1.1rem] sm:text-[1.18rem] leading-relaxed text-[#261f18] font-medium mb-6 whitespace-pre-line italic">“{item.quote}”</p>
              <footer className="premium-testimonial-author mt-auto pt-4 border-t border-[#c69a3a33]">
                <p className="text-base font-bold text-[#c69a3a] tracking-wide">{item.author.split('\n')[0]}</p>
                {item.author.includes('\n') && <p className="text-sm text-midnight/70 mt-1">{item.author.split('\n').slice(1).join('\n')}</p>}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
