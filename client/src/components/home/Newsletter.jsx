import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionTitle from '../common/SectionTitle'
import { subscribeToNewsletter } from '../../services/newsletterService'
import { validateNewsletter } from '../../utils/validators'
import { fadeScale } from '../../utils/animationVariants'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const errors = validateNewsletter({ email })
    if (errors.email) {
      setError(errors.email)
      return
    }

    setError('')
    try {
      await subscribeToNewsletter({ email, source: 'homepage' })
      setStatus('Subscribed successfully.')
      setEmail('')
    } catch (err) {
      console.warn('[Newsletter] Failed:', err.message)
      setStatus(err.message || 'Submissions are temporarily unavailable.')
    }
  }

  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.24 }} variants={fadeScale} className="section-shell px-6 py-12 sm:pb-24 lg:px-10">
      <div className="newsletter-home__panel mx-auto max-w-5xl rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-20 relative overflow-hidden bg-midnight">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full" />
        </div>
        
        <div className="relative z-10">
          <SectionTitle
            eyebrow="Newsletter"
            title="Stay close to what God is doing."
            description="Receive updates on gatherings, key events, and what the Lord is doing through Faith Family Church Kidiki."
            tone="light"
            align="center"
          />
          <motion.form variants={fadeScale} onSubmit={handleSubmit} className="newsletter-home__form mx-auto mt-10 sm:mt-12 flex max-w-2xl flex-col gap-3.5 sm:flex-row">
            <input 
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
              placeholder="Your email address" 
              className="newsletter-home__input min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4.5 text-white outline-none focus:border-gold/50 transition-all text-sm" 
            />
            <button type="submit" className="newsletter-home__button rounded-full bg-gold px-10 py-4.5 text-sm font-black text-midnight hover:bg-white transition-all shadow-xl shadow-gold/20">
              Subscribe Now
            </button>
          </motion.form>
          {error ? <p className="mt-6 text-center text-sm text-red-400 font-medium">{error}</p> : null}
          {status ? <p className="mt-6 text-center text-sm font-bold text-gold">{status}</p> : null}
        </div>
      </div>
    </motion.section>
  )
}
