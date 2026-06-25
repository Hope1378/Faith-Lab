import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiBookOpen, FiCompass, FiAward, FiLayers, FiMessageCircle, FiGlobe } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Programs — FaithFound Lab</title>
        <meta name="description" content="FaithFound Lab programs for Elementary, Middle, and High School students. Mentorship, leadership, and career exploration." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', background: 'var(--primary)', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '4rem', paddingBottom: '3rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Program Structure
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#fff', marginTop: '0.75rem', fontWeight: 700, maxWidth: 700 }}>
            Programs Tailored for Every Stage
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, marginTop: '1rem', lineHeight: 1.7 }}>
            FaithFound Lab provides mentorship, leadership development, career guidance, and college preparation programs designed to help students discover their purpose, build confidence, and prepare for their future.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 3rem' }}>
            <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Three Levels
            </span>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginTop: '0.75rem', fontWeight: 700 }}>
              Designed to Grow With You
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { label: 'A', name: 'Elementary School', grades: 'Grades 3–5', color: 'var(--accent-soft)' },
              { label: 'B', name: 'Middle School', grades: 'Grades 6–8', color: 'var(--accent)' },
              { label: 'C', name: 'High School', grades: 'Grades 9–12', color: 'var(--accent-dark)' },
            ].map((lvl, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 'var(--radius-lg)', padding: '2rem',
                border: '1px solid var(--border)', textAlign: 'center',
                transition: 'transform var(--transition), box-shadow var(--transition)'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <span style={{
                  display: 'inline-flex', width: 44, height: 44, borderRadius: '50%',
                  background: lvl.color, color: 'var(--primary)', fontWeight: 800,
                  alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'
                }}>{lvl.label}</span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem', fontFamily: "'Playfair Display', serif" }}>{lvl.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{lvl.grades}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A. Elementary */}
      <section className="section-padding" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="prog-grid">
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80"
                alt="Young students learning"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Elementary Program
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginTop: '0.75rem', marginBottom: '1rem', fontWeight: 700 }}>
                Explorers (Grades 3–5)
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                <strong>Goal:</strong> Build confidence, curiosity, and positive character. Elementary students focus on self-belief, teamwork, and discovering their talents.
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>Topics</h4>
                <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
                  <li>Believing in yourself</li>
                  <li>Kindness and character</li>
                  <li>Teamwork and friendship</li>
                  <li>Creativity and imagination</li>
                  <li>Problem solving</li>
                  <li>Learning about different careers in a fun way</li>
                  <li>Early leadership skills</li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>Activities</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Storytelling', 'Creative projects', 'Simple leadership activities', 'Career discovery games'].map((a, i) => (
                    <span key={i} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 999, padding: '0.35rem 0.85rem', fontSize: '0.8rem', color: 'var(--primary)' }}>{a}</span>
                  ))}
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '1.25rem', fontStyle: 'italic' }}>
                At this stage, the focus is inspiration and self-confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B. Middle School */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="prog-grid">
            <div>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Middle School Program
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginTop: '0.75rem', marginBottom: '1rem', fontWeight: 700 }}>
                Discovery Lab (Grades 6–8)
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                <strong>Goal:</strong> Identity formation, leadership skills, and career awareness. Middle school is when students start asking "Who am I?" and "What am I good at?"
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>Topics</h4>
                <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8, paddingLeft: '1.25rem' }}>
                  <li>Identity and self-awareness</li>
                  <li>Confidence building</li>
                  <li>Leadership development</li>
                  <li>Communication skills</li>
                  <li>Goal setting</li>
                  <li>Emotional intelligence</li>
                  <li>Career exploration</li>
                  <li>Introduction to entrepreneurship</li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>Students Begin to Explore</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Different career paths', 'Personal strengths', 'How education connects to opportunities'].map((a, i) => (
                    <span key={i} style={{ background: 'var(--surface-alt)', border: '1px solid var(--border)', borderRadius: 999, padding: '0.35rem 0.85rem', fontSize: '0.8rem', color: 'var(--primary)' }}>{a}</span>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80"
                alt="Middle school students"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* C. High School */}
      <section className="section-padding" style={{ background: 'var(--surface-dark)', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="prog-grid">
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80"
                alt="High school students"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                High School Program
              </span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginTop: '0.75rem', marginBottom: '1rem', fontWeight: 700, color: '#fff' }}>
                Leadership Lab (Grades 9–12 & College Now)
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                <strong style={{ color: '#fff' }}>Goal:</strong> Prepare students for college, careers, and leadership. High school students focus on real-world preparation.
              </p>

              {[
                { icon: <FiAward size={18} />, title: 'Leadership & Personal Development', items: ['Public speaking', 'Leadership skills', 'Decision making', 'Personal discipline'] },
                { icon: <FiCompass size={18} />, title: 'Career Guidance', items: ['Career pathway exploration', 'Mentorship from professionals', 'Resume building', 'Networking basics', 'Workplace expectations'] },
                { icon: <FiBookOpen size={18} />, title: 'College Preparation', items: ['Understanding college pathways', 'Scholarship opportunities', 'Financial aid basics', 'Writing college essays', 'Preparing for college life'] },
                { icon: <FiLayers size={18} />, title: 'Entrepreneurship & Innovation', items: ['Identifying opportunities', 'Solving problems creatively', 'Basic business ideas', 'Pitching ideas'] },
              ].map((cat, i) => (
                <div key={i} style={{ marginBottom: '1.25rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
                    {cat.icon} {cat.title}
                  </h4>
                  <ul style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, paddingLeft: '1.5rem' }}>
                    {cat.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                </div>
              ))}

              <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
                  <FiGlobe size={18} /> Community Impact Projects
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Students work on real projects that benefit their community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" style={{ background: 'var(--surface-alt)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem', fontWeight: 700 }}>
              Find the Right Program for You
            </h2>
            <div className="divider-accent" style={{ margin: '0 auto 1.5rem' }} />
            <p style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
              Every stage matters. Let us help you take the next step in your journey.
            </p>
            <Link to="/join" className="btn btn-primary" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>
              <FiArrowRight size={18} /> Apply Now
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .prog-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }`}</style>
    </>
  )
}
