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

            {/* Part 2: Captured Glory (Restored & Optimized) */}
            <section className="gallery-section relative bg-midnight py-8 sm:py-16 lg:py-32 px-4 sm:px-12 rounded-[2rem] sm:rounded-[5rem] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage:'radial-gradient(circle at 2px 2px, #f1cf78 1px, transparent 0)', backgroundSize:'60px 60px'}} />
              
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-16 lg:mb-24">
                   <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-white tracking-tighter leading-none mb-4 sm:mb-6">
                     Captured <span className="italic text-[#f1cf78]">Glory.</span>
                   </h3>
                   <div className="flex items-center justify-center gap-4">
                      <span className="h-px w-12 bg-white/10" />
                      <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-white/40 text-[0.65rem] uppercase tracking-[0.5em]">The Visual Archive</p>
                      <span className="h-px w-12 bg-white/10" />
                   </div>
                </div>

                <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-12 items-start">
                  {/* Main Gallery View - NO CROP */}
                  <div className="relative group overflow-hidden rounded-[1.5rem] lg:rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.4)] bg-[#0a0806] border border-white/5 w-full">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImage.src}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                      >
                         <div className="relative w-full">
                           <img 
                             src={activeImage.src} 
                             alt={activeImage.title} 
                             className="w-full h-auto block brightness-[0.9] contrast-[1.1]"
                           />
                         </div>
                         
                         {/* Integrated Caption Row */}
                         <div className="p-6 sm:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                            {activeImage.title && (
                              <div className="flex items-center gap-3 mb-2">
                                <span className="h-px w-4 bg-[#f1cf78]/50" />
                                <h4 style={{fontFamily:"'Cormorant Garamond',serif"}} className="text-xl sm:text-3xl lg:text-5xl text-white italic font-light">
                                  {activeImage.title}
                                </h4>
                              </div>
                            )}
                            <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#f1cf78]/70 text-[10px] sm:text-[0.7rem] uppercase tracking-[0.25em] font-black">
                              {activeImage.description}
                            </p>
                         </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* NO-CROP Thumbnails Grid */}
                  <div className="flex flex-col gap-4 lg:gap-6">
                    <div className="gallery-thumbnails grid grid-cols-2 gap-3 lg:gap-4">
                      {galleryItems.slice(0, 4).map((item) => (
                        <button
                          key={item.src}
                          onClick={() => setActiveImage(item)}
                          className={`relative rounded-[0.8rem] sm:rounded-[1.2rem] overflow-hidden border-2 transition-all duration-500 bg-black/40 aspect-video
                            ${activeImage.src === item.src ? 'border-[#c69a3a] shadow-lg opacity-100 grayscale-0' : 'border-transparent opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`}
                        >
                          <img src={item.src} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                    
                    {/* Remaining thumbnails in a row */}
                    <div className="gallery-scroll-row flex gap-3 lg:gap-4 overflow-x-auto scrollbar-hide">
                      {galleryItems.slice(4).map((item) => (
                        <button
                          key={item.src}
                          onClick={() => setActiveImage(item)}
                          className={`relative flex-shrink-0 rounded-[0.8rem] sm:rounded-[1.2rem] overflow-hidden border-2 transition-all duration-500 bg-black/40 w-24 h-16 sm:w-32 sm:h-20 lg:w-28 lg:h-20
                            ${activeImage.src === item.src ? 'border-[#c69a3a] shadow-lg opacity-100 grayscale-0' : 'border-transparent opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`}
                        >
                          <img src={item.src} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
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
