import { motion } from 'framer-motion'
import DonationForm from '../components/giving/DonationForm'
import GivingPhilosophy from '../components/giving/GivingPhilosophy'
import GivingGuideCard from '../components/giving/GivingGuideCard'
import { fadeScale, staggerTight } from '../utils/animationVariants'
import { ccfgmSiteConfig } from '../utils/ccfgmConstants'
import './Give.css'

export default function CCFGMGive() {
  return (
    <motion.section 
      initial="hidden" 
      animate="show" 
      variants={staggerTight} 
      className="give-page-section px-4 pb-20 pt-16 lg:px-10 min-h-screen"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Main Column: Donation Form & Giving Guide */}
          <div className="flex flex-col items-center justify-start space-y-10">
            <motion.div variants={fadeScale} className="w-full">
              <DonationForm customSiteConfig={ccfgmSiteConfig} />
            </motion.div>

            <GivingGuideCard />
          </div>
          
          {/* Sidebar: Giving Philosophy & Support */}
          <div className="sticky top-[var(--navbar-offset,100px)] h-fit">
            <GivingPhilosophy customConfig={ccfgmSiteConfig} />
          </div>

        </div>
      </div>
    </motion.section>
  )
}
