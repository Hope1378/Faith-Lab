import React, { useState } from 'react' // Deployment test - fix Vercel dashboard visibility
import { motion, AnimatePresence } from 'framer-motion'
import { ccfgmSiteConfig } from '../utils/ccfgmConstants'
import './About.css'

const galleryItems = [
  { src: '/images/300.jpg', title: 'Community Impact', description: 'Reaching hearts and transforming lives in Kidiki.' },
  { src: '/images/g11.jpeg', title: 'Leadership Heart', description: 'Bishop Joel Kikomeko and ministry leaders.' },
  { src: '/images/c5.jpg', title: 'Kidiki Outreach', description: 'Impacting lives in the heart of Uganda.' },
  { src: '/images/m11.jpg', title: 'Global Mission', description: 'Reaching nations with the gospel of Christ.' },
  { src: '/images/outreach6.jpg', title: 'Community Love', description: 'Building hope through tangible acts of service.' },
  { src: '/images/p3.jpg', title: 'Generational Faith', description: 'Passing the torch of faith to the next generation.' },
]

const CCFGMAbout = () => {
  const [activeImage, setActiveImage] = useState(galleryItems[0])

  return (
    <div className="about-page !bg-[#0a0806]" style={{backgroundColor: '#0a0806'}}>
      {/* Ultra-Premium Cinematic Hero */}
      <section className="premium-hero-about relative isolate min-h-[580px] sm:h-[80vh] sm:min-h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/ch1.jpeg" 
            alt="Church Interior" 
            className="w-full h-full object-cover object-center scale-105 brightness-[0.5] sm:brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-transparent to-transparent opacity-90" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="hero-glass-card backdrop-blur-2xl p-4 sm:p-6 md:p-12 lg:p-20 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
            }}
          >
            {/* Atmospheric Detail */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#c69a3a]/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#c69a3a]/5 rounded-full blur-[100px]" />

            {/* Premium Eyebrow */}
            <div className="flex items-center justify-center gap-4 mb-2 sm:mb-10">
              <span className="h-px w-10 bg-[#f1cf78]/30" />
              <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#f1cf78] tracking-[0.45em] uppercase text-[0.6rem] sm:text-[0.7rem] gold-text-shimmer">
                The Eternal Foundation
              </p>
              <span className="h-px w-10 bg-[#f1cf78]/30" />
            </div>

            <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300}} className="text-[1.8rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7.5rem] mb-2 sm:mb-8 lg:mb-12 leading-[0.88] tracking-tighter text-white">
              Built on the <br />
              <span className="italic text-[#f1cf78] font-medium">Sacred Rock.</span>
            </h1>
            
            <div className="mx-auto mb-3 sm:mb-12 h-px w-32 bg-gradient-to-r from-transparent via-[#c69a3a] to-transparent" />
            
            <p style={{fontFamily:"'Cormorant Garamond',serif"}} className="text-sm sm:text-xl md:text-2xl lg:text-4xl text-white/60 leading-relaxed font-light max-w-4xl mx-auto italic mb-6 sm:mb-12">
              "{ccfgmSiteConfig.tagline}"
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 sm:gap-4 opacity-40 z-20">
          <span style={{letterSpacing:'0.6em'}} className="text-[0.45rem] sm:text-[0.55rem] uppercase text-white font-black">Begin The Journey</span>
          <div className="w-[1px] h-4 sm:h-16 bg-gradient-to-b from-white via-white/40 to-transparent" />
        </div>
      </section>

      {/* Main Content Shell */}
      <div className="relative bg-[#faf8f5] text-midnight overflow-hidden">
        {/* Atmospheric Layering */}
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 10% 20%, rgba(198,154,58,0.08), transparent 40%), radial-gradient(circle at 90% 80%, rgba(198,154,58,0.06), transparent 40%)'}} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-24" style={{ paddingTop: '2rem' }}>
          
          {/* CINEMATIC NARRATIVE FLOW */}
          <div className="space-y-12 sm:space-y-20 lg:space-y-32 py-4 sm:py-12 lg:py-20">
            
            {/* Part 1: Legacy & Mission */}
            <section className="px-4 sm:px-0">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center max-w-6xl mx-auto">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="order-2 lg:order-1 space-y-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-px w-12 bg-[#c69a3a]/30" />
                    <span style={{fontFamily:"'Manrope',sans-serif",fontWeight:800,fontSize:'0.65rem',letterSpacing:'0.5em',textTransform:'uppercase',color:'#c69a3a'}}>Our Foundation</span>
                  </div>
                  
                  <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontWeight:700,fontSize:'clamp(2.5rem, 6vw, 4.5rem)',lineHeight:0.9,letterSpacing:'-0.03em'}} className="text-midnight">
                    A Global Vision for <br />
                    <span className="italic text-[#c69a3a]">Kingdom Impact.</span>
                  </h2>

                  <div style={{fontFamily:"'Manrope',sans-serif"}} className="space-y-6 text-base sm:text-xl text-midnight/70 leading-relaxed font-medium">
                    <p className="first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-serif first-letter:text-[#c69a3a] first-letter:float-left first-letter:mr-3 first-letter:mt-1">{ccfgmSiteConfig.description}</p>
                    <p>Established with a divine mandate to reach the nations, we are a family unified by the love of Christ and the power of the Gospel.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="order-1 lg:order-2 relative"
                >
                   {/* NO-CROP IMAGE CONTAINER */}
                   <div className="rounded-[1rem] sm:rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-2 sm:border-4 lg:border-8 border-white bg-black/5">
                      <img src="/images/300.jpg" alt="Ministry Legacy" className="w-full h-auto block grayscale-[0.1] hover:grayscale-0 transition-all duration-1000" />
                   </div>
                   {/* Elite Foundation Badge */}
                   <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 lg:-bottom-10 lg:-left-10 bg-midnight text-white p-6 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl border border-white/10 hidden sm:block">
                      <div className="flex flex-col items-center gap-2">
                        <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] text-[0.5rem] sm:text-[0.65rem] uppercase tracking-[0.4em] gold-text-shimmer">
                           Est.
                        </p>
                        <p style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-3xl sm:text-4xl lg:text-5xl leading-none italic">
                          2024
                        </p>
                      </div>
                   </div>
                </motion.div>
              </div>
            </section>

            {/* Part 2: Captured Glory (Premium Redesign) */}
            <section className="gallery-section relative bg-[#0a0806] py-12 sm:py-20 lg:py-32 px-4 sm:px-6 rounded-[2rem] sm:rounded-[4rem] overflow-hidden shadow-2xl border border-white/5">
              {/* Atmospheric Background Element */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage:'radial-gradient(circle at 2px 2px, #f1cf78 1px, transparent 0)', backgroundSize:'40px 40px'}} />
              
              <div className="max-w-3xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-20">
                   <motion.h3 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} 
                     className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-none mb-6"
                   >
                     Captured <span className="italic text-[#f1cf78]">Glory.</span>
                   </motion.h3>
                   <div className="flex items-center justify-center gap-4">
                      <span className="h-px w-8 sm:w-12 bg-[#f1cf78]/20" />
                      <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#f1cf78]/40 text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.5em]">The Visual Archive</p>
                      <span className="h-px w-8 sm:w-12 bg-[#f1cf78]/20" />
                   </div>
                </div>

                {/* Main Cinematic Display */}
                <div className="relative mb-8 sm:mb-20">
                  <div className="relative min-h-[300px] sm:aspect-video w-full rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 bg-black group">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImage.src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        {/* Dynamic Background Blur */}
                        <img 
                          src={activeImage.src} 
                          alt="" 
                          className="absolute inset-0 w-full h-full object-cover scale-110 blur-[40px] opacity-30 pointer-events-none" 
                        />
                        
                        {/* Primary Image Display */}
                        <img 
                          src={activeImage.src} 
                          alt={activeImage.title} 
                          className="relative z-10 w-full h-auto max-h-[60vh] sm:max-h-full object-contain brightness-[0.95] contrast-[1.05]"
                        />
                        
                        {/* Elite Caption Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-12 md:p-16 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-20">
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                          >
                            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                              <span className="h-px w-4 sm:w-6 bg-[#f1cf78]" />
                              <h4 style={{fontFamily:"'Cormorant Garamond',serif"}} className="text-xl sm:text-4xl md:text-5xl lg:text-6xl text-white italic font-light leading-tight">
                                {activeImage.title}
                              </h4>
                            </div>
                            <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#f1cf78] text-[0.55rem] sm:text-[0.8rem] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black opacity-80 pl-6 sm:pl-9">
                              {activeImage.description}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Unified Premium Thumbnails Row */}
                <div className="relative px-1 sm:px-2">
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 sm:gap-4 rounded-[1.25rem] sm:rounded-[2rem] border border-white/10 bg-white/[0.035] p-2.5 sm:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    {galleryItems.map((item) => (
                      <button
                        key={item.src}
                        onClick={() => setActiveImage(item)}
                        className={`relative group rounded-md overflow-hidden border transition-all duration-500 w-full aspect-square bg-[#120d08] shadow-[0_12px_30px_rgba(0,0,0,0.35)]
                          ${activeImage.src === item.src 
                            ? 'border-[#f1cf78] scale-[1.03] shadow-[0_0_0_1px_rgba(241,207,120,0.45),0_18px_45px_rgba(241,207,120,0.18)] grayscale-0 opacity-100' 
                            : 'border-white/10 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 hover:border-[#f1cf78]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)]'}`}
                      >
                        <img src={item.src} alt="View" className="w-full h-full object-contain sm:object-cover p-1 sm:p-0 transition-transform duration-700 group-hover:scale-105" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10 opacity-80" />
                        {activeImage.src === item.src && (
                          <div className="absolute inset-0 ring-2 ring-inset ring-[#f1cf78]/70" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CCFGMAbout
