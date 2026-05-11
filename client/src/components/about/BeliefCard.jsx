import './BeliefCard.css'

export default function BeliefCard({ belief }) {
  return (
    <article className="glass-panel-dark group rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c69a3a]/10 text-[#c69a3a] transition-colors group-hover:bg-[#c69a3a] group-hover:text-white">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#c69a3a]">Doctrine</p>
      <h3 className="mt-4 text-2xl font-black text-white tracking-tight">{belief.title}</h3>
      <p className="mt-4 text-white/70 leading-relaxed text-sm font-medium">{belief.description}</p>
      {belief.scripture && (
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-6 bg-[#c69a3a]/30" />
          <p className="text-xs font-bold italic text-[#f1cf78]/80">{belief.scripture}</p>
        </div>
      )}
    </article>
  )
}
