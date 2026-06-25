import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiZap, FiTrendingUp, FiCpu, FiGlobe, FiUsers, FiCode } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

export default function Innovation() {
  return (
    <>
      <Helmet>
        <title>Innovation — FaithFound Lab</title>
        <meta name="description" content="Fresh ideas and disruptive thinking for community impact. Explore innovation at FaithFound Lab." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', background: 'var(--primary)', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c5?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '4rem', paddingBottom: '3rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Innovation
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#fff', marginTop: '0.75rem', fontWeight: 700, maxWidth: 700 }}>
            Fresh Ideas, Real Impact
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, marginTop: '1rem', lineHeight: 1.7 }}>
            We believe innovation is born at the intersection of faith and creativity. Our students learn to solve problems, build businesses, and create change.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3.5rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              How We Innovate
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginTop: '0.75rem', fontWeight: 700 }}>
              Innovation Pillars
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <FiZap size={22} />, title: 'Creative Problem-Solving', desc: 'Teaching students to approach challenges with curiosity, empathy, and design thinking.' },
              { icon: <FiTrendingUp size={22} />, title: 'Entrepreneurial Mindset', desc: 'Building the confidence to identify opportunities and turn ideas into action.' },
              { icon: <FiCpu size={22} />, title: 'Tech & Digital Skills', desc: 'Introducing coding, digital tools, and modern technologies for tomorrow’s careers.' },
              { icon: <FiGlobe size={22} />, title: 'Community Impact', desc: 'Channeling innovation toward projects that serve and uplift local communities.' },
              { icon: <FiUsers size={22} />, title: 'Collaborative Teams', desc: 'Working in diverse groups to brainstorm, prototype, and launch ideas together.' },
              { icon: <FiCode size={22} />, title: 'Project-Based Learning', desc: 'Learning by doing through real-world challenges and hands-on builds.' },
            ].map((p, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border)',
                transition: 'transform var(--transition), box-shadow var(--transition)'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.25rem' }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section-padding" style={{ background: 'var(--surface-dark)', color: '#fff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3.5rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Student Projects
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginTop: '0.75rem', fontWeight: 700 }}>
              Ideas That Made a Difference
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Community Garden Initiative', desc: 'A student-led project that turned vacant lots into thriving gardens feeding local families.', tag: 'Community' },
              { title: 'Youth Mentorship App', desc: 'A prototype app connecting high schoolers with mentors for guidance and support.', tag: 'Technology' },
              { title: 'Recycled Art Showcase', desc: 'Middle schoolers created art from recycled materials and sold pieces to fund school supplies.', tag: 'Creativity' },
            ].map((s, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                transition: 'border-color var(--transition)'
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,168,67,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
              >
                <div style={{ height: 180, backgroundImage: `url(https://images.unsplash.com/photo-${['1585320806297-9794b3e7d8c0', '1519389950476-29a8bd6315d9', '1460661413005-6125f7558f73'][i]}?w=600&q=80)`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>{s.tag}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0.5rem 0', color: '#fff', fontFamily: "'Playfair Display', serif" }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--surface-alt)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem', fontWeight: 700 }}>
              Have an Idea? Let’s Build It.
            </h2>
            <div className="divider-accent" style={{ margin: '0 auto 1.5rem' }} />
            <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Innovation starts with a single spark. Bring your idea to FaithFound Lab and turn it into reality.
            </p>
            <Link to="/join" className="btn btn-primary" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
              <FiZap size={18} /> Start Your Journey
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
