import './LeadershipCard.css'

export default function LeadershipCard({ leader }) {
  return (
    <article className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-80 w-full overflow-hidden">
        <div className="bokeh-container h-full w-full">
          <img src={leader.image} alt="" className="bokeh-bg" />
          <img src={leader.image} alt={leader.name} className="bokeh-subject" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="relative p-8">
        <div className="mb-4 inline-block rounded-full bg-[#c69a3a]/10 px-4 py-1">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#c69a3a]">{leader.role}</p>
        </div>
        <h3 className="display-title text-3xl font-bold text-midnight">{leader.name}</h3>
        <p className="prose-copy mt-4 text-midnight/70 leading-relaxed">{leader.bio}</p>
        
        <div className="mt-8 flex items-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-px flex-1 bg-midnight/10" />
          <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#c69a3a]">Leadership</span>
        </div>
      </div>
    </article>
  )
}
