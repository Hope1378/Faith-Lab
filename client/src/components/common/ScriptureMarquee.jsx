import { motion } from 'framer-motion'

const scriptures = [
  '“This house will be filled with a greater magnificence than it once knew.” — Haggai 2:9',
  '“My presence will go with you, and I will give you rest.” — Exodus 33:14',
  '“The Lord is building us together into a dwelling place for God by the Spirit.” — Ephesians 2:22',
  '“For where two or three gather in my name, there am I with them.” — Matthew 18:20',
  '“Ask, and it will be given to you; seek, and you will find.” — Matthew 7:7'
]

export default function ScriptureMarquee() {
  return (
    <div className="relative w-full py-6 bg-midnight/80 backdrop-blur-xl border-y border-gold/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
      {/* Premium Side Fades */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-64 bg-gradient-to-r from-midnight via-midnight/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-64 bg-gradient-to-l from-midnight via-midnight/60 to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        animate={{ x: [0, -2000] }}
        transition={{ 
          duration: 50, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-16 items-center"
      >
        {[...scriptures, ...scriptures, ...scriptures].map((text, idx) => (
          <span key={idx} className="flex items-center gap-10">
            <span className="text-gold/80 font-serif italic text-base sm:text-lg tracking-widest uppercase">
              {text}
            </span>
            <div className="flex items-center gap-2 text-gold/30">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 21h22L12 2zm0 3.45l8.15 14.1H3.85L12 5.45z"/>
              </svg>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
            </div>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
