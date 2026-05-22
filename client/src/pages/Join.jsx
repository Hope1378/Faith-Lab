import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FiCheck, FiSend, FiUser, FiMail, FiPhone, FiMapPin, FiCalendar, FiMessageSquare, FiBookOpen } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'

export default function Join() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    city: '', grade: '', program: '', message: ''
  })

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>Join Us — FaithFound Lab</title>
        <meta name="description" content="Join FaithFound Lab. Apply to be part of our mentorship, leadership, and innovation programs for grades 3–12." />
      </Helmet>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '45vh', display: 'flex', alignItems: 'center', background: 'var(--primary)', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80)',
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '4rem', paddingBottom: '3rem' }}>
          <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Join the Lab
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', color: '#fff', marginTop: '0.75rem', fontWeight: 700, maxWidth: 700 }}>
            Take the First Step
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 560, marginTop: '1rem', lineHeight: 1.7 }}>
            Fill out the form below to join FaithFound Lab and start your journey of discovery, growth, and impact.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="join-grid">
              {/* Left: Info */}
              <div>
                <span style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  Get in Touch
                </span>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginTop: '0.75rem', marginBottom: '1.25rem', fontWeight: 700 }}>
                  We’re Excited to Meet You
                </h2>
                <div className="divider-accent" style={{ marginBottom: '1.5rem' }} />
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Whether you are a student, parent, or educator, we would love to connect and explore how FaithFound Lab can support your journey.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { icon: <FiMail size={18} />, title: 'Email', value: 'hello@faithfoundlab.org' },
                  { icon: <FiPhone size={18} />, title: 'Phone', value: '+1 (555) 000-0000' },
                  { icon: <FiMapPin size={18} />, title: 'Location', value: 'Community Center, Your City' },
                  { icon: <FiCalendar size={18} />, title: 'Office Hours', value: 'Mon – Fri, 9:00 AM – 5:00 PM' },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: 2 }}>{c.title}</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{c.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div style={{
                  background: '#fff', borderRadius: 'var(--radius-lg)', padding: '3rem',
                  border: '1px solid var(--border)', textAlign: 'center', boxShadow: 'var(--shadow)'
                }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                    <FiCheck size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Application Received!</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    Thank you for applying to FaithFound Lab. We will review your submission and get back to you within 3 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  background: '#fff', borderRadius: 'var(--radius-lg)', padding: '2.5rem',
                  border: '1px solid var(--border)', boxShadow: 'var(--shadow)'
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }} className="form-row">
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>First Name</label>
                      <div style={{ position: 'relative' }}>
                        <FiUser size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input name="firstName" required value={form.firstName} onChange={handleChange}
                          style={{ width: '100%', padding: '0.7rem 0.75rem 0.7rem 2.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--surface-alt)' }}
                          placeholder="Jane" />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Last Name</label>
                      <div style={{ position: 'relative' }}>
                        <FiUser size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input name="lastName" required value={form.lastName} onChange={handleChange}
                          style={{ width: '100%', padding: '0.7rem 0.75rem 0.7rem 2.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--surface-alt)' }}
                          placeholder="Doe" />
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Email</label>
                    <div style={{ position: 'relative' }}>
                      <FiMail size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input name="email" type="email" required value={form.email} onChange={handleChange}
                        style={{ width: '100%', padding: '0.7rem 0.75rem 0.7rem 2.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--surface-alt)' }}
                        placeholder="jane@example.com" />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Phone</label>
                    <div style={{ position: 'relative' }}>
                      <FiPhone size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                        style={{ width: '100%', padding: '0.7rem 0.75rem 0.7rem 2.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--surface-alt)' }}
                        placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }} className="form-row">
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>City</label>
                      <div style={{ position: 'relative' }}>
                        <FiMapPin size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input name="city" value={form.city} onChange={handleChange}
                          style={{ width: '100%', padding: '0.7rem 0.75rem 0.7rem 2.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--surface-alt)' }}
                          placeholder="Your city" />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Current Grade</label>
                      <div style={{ position: 'relative' }}>
                        <FiBookOpen size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <select name="grade" value={form.grade} onChange={handleChange}
                          style={{ width: '100%', padding: '0.7rem 0.75rem 0.7rem 2.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--surface-alt)', appearance: 'none' }}>
                          <option value="">Select grade</option>
                          {['Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10','Grade 11','Grade 12','College'].map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Program Interest</label>
                    <div style={{ position: 'relative' }}>
                      <FiBookOpen size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <select name="program" value={form.program} onChange={handleChange}
                        style={{ width: '100%', padding: '0.7rem 0.75rem 0.7rem 2.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--surface-alt)', appearance: 'none' }}>
                        <option value="">Select a program</option>
                        <option value="Explorers">Explorers (Grades 3–5)</option>
                        <option value="Discovery Lab">Discovery Lab (Grades 6–8)</option>
                        <option value="Leadership Lab">Leadership Lab (Grades 9–12)</option>
                        <option value="Community Impact">Community Impact Projects</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Message (Optional)</label>
                    <div style={{ position: 'relative' }}>
                      <FiMessageSquare size={16} style={{ position: 'absolute', left: 12, top: 14, color: 'var(--text-muted)' }} />
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                        style={{ width: '100%', padding: '0.7rem 0.75rem 0.7rem 2.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--surface-alt)', resize: 'vertical' }}
                        placeholder="Tell us a bit about yourself..." />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <FiSend size={18} /> Submit Application
                  </button>
                </form>
              )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style>{`@media (max-width: 768px) { .join-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } .form-row { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
