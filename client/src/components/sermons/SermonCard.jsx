import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { formatDate } from '../../utils/formatters'
import './SermonCard.css'

export default function SermonCard({ sermon, compact = false, onOpenBible, singleLineFooter = false, compactFooter = false }) {
  const [modalOpen, setModalOpen] = useState(false)

  // ESC key handler for modal
  useEffect(() => {
    if (!modalOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setModalOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [modalOpen])

  return (
    <article 
      className={`sermon-card flex flex-col overflow-hidden rounded-[2.2rem] lg:rounded-[3rem] bg-white mx-auto transition-all duration-700 hover:shadow-[0_40px_90px_rgba(198,154,58,0.18)] border border-[#c69a3a]/10 hover:border-[#c69a3a]/40 group relative w-full ${compact ? 'max-w-none' : 'max-w-[500px]'}`}
    >
      {/* Elite Glass Overlay — Shimmers on hover */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-white/10 via-transparent to-white/5" />
      
      {/* Minimalist Atmospheric Header */}
      <div className={`w-full relative overflow-hidden bg-transparent ${compact ? 'h-[60px]' : 'h-[80px]'}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#c69a3a]/5 via-transparent to-transparent opacity-30" />
      </div>

      {/* Premium Minimalist "Featured" Indicator */}
      {sermon.featured && (
        <div className="absolute top-7 right-8 z-50 flex items-center gap-2.5 max-w-[calc(100%-4rem)]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#c69a3a] shadow-[0_0_12px_rgba(198,154,58,0.8)] animate-pulse flex-shrink-0" />
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#c69a3a] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] whitespace-nowrap overflow-hidden text-ellipsis">Featured Message</p>
        </div>
      )}

      <div className="flex-1 flex flex-col p-8 lg:p-10 relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <span style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="rounded-full bg-[#f8f1e4] px-4 py-1.5 text-[0.6rem] uppercase tracking-[0.3em] text-[#c69a3a] border border-[#c69a3a]/10">
            {sermon.category || 'Message'}
          </span>
          <div className="flex items-center gap-2 text-midnight/20">
             <svg className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" />
             </svg>
             <span style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.6rem] uppercase tracking-widest">Premium Content</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-8">
           <div className="w-14 h-14 rounded-full bg-[#0a0806] flex items-center justify-center border border-[#c69a3a]/30 group-hover:border-[#c69a3a] transition-all duration-700 overflow-hidden shadow-[0_10px_30px_rgba(198,154,58,0.15)] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#c69a3a]/20 to-transparent opacity-40" />
              <svg className="w-6 h-6 relative z-10 text-[#c69a3a]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 1a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4z" fill="currentColor" fillOpacity="0.2" />
                 <path d="M12 1a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                 <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
           </div>
           <div className="flex flex-col">
              <span style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.5rem] uppercase tracking-[0.4em] text-[#c69a3a] mb-0.5 opacity-60">Message Vessel</span>
              <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[1.05rem] text-midnight/90 tracking-tight group-hover:text-[#c69a3a] transition-colors">{sermon.speaker}</p>
           </div>
        </div>

        <div className="block mb-4">
           <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:600}} className="text-2xl text-midnight group-hover:text-[#c69a3a] transition-colors line-clamp-2">
             {sermon.title}
           </h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-8 relative z-30">
          {sermon.scripture?.map((passage) => (
            <button
              key={passage}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onOpenBible(passage);
              }}
              style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}}
              className="rounded-xl bg-[#faf8f5] px-4 py-2 text-[0.65rem] uppercase tracking-widest text-[#c69a3a] border border-[#c69a3a]/10 transition-all hover:bg-[#c69a3a] hover:text-white hover:shadow-lg hover:shadow-[#c69a3a]/20 group/tag"
            >
              <svg className="w-3 h-3 mr-2 inline-block opacity-60 group-hover/tag:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                 <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              {passage}
            </button>
          ))}
        </div>

        <div className="flex-1" />

        <div className={`flex border-t border-midnight/5 pt-8 ${singleLineFooter ? (compactFooter ? 'flex-col gap-6' : 'items-center justify-between gap-6') : 'items-center justify-between'}`}>
          <div className={`flex items-center gap-3 ${singleLineFooter ? 'min-w-0 pr-2' : ''}`}>
             <div className="w-10 h-10 rounded-full bg-[#faf8f5] border border-midnight/5 flex items-center justify-center text-[#c69a3a]/40">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                   <line x1="16" y1="2" x2="16" y2="6" />
                   <line x1="8" y1="2" x2="8" y2="6" />
                   <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
             </div>
             <div className={`flex flex-col ${singleLineFooter ? 'min-w-0' : ''}`}>
               <span className="text-[0.55rem] uppercase tracking-[0.2em] text-midnight/20 font-black mb-0.5">Released On</span>
               <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className={`text-[0.7rem] uppercase tracking-widest text-midnight/60 ${singleLineFooter ? 'whitespace-nowrap' : ''}`}>
                 {formatDate(sermon.publishedAt)}
               </p>
             </div>
          </div>
          
          <a
            href={`/ministries/ffck/sermons/${sermon.slug}`}
            style={{
              fontFamily:"'Manrope',sans-serif", 
              fontWeight:800,
              background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)',
            }}
            className={`group/btn relative flex items-center justify-center py-4 rounded-full text-[10px] uppercase tracking-[0.2em] text-midnight shadow-[0_20px_40px_rgba(198,154,58,0.25)] hover:shadow-[0_25px_55px_rgba(198,154,58,0.45)] transition-all transform hover:-translate-y-1 overflow-hidden z-40 ${singleLineFooter ? (compactFooter ? 'gap-3 px-6 w-full whitespace-nowrap' : 'gap-3 px-6 flex-shrink-0 whitespace-nowrap') : 'gap-4 px-8'}`}
          >
            <span className="relative z-10">Watch Now</span>
            <svg className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
          </a>
        </div>
      </div>
    </article>
  )
}
