import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { FiArrowRight, FiUsers, FiTrendingUp, FiHeart, FiTarget, FiZap } from 'react-icons/fi'
import AuroraBackground from '../components/AuroraBackground'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY
      el.style.transform = `translateY(${y * 0.3}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>FaithFound Lab — Where Faith Sparks Innovation</title>
        <meta name="description" content="FaithFound Lab empowers young people to discover their true calling, build resilience, and prepare for a meaningful future through faith-centered mentorship and innovative career exploration." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--primary)' }}>
        <AuroraBackground />
        <div
          ref={heroRef}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.35,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary) 0%, transparent 60%)' }} />
        {/* Floating accent shapes */}
        <div style={{ position: 'absolute', top: '15%', right: '12%', width: 80, height: 80, borderRadius: '50%', border: '1.5px solid rgba(212,168,67,0.25)', animation: 'float1 10s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '8%', width: 40, height: 40, borderRadius: '50%', background: 'rgba(212,168,67,0.08)', animation: 'float2 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '40%', right: '25%', width: 12, height: 12, borderRadius: '50%', background: 'var(--accent)', opacity: 0.4, animation: 'float3 6s ease-in-out infinite' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '6rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: 720 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--accent)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ width: 32, height: 1, background: 'var(--accent)' }} />
              Welcome to FaithFound Lab
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Where Faith Sparks{' '}
              <span className="gradient-text">Innovation</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.7,
                maxWidth: 560,
                marginBottom: '2.5rem',
              }}
            >
              Empowering young people to discover their true calling, build resilience, and prepare for a meaningful future through faith-centered mentorship and innovative career exploration.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/join" className="btn btn-primary">
                Join the Lab <FiArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding dot-pattern" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3.5rem' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Our Foundation
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginTop: '0.75rem', fontWeight: 700 }}>
                Built on Purpose
              </h2>
              <div className="divider-accent" style={{ margin: '1rem auto 0' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem',
              }}
              className="stagger-children"
            >
              {[
                { icon: <FiUsers size={22} />, title: 'Mentorship', desc: 'Guided growth for every student through one-on-one and group mentorship.' },
                { icon: <FiTarget size={22} />, title: 'Leadership', desc: 'Leading with faith and integrity to influence communities positively.' },
                { icon: <FiTrendingUp size={22} />, title: 'Careers', desc: 'Exploring future paths together with real-world career guidance.' },
                { icon: <FiZap size={22} />, title: 'Innovation', desc: 'Fresh ideas and disruptive thinking for community impact.' },
              ].map((p, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    background: '#fff',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    border: '1px solid var(--border)',
                    transition: 'transform var(--transition), box-shadow var(--transition), opacity var(--transition)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(15,23,42,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '4rem',
                alignItems: 'center',
              }}
              className="about-grid"
            >
              <div>
                <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Our Heart & Purpose
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginTop: '0.75rem', marginBottom: '1.25rem', fontWeight: 700 }}>
                  Vision & Mission
                </h2>
                <div className="divider-accent" style={{ marginBottom: '1.5rem' }} />
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                  Vision
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, paddingLeft: '0.75rem' }}>
                  To nurture a generation of confident, purpose-driven young leaders who transform their communities through character, creativity, and service.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
                  Mission
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, paddingLeft: '0.75rem' }}>
                  FaithFound Lab empowers young people through mentorship, leadership development, and entrepreneurial thinking, helping them discover purpose, build confidence, and create positive change in their communities.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-secondary">
                  Read Our Story <FiArrowRight />
                </Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                  alt="Students collaborating"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  left: '-1.5rem',
                  background: 'var(--accent)',
                  color: 'var(--primary)',
                  padding: '1.25rem 1.75rem',
                  borderRadius: 'var(--radius)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  boxShadow: 'var(--shadow-lg)',
                }}
                className="stats-float"
              >
                Serving Grades 3–12
              </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core focus */}
      <section className="section-padding" style={{ background: 'var(--surface-dark)', color: '#fff' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3.5rem' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Core Focus Areas
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginTop: '0.75rem', fontWeight: 700 }}>
                What We Cultivate
              </h2>
              <div className="divider-accent" style={{ margin: '1rem auto 0', background: 'linear-gradient(90deg, var(--accent), var(--accent-soft))' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              { title: 'Confidence', desc: 'Encouraging belief in their abilities and voice.' },
              { title: 'Leadership', desc: 'Developing responsible leaders who influence communities positively.' },
              { title: 'Innovation', desc: 'Teaching creativity, problem-solving, and entrepreneurship.' },
              { title: 'Community', desc: 'Building supportive networks that empower growth.' },
              { title: 'Integrity', desc: 'Acting with honesty, respect, and accountability.' },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  transition: 'background var(--transition), border-color var(--transition)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                  e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent)', fontFamily: "'Playfair Display', serif" }}>
                  {f.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <ScrollReveal>
            <div
              style={{
                background: 'var(--primary)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                textAlign: 'center',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <AuroraBackground />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', marginBottom: '1rem', fontWeight: 700 }}>
                  Ready to Discover Your Purpose?
                </h2>
                <div className="divider-accent" style={{ margin: '0 auto 1.5rem' }} />
                <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto 2rem', lineHeight: 1.7 }}>
                  Join a community of young innovators and faith-driven leaders who are building the future together.
                </p>
                <Link to="/join" className="btn btn-primary" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
                  <FiHeart size={18} /> Join FaithFound Lab
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .stats-float { left: 1rem !important; bottom: -1rem !important; }
        }
      `}</style>
    </>
  )
}
