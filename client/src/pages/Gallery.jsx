import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import GalleryFilter from '../components/gallery/GalleryFilter'
import GalleryMasonry from '../components/gallery/GalleryMasonry'
import Lightbox from '../components/gallery/Lightbox'
import { galleryItems } from '../utils/constants'
import { fadeScale, staggerTight } from '../utils/animationVariants'
import './Gallery.css'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const filteredItems = useMemo(() => galleryItems.filter((item) => (activeCategory === 'All' || item.category === activeCategory) && item.title.toLowerCase().includes(query.toLowerCase())), [activeCategory, query])

  return (
    <motion.section initial="hidden" animate="show" variants={staggerTight} className="gallery-page px-4 pb-20 pt-12 sm:px-6 sm:pt-20 lg:px-10 lg:pt-24">
      <div className="mx-auto max-w-7xl space-y-8 lg:space-y-12">
        <motion.div variants={fadeScale} className="gallery-hero-card">
          <div className="gallery-hero-glow" />
          <div className="gallery-hero-grid">
            <div className="gallery-hero-copy">
              <div className="gallery-kicker-row">
                <span className="gallery-kicker-line" />
                <p className="gallery-kicker">Captured Glory</p>
              </div>
              <h1 className="gallery-hero-title">Glory to <span>God's Work</span></h1>
              <p className="gallery-hero-text">A living archive of worship, outreach, fellowship, and the everyday grace God is building in Kidiki Village.</p>
            </div>
            <div className="gallery-search-panel">
              <label className="gallery-search-label" htmlFor="gallery-search">Search the archive</label>
              <div className="gallery-search-shell">
                <span className="gallery-search-icon">⌕</span>
                <input id="gallery-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search gallery" className="gallery-search-input" />
              </div>
              <p className="gallery-search-count">{filteredItems.length} moments showing</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeScale}><GalleryFilter activeCategory={activeCategory} onChange={setActiveCategory} /></motion.div>
        <motion.div variants={fadeScale}><GalleryMasonry items={filteredItems} onSelect={setSelectedIndex} /></motion.div>
      </div>
      <Lightbox items={filteredItems} selectedIndex={selectedIndex} onClose={() => setSelectedIndex(-1)} onNavigate={setSelectedIndex} />
    </motion.section>
  )
}
