import { motion } from 'framer-motion'
import { useState } from 'react'
import { submitContact } from '../services/emailService'
import { serviceTimes, siteConfig, staffDirectory } from '../utils/constants'
import { validateContact } from '../utils/validators'
import { fadeScale, staggerTight } from '../utils/animationVariants'
import './Contact.css'

const initialForm = { name: '', email: '', phone: '', subject: '', message: '', purposeOfVisit: '', prayerRequest: false, isPrivate: false }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})


  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateContact(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      return
    }

    try {
      await submitContact(form)
      setStatus(form.prayerRequest ? 'Prayer request sent.' : 'Message sent.')
      setForm(initialForm)
    } catch (err) {
      console.warn('[Contact] Failed:', err.message)
      setStatus(err.message || 'Contact submissions are temporarily unavailable.')
    }
  }

  return (
    <div className="ffck-contact-page bg-[#fcf8f1] min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[320px] sm:h-[46vh] flex flex-col items-center justify-start pt-20 sm:justify-center sm:pt-0 overflow-hidden bg-midnight text-white z-10">
        <div className="absolute inset-0 z-0">
          <img src="/images/s3.jpg" alt="Contact Us" className="ffck-contact-hero-image w-full h-full object-cover opacity-55 scale-110 blur-[2px] brightness-[0.78] saturate-[1.08]" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/45 to-[#fcf8f1]" />
        </div>
        <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="ffck-contact-kicker"
          >
            Connect with us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="ffck-contact-hero-title mb-12 sm:mb-0"
          >
            We are <span>Listening.</span>
          </motion.h1>
        </div>
      </section>

      <div className="h-24 sm:hidden" />

      <motion.section 
        initial="hidden" 
        animate="show" 
        variants={staggerTight} 
        className="px-4 pb-24 mt-10 sm:-mt-24 relative z-20 sm:px-6 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div variants={fadeScale} className="ffck-contact-form-card">
            <div className="ffck-contact-card-accent" />
            <p className="ffck-contact-section-kicker">Inquiry + Prayer Request</p>
            <h2 className="ffck-contact-section-title">How can we <span>serve you?</span></h2>
            <p className="ffck-contact-section-copy">Send a message, request prayer, or let us know how Faith Family Church Kidiki can walk with you.</p>
            
            <form onSubmit={handleSubmit} className="grid gap-6 flex-1 mt-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input 
                    value={form.name} 
                    onChange={(event) => setForm({ ...form, name: event.target.value })} 
                    placeholder="Full Name" 
                    className="ffck-contact-field" 
                  />
                  {errors.name ? <p className="text-xs text-red-600 px-2">{errors.name}</p> : null}
                </div>
                <div className="space-y-2">
                  <input 
                    value={form.email} 
                    onChange={(event) => setForm({ ...form, email: event.target.value })} 
                    placeholder="Email Address" 
                    className="ffck-contact-field" 
                  />
                  {errors.email ? <p className="text-xs text-red-600 px-2">{errors.email}</p> : null}
                </div>
              </div>
              <input 
                value={form.phone} 
                onChange={(event) => setForm({ ...form, phone: event.target.value })} 
                placeholder="Phone Number (Optional)" 
                className="ffck-contact-field" 
              />
              <input 
                value={form.subject} 
                onChange={(event) => setForm({ ...form, subject: event.target.value })} 
                placeholder="Subject" 
                className="ffck-contact-field" 
              />
              <textarea 
                value={form.message} 
                onChange={(event) => setForm({ ...form, message: event.target.value })} 
                placeholder="Your message or prayer request..." 
                rows="6" 
                className="ffck-contact-field ffck-contact-textarea" 
              />
              {errors.message ? <p className="text-xs text-red-600 px-2">{errors.message}</p> : null}
              
              <div className="flex flex-wrap gap-8 items-center py-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${form.prayerRequest ? 'bg-gold border-gold' : 'border-midnight/10 bg-white'}`}>
                    {form.prayerRequest && <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                  </div>
                  <input type="checkbox" className="hidden" checked={form.prayerRequest} onChange={(event) => setForm({ ...form, prayerRequest: event.target.checked })} /> 
                  <span className="ffck-contact-check-label">Prayer request</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${form.isPrivate ? 'bg-gold border-gold' : 'border-midnight/10 bg-white'}`}>
                    {form.isPrivate && <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                  </div>
                  <input type="checkbox" className="hidden" checked={form.isPrivate} onChange={(event) => setForm({ ...form, isPrivate: event.target.checked })} /> 
                  <span className="ffck-contact-check-label">Keep private</span>
                </label>
              </div>

              <button type="submit" className="ffck-contact-submit">
                Send Message
              </button>
              {status ? <p className="ffck-contact-status">{status}</p> : null}
            </form>
          </motion.div>

          <motion.div variants={staggerTight} className="space-y-8">
            <motion.div variants={fadeScale} className="ffck-contact-side-card">
              <h3 className="ffck-contact-side-title">Service <span>Times.</span></h3>
              <div className="space-y-8">
                {serviceTimes.map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="ffck-contact-icon-box">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="ffck-contact-item-title">{item.title}</p>
                      <p className="ffck-contact-item-time">{item.time}</p>
                      <p className="ffck-contact-item-detail">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeScale} className="ffck-contact-side-card">
              <h3 className="ffck-contact-side-title">Staff <span>Directory.</span></h3>
              <div className="space-y-8">
                {staffDirectory.map((member) => (
                  <div key={member.email} className="flex gap-5">
                    <div className="ffck-contact-icon-box is-dark">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <div>
                      <p className="ffck-contact-item-title">{member.name}</p>
                      <p className="ffck-contact-item-time">{member.role}</p>
                      <p className="ffck-contact-item-detail break-all">{member.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeScale} className="ffck-contact-map-card group">
              <iframe 
                title="Google Maps" 
                src={siteConfig.mapsEmbedUrl} 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-75 scale-105 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1500ms]" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-midnight/35 via-transparent to-transparent" />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/15 rounded-[2.5rem] lg:rounded-[3.5rem]" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
