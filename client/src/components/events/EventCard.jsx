import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatDate, formatTime } from '../../utils/formatters';

export default function EventCard({ event, compact = false }) {
  const [modalOpen, setModalOpen] = useState(false);

  // ESC key handler for modal
  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  const getCountdown = () => {
    const start = new Date(event.startsAt);
    const now = new Date();
    const diff = start - now;
    if (diff < 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    
    if (days === 0 && hours <= 12) {
      return (
        <div className="absolute top-4 right-4 z-30 px-3 py-1 bg-red-600 rounded-full shadow-lg border border-white/20 animate-pulse">
           <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white">Happening Soon</p>
        </div>
      );
    }
    if (days < 7) {
      return (
        <div className="absolute top-4 right-4 z-30 px-3 py-1 bg-[#c69a3a] rounded-full shadow-lg border border-white/20">
           <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white">{days}d {hours}h Remaining</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <article 
        className={`event-card flex flex-col overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] bg-white mx-auto transition-all duration-700 hover:shadow-[0_50px_100px_rgba(198,154,58,0.2)] border border-[#c69a3a]/10 hover:border-[#c69a3a]/40 group relative w-full ${compact ? 'max-w-none' : 'max-w-[500px]'}`}
      >
        {/* Elite Glass Overlay — Persistent Shimmer */}
        <div className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-white/10 via-transparent to-white/5" />
        <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent animate-shimmer pointer-events-none z-40" style={{animationDuration:'5s'}} />
        
        <div className="w-full aspect-video relative overflow-hidden bg-[#0a0806] border-b border-[#c69a3a]/10">
          {event.coverImage ? (
            <>
              {/* Cinematic Backdrop — Standardized for both desktop and phone */}
              <img 
                src={event.coverImage} 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover blur-sm opacity-40 scale-110 transition-transform duration-[6000ms] group-hover:scale-105 brightness-[0.7] contrast-[1.1]" 
              />
              {/* High-Fidelity Focal Image */}
              <img
                src={event.coverImage}
                alt={event.title}
                className="relative z-10 w-full h-full object-cover cursor-pointer transition-all duration-[2000ms] ease-out group-hover:scale-110 group-hover:brightness-110"
                onClick={() => setModalOpen(true)}
              />
              
              {/* Cinematic Atmospheric Overlays */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0a0806] via-transparent to-[#0a0806]/30 opacity-70" />
              <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,8,6,0.6)_100%)] mix-blend-multiply" />
              <div className="absolute inset-0 z-20 bg-[#c69a3a]/10 mix-blend-overlay" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#c69a3a]/30 flex items-center justify-center overflow-hidden bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(198,154,58,0.15)] group-hover:scale-110 transition-transform duration-700">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c69a3a]/20 to-transparent opacity-40" />
                  <i className="far fa-calendar-alt text-2xl lg:text-3xl text-[#c69a3a]/40 group-hover:text-[#c69a3a] transition-colors duration-700" />
               </div>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            </div>
          )}
          
          {getCountdown()}
          
          {event.featured && !getCountdown() && (
            <div className="absolute top-7 left-8 z-50 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#c69a3a] shadow-[0_0_15px_rgba(198,154,58,1)] animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c69a3a] gold-text-shimmer">Featured Encounter</p>
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col p-8 sm:p-10 lg:p-12 relative z-10">
          <div className="mb-6 lg:mb-8 flex items-center justify-between">
            <span style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="rounded-md bg-[#f8f1e4] px-4 py-1.5 text-[0.55rem] sm:text-[0.65rem] uppercase tracking-[0.3em] text-[#c69a3a] border border-[#c69a3a]/10">
              {event.category}
            </span>
            <div className="flex items-center gap-2 sm:gap-3 group/time">
               <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#faf8f5] border border-midnight/5 flex items-center justify-center text-[#c69a3a]/40 group-hover/time:border-[#c69a3a]/40 group-hover/time:text-[#c69a3a] transition-all">
                  <svg className="w-3.5 h-3.5 sm:w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                     <circle cx="12" cy="12" r="10" />
                     <polyline points="12 6 12 12 16 14" />
                  </svg>
               </div>
               <span style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-midnight/40">{formatTime(event.startsAt)}</span>
            </div>
          </div>

          <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-xl sm:text-2xl lg:text-[2.2rem] text-midnight leading-tight mb-4 lg:mb-6 group-hover:text-[#c69a3a] transition-colors tracking-tight truncate">
            <Link to={`/ministries/ffck/events/${event.slug}`}>{event.title}</Link>
          </h3>

          <div className="flex items-center gap-3 sm:gap-4 mb-6 lg:mb-8 text-midnight/60 group/loc">
             <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#faf8f5] border border-midnight/5 flex items-center justify-center text-[#c69a3a]/40 group-hover/loc:border-[#c69a3a]/40 group-hover/loc:text-[#c69a3a] transition-all">
                <svg className="w-3.5 h-3.5 sm:w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                   <circle cx="12" cy="10" r="3" />
                </svg>
             </div>
             <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-widest leading-none truncate">{event.location}</p>
          </div>

          <p className="mb-8 lg:mb-10 line-clamp-2 text-xs sm:text-base leading-relaxed text-midnight/50 font-medium italic">
            "{event.summary}"
          </p>

          <div className="flex-1" />

          <div className="flex items-center justify-between border-t border-midnight/5 pt-8 lg:pt-10">
            <div className="flex flex-col">
              <span className="text-[0.5rem] lg:text-[0.55rem] uppercase tracking-[0.4em] text-midnight/20 font-black mb-1 lg:mb-2">Sacred Date</span>
              <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-[0.2em] text-midnight whitespace-nowrap">
                {formatDate(event.startsAt)}
              </p>
            </div>
            <Link
              to={`/ministries/ffck/events/${event.slug}`}
              style={{
                fontFamily:"'Manrope',sans-serif", 
                fontWeight:800,
                background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)',
              }}
              className="group/btn relative flex items-center gap-3 lg:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-[8px] lg:text-[9px] uppercase tracking-[0.2em] text-midnight shadow-[0_15px_30px_rgba(198,154,58,0.2)] hover:shadow-[0_25px_55px_rgba(198,154,58,0.45)] transition-all transform hover:-translate-y-1 overflow-hidden whitespace-nowrap flex-shrink-0"
            >
              <span className="relative z-10">Experience Details</span>
              <svg className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
            </Link>
          </div>
        </div>
      </article>

      {/* Premium Cinematic Lightbox */}
      {modalOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0a0806]/95 backdrop-blur-xl p-4 sm:p-10"
          onClick={() => setModalOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10 bg-black">
               <img src={event.coverImage} alt={event.title} className="w-full h-full object-contain" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
            
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute -top-16 right-0 text-white/40 hover:text-[#c69a3a] transition-colors flex items-center gap-3 group"
            >
               <span style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.6rem] uppercase tracking-[0.4em]">Close Preview</span>
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c69a3a] group-hover:rotate-90 transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
               </div>
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
