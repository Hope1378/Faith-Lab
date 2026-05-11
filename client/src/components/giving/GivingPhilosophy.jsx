import { motion } from 'framer-motion'
import { FaHandsHelping, FaShieldAlt, FaEnvelopeOpenText } from 'react-icons/fa'
import { fadeScale, staggerTight } from '../../utils/animationVariants'
import { siteConfig } from '../../utils/constants'

export default function GivingPhilosophy({ customConfig }) {
  const activeConfig = customConfig || siteConfig
  
  const sections = [
    {
      icon: <FaHandsHelping className="text-bronze" />,
      title: 'The Heart of Generosity',
      content: 'Your generosity is the catalyst for transformation. When you partner with us through your giving, you are not merely contributing to a fund—you are investing in the eternal work of the Kingdom. Every gift empowers our mission to cultivate discipleship, extend radical compassion to our community, and sustain the sacred spaces where lives are renewed by the Grace of God.'
    },
    {
      icon: <FaShieldAlt className="text-bronze" />,
      title: 'Donation Policy',
      content: 'We are committed to absolute financial integrity and transparency. As a registered NGO, all contributions are utilized exclusively for the advancement of our ministry’s mission and charitable objectives. Official donation receipts for tax purposes or record-keeping are available upon request.'
    }
  ]

  const givingSupport = {
    icon: <FaEnvelopeOpenText className="text-bronze" />,
    title: 'Giving Support',
    content: `Should you require assistance regarding your contribution, legacy giving, or to request a donation receipt, our dedicated stewardship team is available to assist you. Please reach out to us at ${activeConfig.email} for personalized guidance.`
  }

  return (
    <motion.div 
      variants={staggerTight} 
      initial="hidden" 
      animate="show" 
      className="space-y-8"
    >
      {sections.map((section, idx) => (
        <motion.div 
          key={idx} 
          variants={fadeScale}
          className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-b-4 border-bronze/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
        >
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 h-16 w-16 opacity-10 transition-opacity group-hover:opacity-20">
            <div className="absolute top-4 right-4 h-full w-full border-t-2 border-r-2 border-bronze" />
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sand to-white text-2xl shadow-inner border border-bronze/20 transition-transform group-hover:rotate-6 group-hover:scale-110">
              {section.icon}
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-2xl font-bold tracking-tight text-midnight leading-tight">
                {section.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-midnight/70 font-medium italic">
                {section.content}
              </p>
            </div>
          </div>

          {/* Bottom Interactive Bar */}
          <div className="mt-6 h-1 w-0 bg-gradient-to-r from-bronze to-gold transition-all duration-700 group-hover:w-full" />
        </motion.div>
      ))}

      {/* Giving Support Card (Full Width in Sidebar) */}
      <motion.div 
        variants={fadeScale}
        className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border-b-4 border-bronze/10 transition-all duration-500 hover:-translate-y-1"
      >
        <div className="flex flex-col gap-5 relative z-10">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sand to-white text-2xl shadow-inner border border-bronze/20 transition-transform group-hover:rotate-6 group-hover:scale-110">
            {givingSupport.icon}
          </div>
          <div className="space-y-3">
            <h3 className="font-display text-2xl font-bold tracking-tight text-midnight leading-tight">
              {givingSupport.title}
            </h3>
            <p className="text-[0.95rem] leading-relaxed text-midnight/70 font-medium italic">
              {givingSupport.content}
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-16 w-16 opacity-10">
          <div className="absolute top-4 right-4 h-full w-full border-t-2 border-r-2 border-bronze" />
        </div>
      </motion.div>

      {/* Contact Support CTA Card (Full Width in Sidebar) */}
      <motion.div variants={fadeScale} className="rounded-[2.5rem] bg-midnight p-8 text-white relative overflow-hidden group shadow-2xl">
        <div className="relative z-10 flex flex-col gap-4">
          <p className="eyebrow text-gold">Stewardship Support</p>
          <h3 className="font-display text-3xl font-bold leading-tight">Need assistance?</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Our specialized stewardship team is ready to provide confidential guidance regarding your partnership.
          </p>
          <a href={`mailto:${activeConfig.email}`} className="mt-2 inline-flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all underline decoration-gold/30 underline-offset-8">
            Contact Office <FaEnvelopeOpenText />
          </a>
        </div>
        <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-gold/10 blur-3xl rounded-full" />
      </motion.div>
    </motion.div>
  )
}
