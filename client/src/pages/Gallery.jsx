import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCamera, FiHeart, FiStar } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80', alt: 'Group collaboration', tall: true },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80', alt: 'Portrait in conversation' },
  { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80', alt: 'Creative workshop table' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80', alt: 'Audience at a live event', wide: true },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80', alt: 'Students building together' },
  { src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80', alt: 'Speaker on stage' },
  { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80', alt: 'Women in business panel', wide: true },
  { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80', alt: 'Team celebration' },
]

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery — FaithFound Lab</title>
        <meta name="description" content="A vibrant gallery of FaithFound Lab moments, camps, events, and community stories." />
      </Helmet>

      <section style={{ position: 'relative', minHeight: '62vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #111827 0%, #0f172a 55%, #7c3aed 120%)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.16 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.28), transparent 25%), radial-gradient(circle at 80% 30%, rgba(212,168,67,0.24), transparent 22%), linear-gradient(to top, rgba(15,23,42,0.9), transparent 60%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '6rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: 780 }}>
            <span style={{ color: 'var(--accent-soft)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase' }}>
              Gallery
            </span>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#fff', marginTop: '0.9rem', fontWeight: 700, lineHeight: 1.02 }}>
              The color, energy, and joy of the FaithFound Lab experience.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 620, marginTop: '1.2rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
              A curated visual story of workshops, camps, leadership moments, and community celebrations with a bold editorial feel.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #fff 0%, #f8fbff 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'end', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div>
                <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Highlights
                </span>
                <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)', marginTop: '0.8rem', fontWeight: 700 }}>
                  Moments worth remembering
                </h2>
              </div>
              <Link to="/camps" className="btn btn-secondary">
                See Camps & Events <FiArrowRight />
              </Link>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1rem' }} className="gallery-grid">
            {galleryItems.map((item, index) => (
              <ScrollReveal key={item.src} delay={index * 0.05}>
                <figure
                  style={{
                    gridColumn: item.wide ? 'span 6' : item.tall ? 'span 4' : 'span 3',
                    gridRow: item.tall ? 'span 2' : 'span 1',
                    minHeight: item.tall ? 420 : 260,
                    margin: 0,
                    borderRadius: '1.4rem',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 24px 50px -28px rgba(15,23,42,0.38)',
                    background: '#e2e8f0',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.01)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.7), transparent 50%)' }} />
                  <div style={{ position: 'absolute', left: '1rem', right: '1rem', bottom: '1rem', display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: '0.75rem' }}>
                    <div>
                      <div style={{ color: 'rgba(255,255,255,0.74)', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>FaithFound Lab</div>
                      <figcaption style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, marginTop: '0.35rem' }}>{item.alt}</figcaption>
                    </div>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                      <FiCamera />
                    </div>
                  </div>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #111827 100%)', color: '#fff' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {[
                { icon: <FiStar size={20} />, title: 'Premium storytelling', text: 'Images are arranged like an editorial spread with rhythm and breathing room.' },
                { icon: <FiHeart size={20} />, title: 'Human-centered energy', text: 'Faces, collaboration, and celebration are the focus of every visual.' },
                { icon: <FiArrowRight size={20} />, title: 'Built for conversion', text: 'The gallery naturally leads visitors toward camps, events, and joining the lab.' },
              ].map((item) => (
                <div key={item.title} style={{ padding: '1.35rem', borderRadius: '1.35rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14, background: 'linear-gradient(135deg, var(--accent), #22d3ee)', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .gallery-grid > * { grid-column: span 6 !important; grid-row: span 1 !important; min-height: 260px !important; }
        }
        @media (max-width: 640px) {
          .gallery-grid > * { grid-column: span 12 !important; }
        }
      `}</style>
    </>
  )
}