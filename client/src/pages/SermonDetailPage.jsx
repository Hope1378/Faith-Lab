import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import AudioPlayer from '../components/sermons/AudioPlayer'
import SermonCard from '../components/sermons/SermonCard'
import Loader from '../components/common/Loader'
import { fetchSermonBySlug } from '../services/sermonService'
import { trackEngagement } from '../services/analyticsService'
import { formatDate, formatDuration } from '../utils/formatters'
import { siteConfig as ffckConfig } from '../utils/constants'
import './SermonDetail.css'

export default function SermonDetailPage() {
  const { slug } = useParams()
  const [payload, setPayload] = useState(null)

  useEffect(() => {
    if (slug) {
      fetchSermonBySlug(slug).then(setPayload)
    }
  }, [slug])

  async function handleNotesDownload() {
    if (payload?.sermon) {
      await trackEngagement('sermon_notes_download', { slug: payload.sermon.slug, title: payload.sermon.title })
    }
  }

  if (!payload?.sermon) {
    return <Loader label="Loading Faith Family Message..." />
  }

  return (
    <section className="sermon-detail-theater relative min-h-screen px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24 overflow-hidden bg-[#faf8f5]">
      {/* Ultra-Premium Depth Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
         <img src={ffckConfig.heroArtwork} alt="" className="w-full h-full object-cover grayscale opacity-10 mix-blend-multiply blur-3xl animate-ken-burns" />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf8f5]/80 to-[#faf8f5]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-8 lg:space-y-16">
        {/* ── CINEMATIC HEADER (REPLICATED FROM EVENTS PAGE) ── */}
        <div className="relative rounded-[3.5rem] overflow-hidden bg-[#0a0806] shadow-2xl border border-white/5 group">
          {/* Ken Burns Image Backdrop */}
          <div className="absolute inset-0 z-0">
             <img src={payload.sermon.coverImage || "/images/outreach6.jpg"} alt="" className="w-full h-full object-cover opacity-25 scale-110 group-hover:scale-100 transition-transform duration-[6000ms] brightness-50 blur-[2px]" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/60 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806]/80 via-transparent to-[#0a0806]/80" />
             
             {/* Persistent Premium Shimmer Overlay */}
             <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" style={{animationDuration:'6s'}} />
          </div>

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between p-10 lg:p-20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#c69a3a]/40" />
                <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] tracking-[0.5em] uppercase text-[0.6rem] lg:text-[0.7rem] gold-text-shimmer">
                  {payload.sermon.category || 'Message'}
                </p>
              </div>
              <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-[2.65rem] sm:text-5xl lg:text-[5.5rem] leading-[0.95] tracking-tighter text-white whitespace-nowrap">
                {payload.sermon.title.split(' ').slice(0, -1).join(' ')} <br className="hidden sm:block" />
                <span className="italic text-[#f1cf78] font-medium sm:ml-0 ml-2">{payload.sermon.title.split(' ').slice(-1)}</span>
              </h1>
            </div>
            
            <div className="flex flex-wrap items-center gap-8 bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c69a3a]/20 flex items-center justify-center text-[#c69a3a]">
                     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 1a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /></svg>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[0.5rem] uppercase tracking-widest text-white/40 font-black leading-none mb-1">Speaker</span>
                     <span className="text-[0.8rem] font-bold text-white leading-none">{payload.sermon.speaker}</span>
                  </div>
               </div>
               <div className="w-px h-8 bg-white/10" />
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/40">
                     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[0.5rem] uppercase tracking-widest text-white/40 font-black leading-none mb-1">Released</span>
                     <span className="text-[0.8rem] font-bold text-white leading-none">{formatDate(payload.sermon.publishedAt)}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Floating Audio Interface */}
        <div className="w-full max-w-4xl mx-auto -mt-20 relative z-20 bg-white/80 backdrop-blur-3xl border border-[#c69a3a]/10 rounded-[3rem] p-8 sm:p-12 shadow-[0_40px_100px_rgba(198,154,58,0.12)]">
           <AudioPlayer sermon={payload.sermon} />
        </div>

      {/* ── THE PROGRAM: EDITORIAL CONTENT ── */}
         <div className="max-w-7xl mx-auto px-3 sm:px-6 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
               <div className="lg:col-span-8 space-y-20">
                  <div className="space-y-10">
                     <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-[#c69a3a]" />
                        <h3 style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.75rem] uppercase tracking-[0.4em] text-[#c69a3a]">Message Narrative</h3>
                     </div>
                     <p 
                       style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:500}} 
                       className="text-3xl sm:text-4xl text-midnight/90 leading-snug italic"
                     >
                       "{payload.sermon.description}"
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-midnight/5">
                     <div className="space-y-6">
                        <h4 style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.6rem] uppercase tracking-[0.3em] text-midnight/30">Vessel</h4>
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 rounded-full bg-[#0a0806] flex items-center justify-center border border-[#c69a3a]/30">
                              <svg className="w-6 h-6 text-[#c69a3a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                 <path d="M12 1a4 4 0 0 0-4 4v7a4 4 0 0 0 8 0V5a4 4 0 0 0-4-4z" />
                                 <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
                              </svg>
                           </div>
                           <p className="text-xl font-black text-midnight">{payload.sermon.speaker}</p>
                        </div>
                     </div>
                     <div className="space-y-6">
                        <h4 style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.6rem] uppercase tracking-[0.3em] text-midnight/30">Scripture Path</h4>
                        <div className="flex flex-wrap gap-2">
                           {payload.sermon.scripture.map(ref => (
                             <span key={ref} className="px-5 py-2.5 bg-[#faf8f5] border border-midnight/5 rounded-xl text-[0.7rem] font-bold text-[#c69a3a] uppercase tracking-widest">
                               {ref}
                             </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 space-y-12">
                  <div className="p-10 bg-[#faf8f5] rounded-[3rem] border border-midnight/5 space-y-10">
                     <div className="space-y-6">
                        <div className="flex items-center justify-between">
                           <span className="text-[0.6rem] font-black uppercase tracking-widest text-midnight/30">Release Date</span>
                           <span className="text-[0.75rem] font-bold text-midnight">{formatDate(payload.sermon.publishedAt)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                           <span className="text-[0.6rem] font-black uppercase tracking-widest text-midnight/30">Duration</span>
                           <span className="text-[0.75rem] font-bold text-midnight">{formatDuration(payload.sermon.duration)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                           <span className="text-[0.6rem] font-black uppercase tracking-widest text-midnight/30">Theme</span>
                           <span className="text-[0.75rem] font-bold text-[#c69a3a]">{payload.sermon.category}</span>
                        </div>
                     </div>

                     <div className="pt-8 border-t border-midnight/10 space-y-4">
                        {payload.sermon.notesUrl && (
                           <a 
                             href={payload.sermon.notesUrl}
                             onClick={handleNotesDownload}
                             className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-midnight text-white text-[0.65rem] font-black uppercase tracking-widest hover:bg-[#c69a3a] transition-all duration-500 shadow-xl shadow-midnight/10"
                           >
                              Download Notes PDF
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                           </a>
                        )}
                        <Link 
                          to="/ministries/ffck/sermons"
                          className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-white border border-midnight/10 text-midnight text-[0.65rem] font-black uppercase tracking-widest hover:border-[#c69a3a] transition-all duration-500"
                        >
                           Return to Archive
                        </Link>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-20 pt-20 border-t border-midnight/5">
               <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-8 mb-16 overflow-visible">
                  <div className="space-y-4 text-center sm:text-left">
                     <div className="flex items-center justify-center sm:justify-start gap-3">
                        <span className="h-px w-8 bg-[#c69a3a]" />
                        <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] tracking-[0.4em] uppercase text-[0.65rem]">Keep Growing</p>
                     </div>
                     <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:600}} className="text-4xl sm:text-5xl text-midnight whitespace-nowrap">Encore Selection</h2>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {payload.recent.map(s => (
                    <SermonCard key={s.slug} sermon={s} singleLineFooter compactFooter />
                  ))}
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}
