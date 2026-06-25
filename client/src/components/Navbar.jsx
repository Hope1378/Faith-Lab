import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/innovation', label: 'Innovation' },
  { to: '/camps', label: 'Camps' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/join', label: 'Join Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      document.body.dataset.scrollY = String(scrollY)
    } else {
      const scrollY = document.body.dataset.scrollY || '0'
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      window.scrollTo(0, Number(scrollY))
      delete document.body.dataset.scrollY
    }
    return () => {
      const scrollY = document.body.dataset.scrollY
      if (scrollY) {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''
        window.scrollTo(0, Number(scrollY))
        delete document.body.dataset.scrollY
      }
    }
  }, [mobileOpen])

  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <header
      className="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--navbar-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'background var(--transition), box-shadow var(--transition)',
        background: transparent ? 'transparent' : 'rgba(255,255,255,0.92)',
        backdropFilter: transparent ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: transparent ? 'none' : 'blur(12px)',
        boxShadow: transparent ? 'none' : 'var(--shadow)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontWeight: 700,
            fontSize: '1.15rem',
            color: transparent ? '#fff' : 'var(--primary)',
            fontFamily: "'Playfair Display', serif",
            letterSpacing: '-0.02em',
          }}
        >
          <Logo size={36} color={transparent ? '#fff' : 'var(--accent)'} />
          FaithFound Lab
        </Link>

        {/* Desktop nav */}
        <nav
          className="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: transparent ? 'rgba(255,255,255,0.85)' : 'var(--primary)',
                position: 'relative',
                paddingBottom: '0.25rem',
                transition: 'color var(--transition)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = transparent ? '#fff' : 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = transparent ? 'rgba(255,255,255,0.85)' : 'var(--primary)'
              }}
            >
              {l.label}
              {location.pathname === l.to && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 20,
                    height: 2,
                    background: 'var(--accent)',
                    borderRadius: 1,
                  }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/join"
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            color: transparent ? '#fff' : 'var(--primary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            background: 'none',
          }}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div
          className="mobile-nav"
          style={{
            position: 'absolute',
            top: 'var(--navbar-height)',
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(12px)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.75rem 0',
                color: location.pathname === l.to ? 'var(--accent)' : 'var(--primary)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/join" className="btn btn-primary" style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  )
}
