import './Loader.css'

export default function Loader({ label = 'Loading content' }) {
  return (
    <div className="loader-shell flex flex-col items-center justify-center gap-4 rounded-[2rem] bg-white p-10 shadow-glow">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gold/30 border-t-bronze" />
      <div className="animate-shimmer h-3 w-56 rounded-full" />
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-midnight/55">{label}</p>
    </div>
  )
}
