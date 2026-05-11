import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { actionNavigation, primaryNavigation } from '../../utils/constants'
import { FaTimes } from 'react-icons/fa'
import './MobileMenu.css'

export default function MobileMenu({ isOpen, onClose, primaryNav, actionNav }) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.setProperty('overflow', 'hidden', 'important')
      document.documentElement.style.setProperty('overflow', 'hidden', 'important')
    } else {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.documentElement.style.overflow = 'unset'
    }
  }, [isOpen])

  const navToUse = primaryNav || primaryNavigation
  const actionToUse = actionNav || actionNavigation
  const allLinks = [...navToUse, ...actionToUse]

  const finalMobileItems = allLinks.reduce((acc, item) => {
    if (item.dropdown) {
      acc.push({ ...item, isDropdownHeader: true, to: '#' })
      item.dropdown.forEach(sub => {
        acc.push({ ...sub, isSubItem: true })
      })
    } else {
      acc.push(item)
    }
    return acc
  }, []).filter(item => item.label !== 'Admin')

  const handleLinkClick = (to) => {
    if (window.location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    onClose()
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Blurred backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-midnight/70 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* ── Compact Premium Panel — height wraps to content ── */}
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="absolute right-0 top-0 w-[60%] max-w-[15rem] h-auto max-h-[85svh]
                       flex flex-col overflow-hidden rounded-bl-2xl
                       bg-[#0e0c09] border-l border-b border-white/10
                       shadow-[0_24px_60px_rgba(0,0,0,0.7)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Aurora glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#c69a3a]/8 blur-3xl" />
              <div className="absolute bottom-20 -left-8 w-28 h-28 rounded-full bg-[#c69a3a]/5 blur-2xl" />
            </div>

            {/* ── Header ── */}
            <div className="relative z-10 flex items-center justify-between px-4 pt-4 pb-3 border-b border-white/8">
              <div className="flex flex-col gap-0.5">
                {/* Gold eyebrow */}
                <div className="flex items-center gap-1.5">
                  <span className="h-px w-3" style={{ background: '#c69a3a' }} />
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 800,
                      fontSize: '0.42rem',
                      letterSpacing: '0.35em',
                      textTransform: 'uppercase',
                      color: '#c69a3a'
                    }}
                  >Navigation</span>
                </div>
                {/* Title */}
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    letterSpacing: '-0.02em',
                    color: 'rgba(255,255,255,0.92)',
                    lineHeight: 1
                  }}
                >
                  Explore Ministry
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-white/5 border border-white/10
                           flex items-center justify-center text-white/40
                           hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <FaTimes style={{ fontSize: '0.55rem' }} />
              </button>
            </div>

            {/* ── Navigation Links ── */}
            <div className="relative z-10 flex-1 overflow-y-auto py-2">
              {finalMobileItems.map((item, idx) => {
                if (item.isDropdownHeader) {
                  return (
                    <div key={`header-${idx}`} className="px-4 pt-3 pb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="h-px w-3 bg-[#c69a3a]/50" />
                        <span
                          style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 800,
                            fontSize: '0.42rem',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: 'rgba(198,154,58,0.6)'
                          }}
                        >
                          {item.label}
                        </span>
                      </div>
                    </div>
                  )
                }

                return (
                  <motion.div
                    key={`${item.label}-${item.to}`}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + idx * 0.025 }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={() => handleLinkClick(item.to)}
                      className={({ isActive }) =>
                        `group flex items-center gap-2.5 transition-all duration-200
                         ${item.isSubItem ? 'pl-7 pr-4 py-2' : 'px-4 py-2'}
                         ${isActive ? 'border-r-2 border-[#c69a3a]' : 'border-r-2 border-transparent hover:bg-white/4'}`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {/* Gold dot */}
                          <span
                            className="flex-shrink-0 w-1 h-1 rounded-full transition-colors duration-200"
                            style={{ background: isActive ? '#f1cf78' : 'rgba(255,255,255,0.15)' }}
                          />
                          <span
                            style={{
                              fontFamily: "'Manrope', sans-serif",
                              fontWeight: item.isSubItem ? 600 : 800,
                              fontSize: item.isSubItem ? '0.6rem' : '0.68rem',
                              letterSpacing: item.isSubItem ? '0.06em' : '0.1em',
                              textTransform: 'uppercase',
                              color: isActive
                                ? 'transparent'
                                : item.isSubItem
                                  ? 'rgba(255,255,255,0.45)'
                                  : 'rgba(255,255,255,0.65)',
                              backgroundImage: isActive
                                ? 'linear-gradient(135deg, #d4a93c 0%, #f1cf78 55%, #c69a3a 100%)'
                                : undefined,
                              WebkitBackgroundClip: isActive ? 'text' : undefined,
                              backgroundClip: isActive ? 'text' : undefined,
                              transition: 'color 0.2s'
                            }}
                          >
                            {item.label}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                )
              })}
            </div>

            {/* ── Footer CTA ── */}
            <div className="relative z-10 px-4 py-4 border-t border-white/6">
              <Link
                to="/ministries/ffck/give"
                onClick={() => handleLinkClick('/ministries/ffck/give')}
                className="group flex items-center justify-center gap-2 w-full
                           py-3 rounded-xl font-black uppercase tracking-[0.14em]
                           text-[0.6rem] text-midnight
                           transition-all duration-300
                           shadow-[0_6px_20px_rgba(198,154,58,0.35)]
                           hover:shadow-[0_8px_28px_rgba(198,154,58,0.55)]
                           hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)' }}
              >
                Support Ministry
                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
