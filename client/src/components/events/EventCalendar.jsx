import './EventCalendar.css'

export default function EventCalendar({ events }) {
  return (
    <div className="rounded-[3.5rem] lg:rounded-[4.5rem] bg-white p-10 lg:p-20 shadow-[0_50px_120px_rgba(0,0,0,0.08)] border border-midnight/5 overflow-hidden group relative">
       {/* Atmospheric Shimmer Overlay */}
       <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#c69a3a]/[0.02] to-transparent animate-shimmer pointer-events-none z-0" style={{animationDuration:'8s'}} />

       <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between relative z-10">
         <div className="space-y-4">
            <div className="flex items-center gap-4">
               <span className="h-px w-10 bg-[#c69a3a]" />
               <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-[0.5em] text-[#c69a3a] gold-text-shimmer">Ministry Pulse</p>
            </div>
            <h2 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-5xl lg:text-6xl text-midnight tracking-tighter leading-none">
               Sacred <span className="italic text-[#c69a3a]">Calendar.</span>
            </h2>
         </div>

       </div>

       {/* Premium Preview Stage */}
       <div className="mt-20 grid gap-10 md:grid-cols-3">
         {events.slice(0, 3).map((event) => (
           <div 
             key={event.id || event.slug} 
             className="relative overflow-hidden group/card rounded-[3rem] p-12 bg-[#faf8f5] border border-midnight/5 transition-all duration-1000 hover:shadow-[0_40px_80px_rgba(198,154,58,0.15)] hover:border-[#c69a3a]/30"
           >
              {/* Ken Burns Backdrop for Cards — Increased visibility for richer texture */}
              <div className="absolute inset-0 z-0 opacity-[0.12] group-hover/card:opacity-20 transition-opacity duration-1000">
                 <img src={event.coverImage || "/images/outreach6.jpg"} alt="" className="w-full h-full object-cover scale-110 group-hover/card:scale-100 transition-transform duration-[4000ms]" />
              </div>

              <div className="flex flex-col h-full relative z-10">
                 <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[#c69a3a] text-[0.6rem] uppercase tracking-[0.4em] mb-8">
                    {event.category}
                 </p>
                 <h3 style={{fontFamily:"'Cormorant Garamond',serif", fontWeight:700}} className="text-3xl text-midnight mb-8 leading-tight group-hover/card:text-[#c69a3a] transition-colors tracking-tight">
                    {event.title}
                 </h3>
                 <div className="flex-1" />
                 <div className="flex items-center gap-4 text-midnight/30 border-t border-midnight/5 pt-8">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-midnight/5">
                       <i className="far fa-calendar text-[10px] text-[#c69a3a]" />
                    </div>
                    <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.7rem] uppercase tracking-[0.2em]">
                       {new Date(event.startsAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                 </div>
              </div>
           </div>
         ))}
         
         {!events.length && (
            <div className="col-span-full py-24 text-center bg-[#faf8f5] rounded-[4rem] border-2 border-dashed border-midnight/10">
               <div className="w-20 h-20 rounded-full bg-white mx-auto mb-6 flex items-center justify-center border border-midnight/5">
                  <i className="far fa-calendar-times text-2xl text-midnight/20" />
               </div>
               <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-midnight/30 font-black uppercase tracking-[0.5em] text-[0.7rem]">No sacred gatherings found</p>
            </div>
         )}
       </div>
    </div>
  )
}
