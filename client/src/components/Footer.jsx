import { Link } from 'react-router-dom'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary)', color: 'var(--text)', marginTop: 'auto' }}>
      <div className="container section-padding">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.75fr 1fr 1fr 1fr',
            gap: '3.5rem',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <Logo size={36} color="var(--accent)" />
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.1rem' }}>
                FaithFound Lab
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Where faith sparks innovation. Empowering young people to discover their true calling and build a meaningful future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: 'var(--accent-soft)' }}>
              Explore
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Programs' },
                { to: '/innovation', label: 'Innovation' },
                { to: '/camps', label: 'Camps' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/join', label: 'Join Us' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color var(--transition)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: 'var(--accent-soft)' }}>
              Programs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Explorers (Grades 3–5)', 'Discovery Lab (Grades 6–8)', 'Leadership Lab (Grades 9–12)', 'Community Impact Projects'].map((p) => (
                <span key={p} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem', color: 'var(--accent-soft)' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <FiMail style={{ marginTop: 3, flexShrink: 0, color: 'var(--accent)' }} />
                <span>hello@faithfoundlab.org</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <FiPhone style={{ marginTop: 3, flexShrink: 0, color: 'var(--accent)' }} />
                <span>+1 (555) 000-0000</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <FiMapPin style={{ marginTop: 3, flexShrink: 0, color: 'var(--accent)' }} />
                <span>Community Center<br />Your City, State</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} FaithFound Lab. All rights reserved.
          </span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            Where faith sparks innovation.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
