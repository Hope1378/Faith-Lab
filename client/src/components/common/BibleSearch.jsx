import { useState } from 'react'

export default function BibleSearch({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      onSearch(query.trim())
    }
  }

  return (
    <div className="relative w-full max-w-md group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-midnight/20 transition-colors group-focus-within:text-[#c69a3a]">
        <i className="fas fa-book-open" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search scripture (e.g. John 3:16)..."
        className="w-full rounded-full border border-[#c69a3a]/20 bg-white/60 px-14 py-4 lg:py-5 pr-24 text-sm font-bold text-midnight shadow-glow outline-none backdrop-blur-md transition-all focus:border-[#c69a3a] focus:bg-white focus:ring-4 focus:ring-[#c69a3a]/10 placeholder:text-midnight/30"
      />
      <button 
        onClick={() => query.trim() && onSearch(query.trim())}
        style={{
          background: 'linear-gradient(135deg,#d4a93c 0%,#f1cf78 55%,#c69a3a 100%)'
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-5 py-2.5 lg:py-3 text-[10px] lg:text-xs font-black uppercase tracking-widest text-midnight shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        Read
      </button>
    </div>
  )
}
