import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiMic, FiTrendingUp, FiUsers, FiZap, FiGlobe, FiStar } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

const experiences = [
  {
    icon: <FiZap size={22} />,
    title: 'Summer Camps',
    desc: 'Immersive summer experiences with worship, teamwork, creative challenges, and field activities that build confidence fast.',
    accent: 'var(--accent)',
  },
  {
    icon: <FiStar size={22} />,
    title: 'Innovation Camps',
    desc: 'Design-thinking bootcamps where young people prototype ideas, explore technology, and solve real problems with style.',
    accent: 'var(--accent-soft)',
  },
  {
    icon: <FiUsers size={22} />,
    title: 'Women in Business',
    desc: 'A bold track for girls and young women to meet founders, learn money skills, build confidence, and see themselves leading.',
    accent: '#7c3aed',
  },
  {
    icon: <FiMic size={22} />,
    title: 'Pitching Events',
    desc: 'Live pitch nights, showcase panels, and demo days where students present ideas with clarity, courage, and impact.',
    accent: '#06b6d4',
  },
]

const highlights = [
  'Hands-on workshops and team challenges',
  'Mentorship from creators, entrepreneurs, and leaders',
  'Photography, media, and brand-building moments',
  'Confidence, communication, and presentation coaching',
]

export default function Camps() {
  return (
    <>
      <Helmet>
        <title>Camps & Events — FaithFound Lab</title>
        <meta
          name="description"
          content="Explore summer camps, innovation camps, women in business experiences, and pitching events at FaithFound Lab."
        />
      </Helmet>

      <section style={{ position: 'relative', minHeight: '66vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #0f172a 0%, #111827 45%, #1d4ed8 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at top right, rgba(34,211,238,0.26), transparent 34%), radial-gradient(circle at left center, rgba(212,168,67,0.3), transparent 30%), linear-gradient(to top, rgba(15,23,42,0.92), transparent 55%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '6rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: 820 }}>
            <span style={{ color: 'var(--accent-soft)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
              Camps + Events
            </span>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#fff', marginTop: '0.9rem', fontWeight: 700, lineHeight: 1.02 }}>
              Where young people build, pitch, lead, and shine.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 620, marginTop: '1.25rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
              FaithFound Lab experiences are designed to feel electric: rich visuals, practical learning, and high-energy spaces where students discover gifts and turn them into action.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link to="/join" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, var(--accent) 0%, #f59e0b 100%)' }}>
                Join an Experience <FiArrowRight />
              </Link>
              <Link to="/gallery" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #fff 0%, #f8fbff 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 3.5rem' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Signature Experiences
              </span>
              <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', marginTop: '0.8rem', fontWeight: 700 }}>
                Camps and moments that feel unforgettable
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {experiences.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <article style={{ height: '100%', borderRadius: '1.5rem', padding: '1.5rem', background: index % 2 === 0 ? 'linear-gradient(180deg, #ffffff 0%, #fdf7ea 100%)' : 'linear-gradient(180deg, #ffffff 0%, #eef9ff 100%)', border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 20px 40px -24px rgba(15,23,42,0.28)' }}>
                  <div style={{ width: 54, height: 54, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', background: item.accent, color: '#fff', marginBottom: '1.25rem', boxShadow: '0 18px 30px -18px rgba(15,23,42,0.4)' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #111827 100%)', color: '#fff' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2rem', alignItems: 'stretch' }} className="camps-grid">
              <div style={{ borderRadius: '1.75rem', overflow: 'hidden', position: 'relative', minHeight: 420, boxShadow: '0 30px 60px -30px rgba(0,0,0,0.45)' }}>
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" alt="Students collaborating at a camp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.92), transparent 60%)' }} />
                <div style={{ position: 'absolute', left: '1.5rem', right: '1.5rem', bottom: '1.5rem' }}>
                  <span style={{ color: 'var(--accent-soft)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Energy, learning, belonging</span>
                  <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.35rem)', marginTop: '0.5rem', marginBottom: '0.6rem' }}>A place where ideas move from the room to the real world.</h3>
                  <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, maxWidth: 540 }}>Our program mix combines summer camps, innovation camps, women in business sessions, and pitching events into one vibrant pipeline of growth.</p>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '1rem' }}>
                <div style={{ padding: '1.35rem', borderRadius: '1.35rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--accent-soft)' }}>What participants get</h3>
                  <div style={{ display: 'grid', gap: '0.85rem' }}>
                    {highlights.map((point) => (
                      <div key={point} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent), #22d3ee)', marginTop: 7, flexShrink: 0 }} />
                        <span style={{ color: 'rgba(255,255,255,0.76)', lineHeight: 1.6 }}>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: '1.35rem', borderRadius: '1.35rem', background: 'linear-gradient(135deg, rgba(212,168,67,0.15), rgba(34,211,238,0.12))', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem' }}>Perfect for</h3>
                  <p style={{ color: 'rgba(255,255,255,0.74)', lineHeight: 1.7 }}>
                    Schools, churches, community groups, and families that want a summer experience with purpose, creativity, and a polished event feel.
                  </p>
                  <Link to="/join" className="btn btn-primary" style={{ marginTop: '1.25rem' }}>
                    Register Interest <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 3rem' }}>
              <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                The Flow
              </span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginTop: '0.8rem', fontWeight: 700 }}>
                From first spark to final pitch
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { step: '01', title: 'Discover', desc: 'Students explore identity, interests, and opportunities through interactive sessions.' },
              { step: '02', title: 'Create', desc: 'Teams build ideas, make prototypes, and practice new skills with mentors.' },
              { step: '03', title: 'Elevate', desc: 'Women in business and leadership moments help participants grow confidence and perspective.' },
              { step: '04', title: 'Pitch', desc: 'Pitch nights and showcases turn ideas into memorable public wins.' },
            ].map((phase, index) => (
              <ScrollReveal key={phase.step} delay={index * 0.08}>
                <article style={{ height: '100%', borderRadius: '1.35rem', padding: '1.45rem', background: 'white', border: '1px solid rgba(15,23,42,0.08)', boxShadow: '0 18px 40px -30px rgba(15,23,42,0.32)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.18em', color: 'var(--accent)' }}>{phase.step}</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginTop: '0.65rem', marginBottom: '0.55rem' }}>{phase.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{phase.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .camps-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}