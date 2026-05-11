import { motion } from 'framer-motion'
import { useState } from 'react'
import { submitContact } from '../services/emailService'
import { ccfgmServiceTimes, ccfgmSiteConfig, ccfgmStaffDirectory } from '../utils/ccfgmConstants'
import { fadeScale, staggerTight } from '../utils/animationVariants'
import './Contact.css'

const initialForm = { name: '', email: '', phone: '', subject: '', message: '', prayerRequest: false }

function FormInput({ label, value, onChange, placeholder, type = "text", textarea = false }) {
  const [focused, setFocused] = useState(false)
  
  return (
    <div className="space-y-3 group/field">
      <div className="flex items-center justify-between px-4">
        <label style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className={`text-[0.6rem] uppercase tracking-[0.25em] transition-all duration-300 ${focused ? 'text-[#c69a3a]' : 'text-midnight/30'}`}>
          {label}
        </label>
        <div className={`h-px flex-1 ml-4 transition-all duration-500 ${focused ? 'bg-[#c69a3a]/30' : 'bg-midnight/5'}`} />
      </div>
      
      {textarea ? (
        <textarea
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          rows="5"
          className="w-full rounded-[2rem] border border-midnight/5 bg-[#faf8f5] px-8 py-6 outline-none focus:border-[#c69a3a]/40 focus:ring-4 focus:ring-[#c69a3a]/5 transition-all placeholder:text-midnight/15 font-medium text-midnight resize-none shadow-sm"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full rounded-full border border-midnight/5 bg-[#faf8f5] px-8 py-5 outline-none focus:border-[#c69a3a]/40 focus:ring-4 focus:ring-[#c69a3a]/5 transition-all placeholder:text-midnight/15 font-medium text-midnight shadow-sm"
        />
      )}
    </div>
  )
}

export default function CCFGMContact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in required fields.')
      return
    }

    try {
      await submitContact(form)
      setStatus(form.prayerRequest ? 'Prayer request sent.' : 'Message sent.')
      setForm(initialForm)
    } catch (err) {
      setStatus('Submissions are temporarily unavailable.')
    }
  }

  return (
    <div className="bg-[#f8f1e4] min-h-screen">
      {/* Premium Cinematic Hero */}
      <section className="relative h-[400px] lg:h-[70vh] flex flex-col items-center justify-start pt-20 lg:justify-center lg:pt-0 overflow-hidden bg-midnight text-white z-10">
        <div className="absolute inset-0 z-0">
          <img src="/images/s1.jpg" alt="Contact Us" className="w-full h-full object-cover opacity-60 scale-105 brightness-[0.7] blur-[2px] lg:blur-none transition-all duration-[2000ms]" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/90 via-midnight/40 to-[#f8f1e4]" />
        </div>
        
        <div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#c69a3a]/30" />
              <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] tracking-[0.45em] uppercase text-[0.65rem] sm:text-[0.75rem] gold-text-shimmer">
                Global Connection
              </p>
              <span className="h-px w-10 bg-[#c69a3a]/30" />
            </div>
            <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:300}} className="text-[2.8rem] sm:text-7xl lg:text-[8rem] leading-[0.85] tracking-tighter text-white">
              We are <span className="italic text-[#f1cf78] font-medium">Listening.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <motion.section initial="hidden" animate="show" variants={staggerTight} className="px-4 pb-24 -mt-20 relative z-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Ultra-Premium Form Card */}
          <motion.div variants={fadeScale} className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden bg-white shadow-[0_50px_120px_rgba(0,0,0,0.1)] border border-white p-8 sm:p-16 lg:p-20 group">
             <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-[#c69a3a]/5 via-transparent to-white/5" />
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#c69a3a] to-transparent" />

             <div className="space-y-12 relative z-10">
               <div className="space-y-6">
                 <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-5xl lg:text-7xl text-midnight tracking-tight italic leading-none">
                   How can we <span className="text-[#c69a3a] not-italic">serve you?</span>
                 </h2>
                 <p className="text-midnight/40 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
                   Whether you have a question, a prayer request, or simply wish to connect, our heart is open to you.
                 </p>
               </div>

               <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                     <FormInput 
                       label="Full Name" 
                       value={form.name} 
                       onChange={(e) => setForm({...form, name: e.target.value})} 
                       placeholder="Enter your name" 
                     />
                     <FormInput 
                       label="Email Address" 
                       type="email"
                       value={form.email} 
                       onChange={(e) => setForm({...form, email: e.target.value})} 
                       placeholder="email@example.com" 
                     />
                  </div>
                  
                  <FormInput 
                    label="Subject" 
                    value={form.subject} 
                    onChange={(e) => setForm({...form, subject: e.target.value})} 
                    placeholder="What is this regarding?" 
                  />

                  <FormInput 
                    label="Your Message" 
                    textarea
                    value={form.message} 
                    onChange={(e) => setForm({...form, message: e.target.value})} 
                    placeholder="How can we help or pray for you?" 
                  />

                  <div className="flex items-center gap-6 py-4">
                    <label className="flex items-center gap-4 cursor-pointer group/check">
                      <div className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${form.prayerRequest ? 'bg-[#c69a3a] border-[#c69a3a] shadow-lg shadow-[#c69a3a]/30' : 'border-midnight/10 bg-[#faf8f5]'}`}>
                        {form.prayerRequest && <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                      </div>
                      <input type="checkbox" className="hidden" checked={form.prayerRequest} onChange={(e) => setForm({ ...form, prayerRequest: e.target.checked })} /> 
                      <span className="text-midnight/60 font-black uppercase text-[0.65rem] tracking-[0.2em] group-hover/check:text-[#c69a3a] transition-colors">Prayer Request</span>
                    </label>
                  </div>

                  <button 
                    type="submit"
                    style={{
                      fontFamily:"'Manrope',sans-serif", fontWeight:800,
                      background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)'
                    }}
                    className="w-full rounded-full py-6 text-[0.75rem] sm:text-[0.85rem] font-black uppercase tracking-[0.25em] text-midnight shadow-[0_25px_60px_rgba(198,154,58,0.35)] hover:shadow-[0_30px_70px_rgba(198,154,58,0.55)] transition-all transform hover:-translate-y-1.5 active:scale-95 group/submit overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      Submit Your Message
                      <i className="fas fa-paper-plane text-xs transition-transform duration-500 group-hover/submit:translate-x-2 group-hover/submit:-translate-y-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/submit:translate-x-[100%] transition-transform duration-[1200ms] skew-x-12" />
                  </button>
                  {status && (
                    <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-center font-black text-[#c69a3a] uppercase tracking-widest text-xs pt-4">
                      {status}
                    </motion.p>
                  )}
               </form>
             </div>
          </motion.div>

          <motion.div variants={staggerTight} className="space-y-8">
            {/* Sidebar Cards upgraded to same standard */}
            <motion.div variants={fadeScale} className="bg-white rounded-[2.5rem] lg:rounded-[3.5rem] p-10 lg:p-14 shadow-2xl border border-white group/side">
              <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-3xl text-midnight tracking-tight mb-12 italic">Ministry <span className="text-[#c69a3a]">Hours.</span></h3>
              <div className="space-y-12">
                {ccfgmServiceTimes.map((item) => (
                  <div key={item.title} className="flex gap-8 group/item">
                    <div className="w-14 h-14 bg-[#c69a3a]/5 rounded-2xl flex items-center justify-center text-[#c69a3a] shrink-0 group-hover/item:bg-[#c69a3a] group-hover/item:text-white transition-all duration-700 shadow-sm">
                      <i className="far fa-clock text-xl" />
                    </div>
                    <div>
                      <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.6rem] uppercase tracking-[0.35em] text-[#c69a3a] mb-2">{item.title}</p>
                      <p className="font-black text-midnight text-xl leading-none mb-3">{item.time}</p>
                      <p className="text-midnight/40 text-sm leading-relaxed italic">"{item.detail}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interactive Map upgraded */}
            <motion.div variants={fadeScale} className="overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] bg-midnight shadow-2xl border-[8px] lg:border-[16px] border-white h-[400px] relative group/map">
              <iframe 
                title="Google Maps" 
                src={ccfgmSiteConfig.mapsEmbedUrl} 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1500ms] scale-105 group-hover:scale-100" 
                allowFullScreen 
                loading="lazy" 
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
              <div className="absolute top-8 left-8 z-10 px-5 py-2.5 bg-white rounded-full shadow-2xl border border-midnight/5 pointer-events-none flex items-center gap-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                 <span style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-widest text-midnight">Altar Location</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
