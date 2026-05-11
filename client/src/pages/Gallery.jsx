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
      <div className="mx-auto max-w-7xl space-y-8">
        <motion.div variants={fadeScale} className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow text-bronze">Captured Glory</p>
            <h1 className="display-title text-3xl sm:text-4xl lg:text-5xl">A living archive of worship and mission.</h1>
          </div>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search gallery" className="w-full rounded-full border border-midnight/10 bg-white px-5 py-3 outline-none lg:max-w-sm" />
        </motion.div>
        <motion.div variants={fadeScale}><GalleryFilter activeCategory={activeCategory} onChange={setActiveCategory} /></motion.div>
        <motion.div variants={fadeScale}><GalleryMasonry items={filteredItems} onSelect={setSelectedIndex} /></motion.div>
      </div>
      <Lightbox items={filteredItems} selectedIndex={selectedIndex} onClose={() => setSelectedIndex(-1)} onNavigate={setSelectedIndex} />
    </motion.section>
  )
}
