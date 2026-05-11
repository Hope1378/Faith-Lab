import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import useSermons from '../hooks/useSermons'
import SermonFilters from '../components/sermons/SermonFilters'
import SermonSearch from '../components/sermons/SermonSearch'
import SermonGrid from '../components/sermons/SermonGrid'
import BibleModal from '../components/common/BibleModal'
import BibleSearch from '../components/common/BibleSearch'
import Loader from '../components/common/Loader'
import { fadeScale, staggerTight } from '../utils/animationVariants'
import { siteConfig } from '../utils/constants'
import './Sermons.css'

export default function Sermons() {
  const [filters, setFilters] = useState({ category: '', speaker: '', search: '', sort: 'recent' })
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [activeScripture, setActiveScripture] = useState(null)
  
  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(filters.search)
    }, 400)
    return () => clearTimeout(handler)
  }, [filters.search])

  const { sermons, loading } = useSermons({ ...filters, search: debouncedSearch })

  return (
    <motion.section initial="hidden" animate="show" variants={staggerTight} className="relative min-h-screen px-4 pb-20 pt-12 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24 overflow-hidden bg-[#faf8f5]">
      <Helmet>
        <title>Sermons Archive | Faith Family Church Kidiki</title>
        <meta name="description" content="Explore the sermon archive of Faith Family Church Kidiki. Watch past messages and dive deep into the Word of God." />
      </Helmet>

      {/* Ultra-Premium Depth Layer — Adds 'Image' texture to the entire page background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
         <img src={siteConfig.heroArtwork} alt="" className="w-full h-full object-cover grayscale opacity-10 mix-blend-multiply blur-3xl animate-ken-burns" />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf8f5]/80 to-[#faf8f5]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-12 lg:space-y-24">
        {/* Cinematic Header — Enhanced with Ken Burns depth */}
        <motion.div 
          variants={fadeScale} 
          className="relative rounded-[3.5rem] overflow-hidden bg-[#0a0806] shadow-2xl border border-white/5 group"
        >
          {/* Ken Burns Image Backdrop */}
          <div className="absolute inset-0 z-0">
             <img src="/images/c6.jpg" alt="" className="w-full h-full object-cover opacity-25 scale-110 group-hover:scale-100 transition-transform duration-[6000ms] brightness-50 blur-[2px]" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-[#0a0806]/60 to-transparent" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a0806]/80 via-transparent to-[#0a0806]/80" />
             
             {/* Persistent Premium Shimmer Overlay — Kept as requested */}
             <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" style={{animationDuration:'6s'}} />
          </div>

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between p-10 lg:p-20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#c69a3a]/40" />
                <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] tracking-[0.5em] uppercase text-[0.6rem] lg:text-[0.7rem] gold-text-shimmer">
                  Sermon Archive
                </p>
              </div>
              <h1 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-[3.5rem] sm:text-6xl lg:text-[6.5rem] leading-[0.9] tracking-tighter text-white">
                The Eternal <br />
                <span className="italic text-[#f1cf78] font-medium">Message.</span>
              </h1>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <SermonSearch value={filters.search} onChange={(search) => setFilters((current) => ({ ...current, search }))} />
              <BibleSearch onSearch={setActiveScripture} />
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={fadeScale}><SermonFilters filters={filters} onChange={setFilters} /></motion.div>
        <motion.div variants={fadeScale}>{loading ? <Loader label="Loading sermons" /> : <SermonGrid sermons={sermons} onOpenBible={setActiveScripture} />}</motion.div>
      </div>
      <BibleModal passage={activeScripture} isOpen={!!activeScripture} onClose={() => setActiveScripture(null)} />
    </motion.section>
  )
}
