import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import EventCard from '../events/EventCard'
import { events } from '../../utils/constants'
import { fadeScale, staggerTight } from '../../utils/animationVariants'
import './UpcomingEvents.css'

export default function UpcomingEvents() {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} variants={staggerTight} className="section-shell section-shell--soft upcoming-events-home px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Upcoming"
            title="Moments that gather the church family."
            description="From worship gatherings to outreach and youth nights, these are the next opportunities to come in, serve, and belong."
            align="left"
          />
          <motion.div variants={fadeScale}>
            <Link to="/ministries/ffck/events" className="section-link-chip">Explore all events</Link>
          </motion.div>
        </div>
        <motion.div variants={staggerTight} className="grid gap-6 lg:grid-cols-3">
          {events.slice(0, 3).map((event) => (
            <motion.div key={event.id} variants={fadeScale} className="h-full">
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
