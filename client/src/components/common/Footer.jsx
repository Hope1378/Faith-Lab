import { Link, useLocation } from 'react-router-dom'
import { 
  actionNavigation as ffckActions, 
  primaryNavigation as ffckPrimary, 
  serviceTimes as ffckServices, 
  siteConfig as ffckConfig 
} from '../../utils/constants'
import { 
  ccfgmActionNavigation as ccfgmActions, 
  ccfgmPrimaryNavigation as ccfgmPrimary, 
  ccfgmServiceTimes as ccfgmServices, 
  ccfgmSiteConfig as ccfgmConfig 
} from '../../utils/ccfgmConstants'
import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const location = useLocation()
  const isFFCK = location.pathname.includes('/ministries/ffck')
  const currentYear = new Date().getFullYear()

  // Dynamic Data Selection with Safety Fallbacks
  const config = (isFFCK ? ffckConfig : ccfgmConfig) || {}
  const services = (isFFCK ? ffckServices : ccfgmServices) || []
  const primaryNav = (isFFCK ? ffckPrimary : (ccfgmPrimary?.filter(item => item.to) || [])) || []
  const actionNav = (isFFCK ? ffckActions : ccfgmActions) || []

  const excludedLabels = ['Sermons', 'Events', 'About', 'Admin']
  const footerActions = actionNav.filter((item) => !excludedLabels.includes(item.label))
  const footerPrimary = primaryNav.filter((item) => !excludedLabels.includes(item.label))

  // Contextual Content
  const quote = isFFCK 
    ? "A church family rooted in Christ, devoted to Scripture, and reaching Kidiki with radical love."
    : "A global altar of prayer, uniting hearts across continents in the singular pursuit of God's presence."
  
  const credential = isFFCK 
    ? { top: "Ministry of the Gospel", bottom: "EST. 2024 | KIDIKI MISSION" }
    : { top: "Partner Church", bottom: "THE THRONE | CONCORD, CA" }

  const brandingLine1 = isFFCK ? "Faith Family" : "Christ Centered"
  const brandingLine2 = isFFCK ? "Church Kidiki" : "Global Ministries"

  return (
    <footer className="relative bg-[#030201] text-white pt-20 sm:pt-28 pb-12 overflow-hidden">
      {/* God-Tier Atmospheric Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c69a3a]/40 to-transparent" />
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-[#c69a3a]/[0.04] blur-[180px] rounded-full animate-pulse" style={{animationDuration:'8s'}} />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-[#c69a3a]/[0.03] blur-[150px] rounded-full animate-pulse" style={{animationDuration:'12s'}} />
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* The Haute Couture Brand Statement */}
        <div className="relative mb-16 sm:mb-20 border-b border-white/5 pb-12 sm:pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 relative">
               {/* Vertical Eyebrow */}
               <div className="absolute -left-12 top-0 hidden xl:block">
                  <p style={{fontFamily:"'Manrope',sans-serif",fontWeight:200,fontSize:'0.5rem',letterSpacing:'1em',textTransform:'uppercase',color:'#c69a3a',writingMode:'vertical-rl'}} className="opacity-30 underline decoration-[#c69a3a]/20 underline-offset-[10px]">LITURGY & LOVE</p>
               </div>
               
               <div className="relative">
                  <p style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.5rem',letterSpacing:'0.8em',textTransform:'uppercase',color:'#c69a3a'}} className="mb-4 lg:ml-1 opacity-80">{isFFCK ? 'Since 2024' : 'Global Network'}</p>
                  <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:300,fontSize:'clamp(1.8rem, 5.5vw, 4.8rem)',lineHeight:0.95,letterSpacing:'-0.03em'}} className="text-transparent bg-clip-text bg-gradient-to-b from-[#f1eedc] via-[#f1eedc] to-[#c69a3a]/40">
                    {brandingLine1} <span className="italic text-[#f1cf78] font-medium">{brandingLine2}</span>
                  </h2>
               </div>

               <div className="lg:text-right max-w-md mx-auto lg:mx-0">
                  <p style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:400,fontSize:'1.35rem',lineHeight:1.4}} className="italic text-white/30 leading-relaxed">
                    "{quote}"
                  </p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Boutique Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16 sm:mb-24 text-center lg:text-left">
          {[
            { 
              title: isFFCK ? 'Curated Path' : 'Explore', 
              links: [...footerPrimary, ...footerActions] 
            },
            { 
              title: isFFCK ? 'The Liturgy' : 'Gatherings', 
              items: isFFCK ? services.slice(0, 3) : services.slice(0, 2)
            },
            { 
              title: isFFCK ? 'Our Home' : 'Visit Us', 
              content: <p style={{fontFamily:"'Cormorant Garamond',serif"}} className="text-[0.95rem] font-medium text-white/30 leading-relaxed italic mx-auto lg:mx-0 max-w-[200px] lg:max-w-none">{isFFCK ? 'Kaliro Road, Kidiki Village' : config.address}<br />{isFFCK ? 'The Heart of Uganda' : 'Concord, California'}</p>,
              action: <a href="https://maps.google.com" className="inline-block mt-4 text-[0.55rem] font-black uppercase tracking-[0.4em] text-[#f1cf78] hover:text-white transition-all border-b border-[#f1cf78]/20 pb-2">{isFFCK ? 'View on Atlas' : 'Get Directions'}</a>
            },
            { 
              title: isFFCK ? 'Credential' : 'Outreach', 
              content: <div className="space-y-4 flex flex-col items-center lg:items-start">
                <div className="p-5 rounded-[2rem] bg-white/[0.02] border border-white/5 inline-block text-center lg:text-left">
                  <p style={{letterSpacing:'0.5em'}} className="text-[0.35rem] font-black uppercase text-[#c69a3a] mb-2">{credential.top}</p>
                  <p className="text-[0.65rem] font-bold text-white/40 tracking-[0.2em]">{credential.bottom}</p>
                </div>
              </div>
            }
          ].map((section, idx) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex flex-col items-center lg:items-start space-y-6 sm:space-y-10"
            >
              <h4 style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.45rem',letterSpacing:'0.6em',textTransform:'uppercase',color:'#c69a3a'}} className="opacity-40 border-b border-[#c69a3a]/10 pb-2 inline-block">
                {section.title}
              </h4>
              <div className="space-y-3 sm:space-y-5 flex flex-col items-center lg:items-start">
                {section.links && section.links.map(link => (
                  <Link key={link.to} to={link.to} style={{letterSpacing:'0.05em'}} className="block text-[0.75rem] font-semibold text-white/30 hover:text-[#f1cf78] transition-all duration-300 lg:hover:translate-x-2">
                    {link.label}
                  </Link>
                ))}
                {section.items && section.items.map(item => (
                  <div key={item.title} className="flex flex-col items-center lg:items-start group">
                    <p className="text-[0.75rem] font-bold text-[#f1eedc] tracking-tight group-hover:text-[#f1cf78] transition-colors">{item.title}</p>
                    <p style={{letterSpacing:'0.2em'}} className="text-[0.6rem] text-white/10 mt-1 font-black uppercase">{item.time}</p>
                  </div>
                ))}
                {section.content}
                {section.action}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Elite Signature Base */}
        <div className="pt-12 sm:pt-16 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-10">
             <div className="relative group">
                <div className="absolute inset-0 bg-[#c69a3a]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative w-12 h-12 rounded-full border border-white/5 flex items-center justify-center bg-black/40 backdrop-blur-md">
                   <span style={{fontFamily:"'Cormorant Garamond',serif"}} className="text-[#f1cf78] text-lg italic font-light tracking-tighter">{isFFCK ? 'FF' : 'CC'}</span>
                </div>
             </div>
             <div className="space-y-1.5">
                <p style={{letterSpacing:'0.5em'}} className="text-[0.45rem] font-black uppercase text-white/10 leading-none">© {currentYear} {config.churchName}</p>
                <p style={{letterSpacing:'0.3em'}} className="text-[0.4rem] font-bold uppercase text-white/[0.03]">Crafted for the Global Altar</p>
             </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 sm:gap-14 text-[0.45rem] font-black uppercase tracking-[0.5em] text-white/10">
            <a href="#" className="hover:text-[#c69a3a] transition-all duration-500">{isFFCK ? 'The Covenant' : 'Strategy'}</a>
            <a href="#" className="hover:text-[#c69a3a] transition-all duration-500">Privacy</a>
            <div className="h-3 w-px bg-white/[0.05] hidden lg:block" />
            <span className="text-white/5 hidden sm:inline">{isFFCK ? 'Uganda • Kidiki • Worldwide' : 'USA • Uganda • Global'}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
