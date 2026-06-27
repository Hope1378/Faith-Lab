import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'
import PremiumSocialLinks from './PremiumSocialLinks'

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
      return
    }

    const scrollY = document.body.dataset.scrollY || '0'
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.left = ''
    document.body.style.right = ''
    document.body.style.width = ''
    window.scrollTo(0, Number(scrollY))
    delete document.body.dataset.scrollY
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
        background: transparent ? 'linear-gradient(180deg, rgba(15,23,42,0.18), rgba(15,23,42,0))' : 'rgba(255,255,255,0.72)',
        backdropFilter: transparent ? 'none' : 'blur(16px)',
        WebkitBackdropFilter: transparent ? 'none' : 'blur(16px)',
        borderBottom: transparent ? 'none' : '1px solid rgba(226,232,240,0.6)',
        transition: 'background var(--transition), box-shadow var(--transition), transform var(--transition)',
      }}
    >
      <div
        className="container"
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'auto minmax(0, 1fr) auto',
          alignItems: 'center',
          gap: '1rem',
          width: '100%',
          maxWidth: 'none',
          paddingLeft: '0.9rem',
          paddingRight: '0.9rem',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: transparent ? '#fff' : 'var(--primary)',
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.15rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          <Logo size={36} color={transparent ? '#fff' : 'var(--accent)'} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span>FaithFound Lab</span>
            <span
              style={{
                marginTop: '0.2rem',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: transparent ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)',
              }}
            >
              Faith • Innovation • Community
            </span>
          </span>
        </Link>

        <div
          className="desktop-center-stack"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '0.1rem',
            minWidth: 0,
            width: '100%',
            marginLeft: '2rem',
          }}
        >
          <nav
            className="desktop-nav nav-shell"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gridTemplateRows: 'auto auto',
              alignItems: 'center',
              width: '100%',
              maxWidth: '600px',
              minWidth: 0,
              padding: '0rem 0.35rem 0rem',
              borderRadius: '999px',
              rowGap: '0',
              ...navShellStyle,
            }}
          >
            <div
              className="social-icons"
              style={{
                gridColumn: '2',
                gridRow: '1',
                justifySelf: 'end',
                display: 'flex',
                alignItems: 'center',
                gap: '0.2rem',
                marginRight: '0.35rem',
                marginTop: '0.12rem',
                marginBottom: 0,
              }}
            >
              <PremiumSocialLinks iconSize={14} style={{ gap: '0.2rem' }} />
            </div>

            <div
              className="menu-area"
              style={{
                gridColumn: '1 / -1',
                gridRow: '2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                width: '100%',
                flexWrap: 'wrap',
                paddingRight: '0.15rem',
              }}
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    position: 'relative',
                    padding: '0.1rem 0.58rem',
                    borderRadius: '999px',
                    color: location.pathname === l.to ? navLinkActiveColor : navLinkColor,
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    background:
                      location.pathname === l.to
                        ? transparent
                          ? 'rgba(255,255,255,0.12)'
                          : 'rgba(212,168,67,0.12)'
                        : 'transparent',
                    transition: 'color var(--transition), background var(--transition), transform var(--transition)',
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
                        inset: 0,
                        borderRadius: '999px',
                        border: transparent ? '1px solid rgba(255,255,255,0.16)' : '1px solid rgba(212,168,67,0.28)',
                        boxShadow: transparent ? '0 0 0 1px rgba(255,255,255,0.02) inset' : '0 8px 20px rgba(212,168,67,0.12) inset',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <Link
          to="/join"
          className="btn btn-primary nav-cta"
          style={{
            justifySelf: 'end',
            transform: 'translateX(-3.75rem)',
            padding: '0.42rem 0.82rem',
            fontSize: '0.72rem',
            borderRadius: '999px',
            border: '1px solid rgba(212,168,67,0.22)',
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          Get Started
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen((open) => !open)}
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

        {mobileOpen && (
          <nav
            className="mobile-nav"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.7rem',
              padding: '1.25rem',
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              borderBottom: '1px solid rgba(226,232,240,0.85)',
              boxShadow: '0 20px 40px rgba(15,23,42,0.12)',
              zIndex: 1001,
            }}
          >
            {links
              .filter((l) => l.to !== '/join')
              .map((l) => (
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

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.2rem', marginBottom: '0.15rem' }}>
              <PremiumSocialLinks iconSize={14} style={{ gap: '0.2rem' }} />
            </div>

            <Link
              to="/join"
              className="btn btn-primary"
              style={{ width: '100%', textAlign: 'center', boxShadow: '0 12px 24px rgba(212,168,67,0.28)' }}
            >
              Join Us
            </Link>
          </nav>
        )}
      </div>

      <style>{`
        .nav-shell {
          position: static;
          overflow: visible;
        }

        .social-icons {
          margin-bottom: 0;
        }

        .menu-area {
          margin-top: 0;
        }

        .nav-cta {
          background: rgba(212, 168, 67, 0.08) !important;
          color: var(--accent-dark) !important;
          box-shadow: none !important;
          transition: background var(--transition), color var(--transition), border-color var(--transition), transform var(--transition);
        }

        .nav-cta:hover {
          background: rgba(212, 168, 67, 0.14) !important;
          color: var(--primary) !important;
          border-color: rgba(212, 168, 67, 0.34) !important;
        }

        @media (max-width: 768px) {
          .desktop-nav,
          .desktop-center-stack {
            display: none !important;
          }

          .mobile-toggle {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .navbar .container {
            display: flex !important;
            align-items: center !important;
          }
        }
      `}</style>
    </header>
  )
}