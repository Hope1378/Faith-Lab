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
  const navShellStyle = transparent
    ? {
        background: 'rgba(15, 23, 42, 0.16)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        boxShadow: '0 20px 50px rgba(15, 23, 42, 0.18)',
      }
    : {
        background: 'rgba(255, 255, 255, 0.9)',
        border: '1px solid rgba(226, 232, 240, 0.85)',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
      }

  const navLinkColor = transparent ? 'rgba(255,255,255,0.9)' : 'var(--primary-light)'
  const navLinkActiveColor = transparent ? '#fff' : 'var(--primary)'

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
        transition: 'background var(--transition), box-shadow var(--transition), transform var(--transition)',
        background: transparent ? 'linear-gradient(180deg, rgba(15,23,42,0.18), rgba(15,23,42,0))' : 'rgba(255,255,255,0.72)',
        backdropFilter: transparent ? 'none' : 'blur(16px)',
        WebkitBackdropFilter: transparent ? 'none' : 'blur(16px)',
        borderBottom: transparent ? 'none' : '1px solid rgba(226,232,240,0.6)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
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
            zIndex: 2,
          }}
        >
          <Logo size={36} color={transparent ? '#fff' : 'var(--accent)'} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span>FaithFound Lab</span>
            <span
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: transparent ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)',
                marginTop: '0.2rem',
              }}
            >
              Faith • Innovation • Community
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="desktop-nav nav-shell"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.5rem 0.55rem 0.5rem 1rem',
            borderRadius: '999px',
            ...navShellStyle,
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: location.pathname === l.to ? navLinkActiveColor : navLinkColor,
                position: 'relative',
                padding: '0.75rem 0.95rem',
                borderRadius: '999px',
                transition: 'color var(--transition), background var(--transition), transform var(--transition)',
                background:
                  location.pathname === l.to
                    ? transparent
                      ? 'rgba(255,255,255,0.12)'
                      : 'rgba(212,168,67,0.12)'
                    : 'transparent',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== l.to) {
                  e.currentTarget.style.color = transparent ? '#fff' : 'var(--primary)'
                  e.currentTarget.style.background = transparent ? 'rgba(255,255,255,0.08)' : 'rgba(212,168,67,0.08)'
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== l.to) {
                  e.currentTarget.style.color = navLinkColor
                  e.currentTarget.style.background = 'transparent'
                }
              }}
            >
              {l.label}
              {location.pathname === l.to && (
                <span
                  style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '999px',
                    border: transparent ? '1px solid rgba(255,255,255,0.16)' : '1px solid rgba(212,168,67,0.28)',
                    boxShadow: transparent ? '0 0 0 1px rgba(255,255,255,0.02) inset' : '0 8px 20px rgba(212,168,67,0.12) inset',
                    pointerEvents: 'none',
                  }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/join"
            className="btn btn-primary"
            style={{
              padding: '0.78rem 1.35rem',
              fontSize: '0.83rem',
              borderRadius: '999px',
              marginLeft: '0.25rem',
              boxShadow: '0 12px 24px rgba(212,168,67,0.28)',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
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
            fontSize: '1.45rem',
            cursor: 'pointer',
            background: transparent ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.04)',
            width: '2.9rem',
            height: '2.9rem',
            borderRadius: '999px',
            border: transparent ? '1px solid rgba(255,255,255,0.16)' : '1px solid rgba(226,232,240,0.9)',
            boxShadow: transparent ? '0 8px 18px rgba(15,23,42,0.12)' : '0 8px 18px rgba(15,23,42,0.05)',
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
            background: 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.7rem',
            boxShadow: '0 20px 40px rgba(15,23,42,0.12)',
            borderBottom: '1px solid rgba(226,232,240,0.85)',
          }}
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                padding: '0.9rem 1rem',
                color: location.pathname === l.to ? 'var(--accent)' : 'var(--primary)',
                borderRadius: '0.9rem',
                background: location.pathname === l.to ? 'rgba(212,168,67,0.08)' : 'transparent',
                border: '1px solid transparent',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/join"
            className="btn btn-primary"
            style={{ marginTop: '0.35rem', textAlign: 'center', width: '100%', boxShadow: '0 12px 24px rgba(212,168,67,0.28)' }}
          >
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        .nav-shell {
          position: relative;
          overflow: hidden;
        }

        .nav-shell::before {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;
          background: linear-gradient(135deg, rgba(255,255,255,0.24), rgba(255,255,255,0.02));
          opacity: 0.7;
        }

        .nav-shell > * {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  )
}
