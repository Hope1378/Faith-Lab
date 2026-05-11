import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import ScriptureMarquee from '../common/ScriptureMarquee'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)
  const heroSlides = [
    {
      image: '/images/s2.jpg',
      fit: 'cover',
      position: 'center 0%',
      eyebrow: 'Come Expectant',
      title: 'Encounter God through worship, the Word, and prayer.',
      description: 'Every gathering is an invitation to hear biblical truth clearly, be renewed in hope, and draw closer to the presence of God.'
    }
  ]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 12000)

    return () => window.clearInterval(intervalId)
  }, [heroSlides.length])

  const currentSlide = heroSlides[activeSlide]

  return (
    <section
      ref={heroRef}
      className="hero-shell relative isolate overflow-hidden h-[calc(100svh-var(--navbar-offset,135px))] min-h-[500px] max-md:h-[calc(100svh-var(--navbar-offset,80px)-100px)] max-md:min-h-[320px] bg-midnight"
    >
      <div className="hero-top-band absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="hero-video-shell absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={currentSlide.title}
            className={`hero-image absolute inset-0 h-full w-full object-contain sm:object-cover`}
            style={{ objectPosition: currentSlide.position }}
            fetchPriority="high"
            decoding="async"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: 1, 
              scale: typeof window !== 'undefined' && window.innerWidth > 768 ? 1.1 : 1 
            }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ 
              opacity: { duration: 1.5, ease: 'easeInOut' },
              scale: { duration: 12, ease: 'linear' } 
            }}
          />
        </AnimatePresence>
        <div className="hero-overlay absolute inset-0" />
        <div className="hero-vignette absolute inset-0" />
        
        {/* Desktop-Only Cinematic Orbs */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              x: [0, 100, 0], 
              y: [0, -50, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hero-orb hero-orb-left" 
          />
          <motion.div 
            animate={{ 
              x: [0, -80, 0], 
              y: [0, 100, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="hero-orb hero-orb-right" 
          />
        </div>
      </div>

      <div className="hero-layout relative z-[2] mx-auto flex max-w-7xl h-full items-center justify-center lg:justify-between sm:pt-40 px-6 lg:px-12">
        {/* Left Card: Sunday Encounter */}
        <div className="hero-copy hero-copy--minimal max-w-md text-white md:-translate-x-12 lg:translate-x-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.title}
              className="hero-slide-caption hero-slide-caption--minimal !p-4 sm:!p-7 !rounded-[1.5rem] border-gold/10"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* ── Premium Eyebrow ── */}
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                <span className="h-px w-4 sm:w-6 bg-[#f1cf78]/50" />
                <span className="w-1 h-1 rounded-full bg-[#f1cf78]" />
                <span className="text-[0.42rem] sm:text-[0.58rem] font-black text-gold uppercase tracking-[0.28em]">
                  Sunday Worship
                </span>
                <span className="w-1 h-1 rounded-full bg-[#f1cf78]" />
                <span className="h-px w-4 sm:w-6 bg-[#f1cf78]/50" />
              </div>

              {/* ── Premium Title ── */}
              <h1
                className="font-black leading-[1.08] tracking-[-0.03em] text-white text-left
                           text-[1.25rem] sm:text-2xl
                           drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] mb-2 sm:mb-3"
              >
                Join Our Sanctuary
              </h1>

              {/* ── Gold Rule ── */}
              <div
                className="mb-2 sm:mb-4 h-px w-10 sm:w-14"
                style={{ background: 'linear-gradient(90deg, #c69a3a, transparent)' }}
              />

              {/* ── Description + Buttons ── */}
              <div className="space-y-2 sm:space-y-5">
                <p className="font-serif italic text-[0.65rem] sm:text-base text-white/85 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] line-clamp-3 sm:line-clamp-none">
                  {currentSlide.description}
                </p>

                <div className="flex items-center gap-2 sm:gap-4 pt-1 sm:pt-2">
                  {/* Primary — gold gradient */}
                  <Link
                    to="/ministries/ffck/about"
                    className="group inline-flex items-center gap-1.5 whitespace-nowrap
                               px-3.5 sm:px-8 py-2 sm:py-3.5
                               rounded-full font-black uppercase tracking-[0.1em]
                               text-[0.55rem] sm:text-[0.72rem]
                               text-midnight
                               transition-all duration-300
                               shadow-[0_6px_22px_rgba(198,154,58,0.45)]
                               hover:shadow-[0_10px_30px_rgba(198,154,58,0.65)]
                               hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)' }}
                  >
                    Our Vision
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  {/* Secondary — ghost outline */}
                  <Link
                    to="/ministries/ffck/contact"
                    className="group inline-flex items-center gap-1.5 whitespace-nowrap
                               px-3.5 sm:px-8 py-2 sm:py-3.5
                               rounded-full font-black uppercase tracking-[0.1em]
                               text-[0.55rem] sm:text-[0.72rem]
                               text-white border border-white/30
                               bg-white/5 backdrop-blur-md
                               transition-all duration-300
                               hover:bg-white hover:text-midnight hover:border-white
                               hover:shadow-[0_6px_22px_rgba(255,255,255,0.18)]
                               hover:-translate-y-0.5"
                  >
                    Join Us
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Card: Outreach Vision — desktop only */}
        <div className="hidden lg:flex flex-col gap-4 w-80">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hero-slide-caption--minimal !w-full !max-w-none !p-7 !rounded-[1.5rem] border-gold/20 relative group"
          >
            {/* ── Premium Eyebrow ── */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-5 bg-[#f1cf78]/50" />
              <span className="w-1 h-1 rounded-full bg-[#f1cf78]" />
              <span className="text-[0.55rem] font-black text-gold uppercase tracking-[0.28em]">
                Current Mission
              </span>
              <span className="w-1 h-1 rounded-full bg-[#f1cf78]" />
              <span className="h-px w-5 bg-[#f1cf78]/50" />
            </div>

            {/* ── Premium Title ── */}
            <h3
              className="font-black leading-[1.08] tracking-[-0.03em] text-white text-left text-xl
                         drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] mb-2"
            >
              Kidiki{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(95deg,#c69a3a 0%,#f1cf78 50%,#d4a93c 100%)' }}
              >
                School Project
              </span>
            </h3>

            {/* ── Gold Rule ── */}
            <div
              className="mb-4 h-px w-12"
              style={{ background: 'linear-gradient(90deg, #c69a3a, transparent)' }}
            />

            {/* ── Description ── */}
            <p className="font-serif italic text-[0.72rem] text-white/80 mb-6 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              Building a center of academic and spiritual excellence for the children of Kidiki.
            </p>

            {/* ── Premium CTA ── */}
            <Link
              to="/ministries/ffck/contact"
              className="group inline-flex items-center justify-center gap-2 w-full
                         py-3.5 rounded-xl font-black uppercase tracking-[0.12em]
                         text-[0.65rem] text-midnight
                         transition-all duration-300
                         shadow-[0_6px_22px_rgba(198,154,58,0.45)]
                         hover:shadow-[0_10px_30px_rgba(198,154,58,0.65)]
                         hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)' }}
            >
              Partner With Us
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
