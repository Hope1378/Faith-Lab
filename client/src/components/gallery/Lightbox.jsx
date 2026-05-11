import { useEffect, useMemo } from 'react'
import './Lightbox.css'

export default function Lightbox({ items, selectedIndex, onClose }) {
  const item = useMemo(() => (selectedIndex >= 0 ? items[selectedIndex] : null), [items, selectedIndex])

  // Prevent background scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex >= 0) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedIndex])

  if (!item) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-midnight/80 backdrop-blur-md pt-20">
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[70vh] max-w-[85vw] rounded-2xl shadow-2xl object-contain border-4 border-white/10"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-2 text-midnight font-bold shadow-lg border border-midnight/10 hover:bg-white"
        >
          Close
        </button>
      </div>
    </div>
  )
}
