import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import SermonCard from '../sermons/SermonCard'
import { sermons } from '../../utils/constants'
import { fadeScale, staggerTight } from '../../utils/animationVariants'
import './LatestSermons.css'

export default function LatestSermons() {
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} variants={staggerTight} className="section-shell latest-sermons-home px-4 py-12 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="Recent Messages"
            title="Messages for formation, not just media."
            description="Listen again, revisit the Scriptures, and keep growing through sermons shaped to strengthen faith and obedience."
            align="left"
          />
          <motion.div variants={fadeScale}>
            <Link to="/ministries/ffck/sermons" className="section-link-chip">Browse archive</Link>
          </motion.div>
        </div>
        <motion.div variants={staggerTight} className="grid gap-6 lg:grid-cols-3">
          {sermons.slice(0, 3).map((sermon) => (
            <motion.div key={sermon.slug} variants={fadeScale} className="h-full">
              <SermonCard sermon={sermon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
