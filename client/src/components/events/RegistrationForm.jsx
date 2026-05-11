import { useState } from 'react'
import { motion } from 'framer-motion'
import { registerForEvent } from '../../services/eventService'
import { validateEventRegistration } from '../../utils/validators'
import './RegistrationForm.css'

const initialState = { name: '', email: '', phone: '', ticketCount: 1 }

export default function RegistrationForm({ event }) {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Derive purpose of visit from the event title
  const purposeOfVisit = event?.title || ''

  async function handleSubmit(submitEvent) {
    submitEvent.preventDefault()
    const nextErrors = validateEventRegistration(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      return
    }

    setIsSubmitting(true)
    try {
      const response = await registerForEvent(event.slug, { ...values, purposeOfVisit })
      setStatus(response.message)
      setValues(initialState)
    } catch (err) {
      console.warn('[Registration] Failed:', err.message)
      setStatus(err.message || 'Registration is temporarily unavailable.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      {/* Cinematic Glass Stage */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c69a3a]/10 to-transparent opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-1000" />
      
      <form 
        onSubmit={handleSubmit} 
        className="relative z-10 bg-[#faf8f5]/60 backdrop-blur-3xl rounded-[3.5rem] p-10 lg:p-14 border border-white/40 shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden"
      >
        {/* Shimmer Effect */}
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.2] to-transparent animate-shimmer pointer-events-none" style={{animationDuration:'8s'}} />

        <div className="text-center mb-12">
          <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.7rem] uppercase tracking-[0.4em] text-[#c69a3a] mb-5">Sacred Reservation</p>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-5xl text-midnight leading-none">Register <span className="italic">Now.</span></h2>
        </div>

        <div className="grid gap-7">
          <div className="space-y-2">
            <input
              value={values.name}
              onChange={(event) => setValues({ ...values, name: event.target.value })}
              style={{fontFamily:"'Manrope',sans-serif", fontWeight:600}}
              placeholder="YOUR FULL NAME"
              className="w-full bg-white/70 border border-midnight/5 rounded-[1.5rem] px-8 py-5.5 text-[0.75rem] uppercase tracking-widest focus:border-[#c69a3a] focus:bg-white focus:ring-0 transition-all outline-none placeholder:text-midnight/30 shadow-sm"
            />
            {errors.name && <p className="px-6 text-[10px] font-bold text-red-500 uppercase tracking-widest">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <input
              value={values.email}
              onChange={(event) => setValues({ ...values, email: event.target.value })}
              style={{fontFamily:"'Manrope',sans-serif", fontWeight:600}}
              placeholder="EMAIL ADDRESS"
              className="w-full bg-white/70 border border-midnight/5 rounded-[1.5rem] px-8 py-5.5 text-[0.75rem] uppercase tracking-widest focus:border-[#c69a3a] focus:bg-white focus:ring-0 transition-all outline-none placeholder:text-midnight/30 shadow-sm"
            />
            {errors.email && <p className="px-6 text-[10px] font-bold text-red-500 uppercase tracking-widest">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-2 gap-5">
             <input
               value={values.phone}
               onChange={(event) => setValues({ ...values, phone: event.target.value })}
               style={{fontFamily:"'Manrope',sans-serif", fontWeight:600}}
               placeholder="PHONE"
               className="w-full bg-white/70 border border-midnight/5 rounded-[1.5rem] px-8 py-5.5 text-[0.75rem] uppercase tracking-widest focus:border-[#c69a3a] focus:bg-white focus:ring-0 transition-all outline-none placeholder:text-midnight/30 shadow-sm"
             />
             <input
               type="number"
               min="1"
               value={values.ticketCount}
               onChange={(event) => setValues({ ...values, ticketCount: Number(event.target.value) })}
               style={{fontFamily:"'Manrope',sans-serif", fontWeight:600}}
               placeholder="GUESTS"
               className="w-full bg-white/70 border border-midnight/5 rounded-[1.5rem] px-8 py-5.5 text-[0.75rem] uppercase tracking-widest focus:border-[#c69a3a] focus:bg-white focus:ring-0 transition-all outline-none placeholder:text-midnight/30 shadow-sm"
             />
          </div>

          {/* Purpose of Visit — High-Fidelity Focal Display */}
          <div className="rounded-2xl border border-[#c69a3a]/10 px-6 py-5 bg-[#faf8f5]/80 relative overflow-hidden group/purpose">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c69a3a]/5 to-transparent opacity-0 group-hover/purpose:opacity-100 transition-opacity duration-700" />
            <p className="text-[0.55rem] uppercase tracking-[0.3em] text-[#c69a3a] font-black mb-1.5">Encounter Topic</p>
            <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-widest text-midnight whitespace-nowrap truncate">{purposeOfVisit}</p>
            <input type="hidden" name="purposeOfVisit" value={purposeOfVisit} />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{
              fontFamily:"'Manrope',sans-serif", 
              fontWeight:800,
              background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)'
            }}
            className={`group/btn relative flex items-center justify-center gap-4 px-8 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] text-midnight shadow-[0_20px_40px_rgba(198,154,58,0.2)] hover:shadow-[0_25px_55px_rgba(198,154,58,0.45)] transition-all transform hover:-translate-y-1 overflow-hidden ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="relative z-10">{isSubmitting ? 'Synchronizing...' : 'Confirm Registration'}</span>
            <svg className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
               <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            {/* Button Shimmer */}
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
          </button>

          {status && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center text-[10px] font-bold text-[#c69a3a] uppercase tracking-widest px-4 leading-relaxed"
            >
              {status}
            </motion.p>
          )}
        </div>
      </form>
    </motion.div>
  )
}
