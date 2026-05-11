import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'
import { actionNavigation, primaryNavigation, serviceTimes, siteConfig } from '../../utils/constants'
import { FaGlobeAmericas, FaPlay, FaUserShield, FaHandHoldingHeart } from 'react-icons/fa'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const desktopActions = actionNavigation.filter((item) => item.to !== '/admin')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const updateOffset = () => {
      if (!navRef.current) {
        return
      }

      const rect = navRef.current.getBoundingClientRect()
      const nextOffset = Math.ceil(rect.top + rect.height)
      document.documentElement.style.setProperty('--navbar-offset', `${nextOffset}px`)
    }

    updateOffset()

    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(updateOffset)
    if (resizeObserver && navRef.current) {
      resizeObserver.observe(navRef.current)
    }

    window.addEventListener('resize', updateOffset)

    return () => {
      window.removeEventListener('resize', updateOffset)
      resizeObserver?.disconnect()
    }
  }, [scrolled])

  const handleLinkClick = (to) => {
    if (window.location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`navbar-shell navbar-shell--ffck fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-1' : 'py-3'}`}
    >
      {/* Cinematic Background Layer */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-midnight/95 backdrop-blur-2xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#c69a3a]/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-[94rem] px-4 sm:px-6 lg:px-10 relative z-10">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'gap-4' : 'gap-8'}`}>
          
          {/* Brand Identity Section */}
          <div className="flex items-center gap-6">
            <Link 
              to="/ministries/ffck" 
              onClick={() => handleLinkClick('/ministries/ffck')}
              className="navbar-brand-ffck group flex items-center gap-4 py-1"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-[#c69a3a]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="/images/ffclogo.png" 
                  alt="FFCK" 
                  className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[0.65rem] sm:text-[0.75rem] font-black uppercase tracking-[0.5em] text-[#c69a3a] leading-none mb-2.5 drop-shadow-2xl">
                  Faith Family Church
                </h1>
                <div className="flex flex-col gap-[3px]">
                  {/* Location stamp — luxury single line */}
                  <p
                    className="text-white/90 leading-none whitespace-nowrap"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 700,
                      fontSize: 'clamp(0.52rem, 1.6vw, 0.68rem)',
                      letterSpacing: '0.32em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ color: '#f1cf78' }}>Kidiki</span>
                    <span style={{ color: 'rgba(255,255,255,0.25)', margin: '0 0.3em' }}>·</span>
                    <span style={{ color: 'rgba(255,255,255,0.55)' }}>Kamuli</span>
                    <span style={{ color: 'rgba(255,255,255,0.25)', margin: '0 0.3em' }}>·</span>
                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>Uganda</span>
                  </p>
                  {/* Hairline gold rule */}
                  <div
                    className="h-px"
                    style={{ background: 'linear-gradient(90deg, #c69a3a 0%, rgba(198,154,58,0.3) 60%, transparent 100%)', width: '100%' }}
                  />
                </div>
              </div>
            </Link>

            {/* Floating Status Chips (Desktop) */}
            <div className="hidden 2xl:flex items-center gap-3">
              <div className="h-10 w-px bg-white/10" />
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c69a3a] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c69a3a]"></span>
                </div>
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/70">Global Unity</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#c69a3a]/10 border border-[#c69a3a]/20 backdrop-blur-md">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#c69a3a]">Sunday {serviceTimes[0]?.time.split(' - ')[0]}</span>
              </div>
            </div>
          </div>

          {/* Primary Navigation Hub */}
          <nav 
            ref={navRef}
            className="navbar-primary-ffck hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-xl shadow-2xl"
          >
            {primaryNavigation.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.label} className="relative group">
                    {/* Dropdown trigger — matches pill style */}
                    <button
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/5"
                      style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}
                    >
                      {item.label}
                      <svg className="w-3 h-3 opacity-40 group-hover:opacity-80 group-hover:rotate-180 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Premium Dropdown Panel */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                      {/* Notch */}
                      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#1a140f] border-l border-t border-white/10" />
                      <div className="relative bg-[#1a140f] border border-white/10 rounded-2xl overflow-hidden min-w-[190px] shadow-[0_32px_64px_rgba(0,0,0,0.7)]">
                        {/* Top gold accent line */}
                        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(198,154,58,0.5), transparent)' }} />
                        <div className="p-1.5">
                          {item.dropdown.map((sub, i) => (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              onClick={() => handleLinkClick(sub.to)}
                              className="group/item flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 hover:bg-white/5"
                            >
                              {/* Gold dot indicator */}
                              <span className="w-1 h-1 rounded-full bg-[#c69a3a]/40 group-hover/item:bg-[#c69a3a] transition-colors flex-shrink-0" />
                              <span
                                className="transition-colors duration-200 group-hover/item:text-[#f1cf78]"
                                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)' }}
                              >
                                {sub.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                        {/* Bottom gold accent line */}
                        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(198,154,58,0.3), transparent)' }} />
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/ministries/ffck'}
                  onClick={() => handleLinkClick(item.to)}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full transition-all duration-200
                     ${isActive
                       ? 'shadow-[0_4px_16px_rgba(198,154,58,0.35)]'
                       : 'hover:bg-white/5'
                     }`
                  }
                  style={({ isActive }) => ({
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.68rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: isActive ? 'linear-gradient(135deg, #d4a93c 0%, #f1cf78 55%, #c69a3a 100%)' : undefined,
                    WebkitBackgroundClip: isActive ? 'text' : undefined,
                    backgroundClip: isActive ? 'text' : undefined,
                    color: isActive ? 'transparent' : 'rgba(255,255,255,0.6)',
                  })}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          {/* Action Center */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex items-center gap-4">
              {desktopActions.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="bg-[#c69a3a] text-midnight font-black px-8 py-3.5 rounded-full text-[0.72rem] uppercase tracking-[0.25em] hover:bg-white hover:scale-105 transition-all shadow-xl shadow-[#c69a3a]/10"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 group"
            >
              <span className="w-6 h-0.5 bg-white rounded-full group-hover:w-4 transition-all" />
              <span className="w-4 h-0.5 bg-white rounded-full group-hover:w-6 transition-all" />
              <span className="w-5 h-0.5 bg-white rounded-full group-hover:w-3 transition-all" />
            </button>
          </div>
        </div>
      </div>
      
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} primaryNav={primaryNavigation} actionNav={actionNavigation} />
    </header>
  )
}
