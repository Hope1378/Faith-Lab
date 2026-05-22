import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiHeart, FiTarget, FiZap, FiUsers, FiShield } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — FaithFound Lab</title>
        <meta name="description" content="Learn about FaithFound Lab's vision, mission, and core focus areas. Where faith sparks innovation." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', background: 'var(--primary)', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '4rem', paddingBottom: '3rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            About Us
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#fff', marginTop: '0.75rem', fontWeight: 700, maxWidth: 600 }}>
            Our Heart & Purpose
          </h1>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
              <div>
                <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Why We Exist
                </span>
                <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginTop: '0.75rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                  Vision & Mission
                </h2>
                <div className="divider-accent" style={{ marginBottom: '1.5rem' }} />
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiTarget size={16} style={{ color: 'var(--accent)' }} /> Vision
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, paddingLeft: '1.5rem' }}>
                  To nurture a generation of confident, purpose-driven young leaders who transform their communities through character, creativity, and service.
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FiHeart size={16} style={{ color: 'var(--accent)' }} /> Mission
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, paddingLeft: '1.5rem' }}>
                  FaithFound Lab empowers young people through mentorship, leadership development, and entrepreneurial thinking, helping them discover purpose, build confidence, and create positive change in their communities.
                </p>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/programs" className="btn btn-primary">
                  Explore Programs <FiArrowRight />
                </Link>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80"
                  alt="Students collaborating"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="section-padding" style={{ background: 'var(--surface-dark)', color: '#fff' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3.5rem' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Core Focus Areas
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginTop: '0.75rem', fontWeight: 700 }}>
                What We Cultivate
              </h2>
              <div className="divider-accent" style={{ margin: '1rem auto 0', background: 'linear-gradient(90deg, var(--accent), var(--accent-soft))' }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <FiHeart size={20} />, title: 'Confidence', desc: 'Encouraging belief in their abilities and voice.' },
              { icon: <FiUsers size={20} />, title: 'Leadership', desc: 'Developing responsible leaders who influence their communities positively.' },
              { icon: <FiZap size={20} />, title: 'Innovation', desc: 'Teaching creativity, problem-solving, and entrepreneurship.' },
              { icon: <FiTarget size={20} />, title: 'Community', desc: 'Building supportive networks that empower growth.' },
              { icon: <FiShield size={20} />, title: 'Integrity', desc: 'Acting with honesty, respect, and accountability.' },
            ].map((f, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-lg)', padding: '1.75rem',
                transition: 'background var(--transition), border-color var(--transition)'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1rem' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem', color: 'var(--accent)', fontFamily: "'Playfair Display', serif" }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--surface-alt)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem', fontWeight: 700 }}>
              Be Part of the Movement
            </h2>
            <div className="divider-accent" style={{ margin: '0 auto 1.5rem' }} />
            <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Join a generation of young leaders who are transforming their communities through faith, creativity, and service.
            </p>
            <Link to="/join" className="btn btn-primary" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
              <FiHeart size={18} /> Join FaithFound Lab
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
    </>
  )
}
