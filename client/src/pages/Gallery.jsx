import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCamera, FiUsers } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

const galleryItems = [
  { src: '/assets/gallery/children-park.svg', alt: 'Children playing together in a park' },
  { src: '/assets/gallery/children-classroom.svg', alt: 'Children studying in a classroom' },
  { src: '/assets/gallery/children-outdoor-learning.svg', alt: 'Children learning outdoors in a park' },
  { src: '/assets/gallery/women-classroom.svg', alt: 'Women in a classroom discussion' },
  { src: '/assets/gallery/women-group-discussion.svg', alt: 'Women in a group discussion' },
  { src: '/assets/gallery/women-park.svg', alt: 'Women meeting in a park' },
  { src: '/assets/gallery/women-classroom.svg', alt: 'Women sharing ideas in a classroom' },
  { src: '/assets/gallery/children-classroom.svg', alt: 'Children and adults in a learning session' },
]

const galleryNotes = [
  { title: 'Children at Play', text: 'Outdoor moments that show joy, movement, and confidence in familiar spaces.' },
  { title: 'Classroom Learning', text: 'Hands-on studying, reading, and group learning in bright classroom settings.' },
  { title: 'Women & Discussion', text: 'Women gathering in parks and classrooms to share ideas, support, and leadership.' },
]

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery — FaithFound Lab</title>
        <meta
          name="description"
          content="Browse gallery highlights from FaithFound Lab, featuring women, children, mentorship, and community events."
        />
      </Helmet>

      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #111827 55%, #1d4ed8 100%)', color: '#fff' }}>
        <div className="container" style={{ paddingTop: '5.5rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: 760 }}>
            <span style={{ color: 'var(--accent-soft)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              Gallery
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4.4rem)', lineHeight: 1.02, marginTop: '0.9rem', fontWeight: 700 }}>
              Moments from our community, camps, and leadership spaces.
            </h1>
            <p style={{ maxWidth: 620, marginTop: '1rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, fontSize: '1.03rem' }}>
              A visual archive of the people, learning, and energy that shape FaithFound Lab.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.6rem' }}>
              {['Children Playing', 'Classroom Learning', 'Women in Parks', 'Group Discussions'].map((item) => (
                <span
                  key={item}
                  style={{
                    padding: '0.5rem 0.85rem',
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #fff 0%, #f8fafc 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'end', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Gallery Highlights
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', marginTop: '0.65rem', fontWeight: 700 }}>
                  Children, women, parks, classrooms, and group discussions
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginTop: '0.75rem', maxWidth: 680 }}>
                  Browse scenes that show children ages 5 to 10 playing and studying, women in parks and classrooms, and moments of shared discussion.
                </p>
              </div>
              <Link to="/camps" className="btn btn-secondary">
                See Camps & Events <FiArrowRight />
              </Link>
            </div>
          </ScrollReveal>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <ScrollReveal key={`${item.src}-${index}`} delay={index * 0.04}>
                <figure className="gallery-card">
                  <img src={item.src} alt={item.alt} />
                  <div className="gallery-card-overlay" />
                  <figcaption>
                    <div className="gallery-card-tag">FaithFound Lab</div>
                    <div className="gallery-card-title">{item.alt}</div>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #111827 100%)', color: '#fff' }}>
        <div className="container">
          <ScrollReveal>
            <div className="gallery-notes">
              <div className="gallery-notes-lead">
                <div style={{ width: 52, height: 52, borderRadius: 16, background: 'linear-gradient(135deg, var(--accent), #22d3ee)', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <FiUsers size={20} />
                </div>
                <span className="gallery-kicker">Gallery focus</span>
                <h3>Women and children at the center</h3>
                <p>
                  The gallery highlights children learning and playing, women connecting in public and classroom spaces, and group discussions.
                </p>
              </div>
              <div className="gallery-notes-stack">
                {galleryNotes.map((item) => (
                  <div key={item.title} className="gallery-note-card">
                    <div className="gallery-note-title-row">
                      <span>{item.title}</span>
                      <FiCamera size={15} />
                    </div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }
        .gallery-card {
          position: relative;
          margin: 0;
          border-radius: 1.15rem;
          overflow: hidden;
          min-height: 290px;
          aspect-ratio: 4 / 3;
          background: #e2e8f0;
          border: 1px solid rgba(15,23,42,0.06);
          box-shadow: 0 16px 34px -24px rgba(15,23,42,0.32);
        }
        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,23,42,0.66), transparent 58%);
        }
        .gallery-card figcaption {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          color: #fff;
          z-index: 1;
        }
        .gallery-card-tag {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.78);
        }
        .gallery-card-title {
          margin-top: 0.35rem;
          font-size: 1rem;
          line-height: 1.2;
          font-weight: 700;
          max-width: 240px;
        }
        .gallery-notes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          align-items: start;
        }
        .gallery-notes-lead {
          padding: 1.75rem;
          border-radius: 1.45rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .gallery-notes-lead h3 {
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          line-height: 1.05;
          margin: 0.45rem 0 0;
        }
        .gallery-notes-lead p,
        .gallery-note-card p {
          color: rgba(255,255,255,0.74);
          line-height: 1.7;
          margin-top: 0.8rem;
        }
        .gallery-notes-stack {
          display: grid;
          gap: 1rem;
        }
        .gallery-note-card {
          padding: 1.25rem 1.35rem;
          border-radius: 1.35rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .gallery-note-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: var(--accent-soft);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 768px) {
          .gallery-grid,
          .gallery-notes {
            grid-template-columns: 1fr;
          }
          .gallery-card {
            min-height: 260px;
          }
        }
      `}</style>
    </>
  )
}
