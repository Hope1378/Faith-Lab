import { motion } from 'framer-motion'
import { FaInfoCircle } from 'react-icons/fa'
import { fadeScale } from '../../utils/animationVariants'

export default function GivingGuideCard() {
  return (
    <motion.div 
      variants={fadeScale}
      className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-b-4 border-bronze/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow w-full"
    >
      <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sand to-white text-2xl shadow-inner border border-bronze/20 transition-transform group-hover:rotate-6 group-hover:scale-110">
          <FaInfoCircle className="text-bronze" />
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-2xl font-bold tracking-tight text-midnight leading-tight">
            Giving Guide
          </h3>
          <p className="text-[0.95rem] leading-relaxed text-midnight/70 font-medium italic">
            Our giving process is designed to be seamless and secure. You may designate your contribution to specific funds—including Missions, Building, or General Offering—ensuring your support is directed to the ministry area closest to your heart. For those preferring manual methods, detailed instructions for CashApp, Zelle, and Airtel Money are provided within the secure checkout portal.
          </p>
        </div>
      </div>
      {/* Decorative Corner Accent */}
      <div className="absolute top-0 right-0 h-16 w-16 opacity-10 transition-opacity group-hover:opacity-20">
        <div className="absolute top-4 right-4 h-full w-full border-t-2 border-r-2 border-bronze" />
      </div>
    </motion.div>
  )
}
