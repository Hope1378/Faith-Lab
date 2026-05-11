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
    <div className="bg-[#fcf8f1] min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[400px] sm:h-[50vh] flex flex-col items-center justify-start pt-20 sm:justify-center sm:pt-0 overflow-hidden bg-midnight text-white z-10">
        <div className="absolute inset-0 z-0">
          <img src="/images/s3.jpg" alt="Contact Us" className="w-full h-full object-cover opacity-50 scale-110 blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/50 to-[#fcf8f1]" />
        </div>
        <div className="relative z-30 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold tracking-[0.4em] uppercase text-[10px] mb-2"
          >
            Connect with us
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-6xl font-black tracking-tight text-white mb-12 sm:mb-0"
          >
            We are <span className="text-gold drop-shadow-md">Listening</span>
          </motion.h1>
        </div>
      </section>

      <div className="h-24 sm:hidden" />

      <motion.section 
        initial="hidden" 
        animate="show" 
        variants={staggerTight} 
        className="px-4 pb-24 mt-10 sm:-mt-20 relative z-20 sm:px-6 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_450px]">
          <motion.div variants={fadeScale} className="rounded-[3rem] bg-white p-8 sm:p-12 shadow-2xl border border-white flex flex-col">
            <p className="text-gold font-black tracking-widest uppercase text-xs mb-6">Inquiry + Prayer Request</p>
            <h2 className="text-3xl font-black text-midnight mb-10 tracking-tight">How can we help?</h2>
            
            <form onSubmit={handleSubmit} className="grid gap-6 flex-1">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <input 
                    value={form.name} 
                    onChange={(event) => setForm({ ...form, name: event.target.value })} 
                    placeholder="Full Name" 
                    className="w-full rounded-2xl border border-midnight/5 bg-slate-50/50 px-6 py-4 focus:ring-2 focus:ring-gold transition-all outline-none" 
                  />
                  {errors.name ? <p className="text-xs text-red-600 px-2">{errors.name}</p> : null}
                </div>
                <div className="space-y-2">
                  <input 
                    value={form.email} 
                    onChange={(event) => setForm({ ...form, email: event.target.value })} 
                    placeholder="Email Address" 
                    className="w-full rounded-2xl border border-midnight/5 bg-slate-50/50 px-6 py-4 focus:ring-2 focus:ring-gold transition-all outline-none" 
                  />
                  {errors.email ? <p className="text-xs text-red-600 px-2">{errors.email}</p> : null}
                </div>
              </div>
              <input 
                value={form.phone} 
                onChange={(event) => setForm({ ...form, phone: event.target.value })} 
                placeholder="Phone Number (Optional)" 
                className="rounded-2xl border border-midnight/5 bg-slate-50/50 px-6 py-4 focus:ring-2 focus:ring-gold transition-all outline-none" 
              />
              <input 
                value={form.subject} 
                onChange={(event) => setForm({ ...form, subject: event.target.value })} 
                placeholder="Subject" 
                className="rounded-2xl border border-midnight/5 bg-slate-50/50 px-6 py-4 focus:ring-2 focus:ring-gold transition-all outline-none" 
              />
              <textarea 
                value={form.message} 
                onChange={(event) => setForm({ ...form, message: event.target.value })} 
                placeholder="Your message or prayer request..." 
                rows="6" 
                className="rounded-2xl border border-midnight/5 bg-slate-50/50 px-6 py-4 focus:ring-2 focus:ring-gold transition-all outline-none" 
              />
              {errors.message ? <p className="text-xs text-red-600 px-2">{errors.message}</p> : null}
              
              <div className="flex flex-wrap gap-8 items-center py-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${form.prayerRequest ? 'bg-gold border-gold' : 'border-midnight/10 bg-white'}`}>
                    {form.prayerRequest && <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                  </div>
                  <input type="checkbox" className="hidden" checked={form.prayerRequest} onChange={(event) => setForm({ ...form, prayerRequest: event.target.checked })} /> 
                  <span className="text-midnight/70 font-bold text-sm tracking-tight">Prayer request</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${form.isPrivate ? 'bg-gold border-gold' : 'border-midnight/10 bg-white'}`}>
                    {form.isPrivate && <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                  </div>
                  <input type="checkbox" className="hidden" checked={form.isPrivate} onChange={(event) => setForm({ ...form, isPrivate: event.target.checked })} /> 
                  <span className="text-midnight/70 font-bold text-sm tracking-tight">Keep private</span>
                </label>
              </div>

              <button type="submit" className="rounded-full bg-midnight px-10 py-5 text-lg font-black text-white hover:bg-gold hover:shadow-xl hover:shadow-gold/20 transition-all transform hover:-translate-y-1">
                Send Message
              </button>
              {status ? <p className="text-center font-black text-gold animate-bounce">{status}</p> : null}
            </form>
          </motion.div>

          <motion.div variants={staggerTight} className="space-y-8">
            <motion.div variants={fadeScale} className="bg-white rounded-[3rem] p-10 shadow-xl border border-white">
              <h3 className="text-2xl font-black text-midnight tracking-tight mb-8">Service Times</h3>
              <div className="space-y-8">
                {serviceTimes.map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-black text-midnight">{item.title}</p>
                      <p className="text-gold font-bold text-sm mb-1">{item.time}</p>
                      <p className="text-midnight/50 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeScale} className="bg-white rounded-[3rem] p-10 shadow-xl border border-white">
              <h3 className="text-2xl font-black text-midnight tracking-tight mb-8">Staff Directory</h3>
              <div className="space-y-8">
                {staffDirectory.map((member) => (
                  <div key={member.email} className="flex gap-5">
                    <div className="w-12 h-12 bg-midnight/5 rounded-2xl flex items-center justify-center text-midnight shrink-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <div>
                      <p className="font-black text-midnight">{member.name}</p>
                      <p className="text-gold font-bold text-sm mb-1">{member.role}</p>
                      <p className="text-midnight/40 text-xs break-all">{member.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeScale} className="overflow-hidden rounded-[3rem] bg-white shadow-2xl border-4 border-white h-72 relative group">
              <iframe 
                title="Google Maps" 
                src={siteConfig.mapsEmbedUrl} 
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[3rem]" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
