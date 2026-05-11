import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function BibleModal({ passage, isOpen, onClose }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && passage) {
      setLoading(true)
      fetch(`https://bible-api.com/${encodeURIComponent(passage)}`)
        .then((res) => {
          if (!res.ok) throw new Error('Passage not found')
          return res.json()
        })
        .then((payload) => {
          setData(payload)
          setError(null)
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    } else {
      setData(null)
      setError(null)
    }
  }, [isOpen, passage])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div 
            initial={{ y: 40, opacity: 0, scale: 0.95 }} 
            animate={{ y: 0, opacity: 1, scale: 1 }} 
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[#fbf5eb] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#c69a3a]/20 bg-[#0a0806] px-8 py-6">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f1cf78] animate-pulse" />
                <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-[#f1cf78] text-3xl tracking-tight">
                  {passage}
                </h3>
              </div>
              <button 
                onClick={onClose} 
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 font-bold text-white transition-all hover:bg-[#c69a3a] hover:border-[#c69a3a] hover:rotate-90"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto px-8 py-10 bg-[#faf8f5]">
              {loading && (
                <div className="flex flex-col items-center justify-center py-12 gap-6">
                  <div className="w-16 h-16 border-4 border-[#c69a3a]/20 border-t-[#c69a3a] rounded-full animate-spin" />
                  <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-[0.4em] text-[#c69a3a] animate-pulse">Opening the Word</p>
                </div>
              )}
              {error && (
                <div className="flex flex-col items-center justify-center p-8 text-center bg-red-50 rounded-[2rem] border border-red-100">
                  <i className="fas fa-exclamation-circle text-3xl text-red-600 mb-4" />
                  <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-red-900 uppercase tracking-widest text-xs mb-2">Service Error</p>
                  <p className="text-red-700 font-medium">Sorry, we couldn't load that scripture right now.</p>
                </div>
              )}
              {data && !error && !loading && (
                <div className="space-y-8">
                  <p style={{fontFamily:"'Cormorant Garamond',serif"}} className="text-3xl sm:text-4xl leading-[1.4] text-midnight italic font-light">
                    "{data.text.trim()}"
                  </p>
                  <div className="pt-8 border-t border-midnight/5 flex items-center justify-between">
                    <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.3em] text-[#c69a3a]">
                      {data.translation_name}
                    </p>
                    <div className="h-px w-20 bg-gradient-to-r from-[#c69a3a] to-transparent opacity-30" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
