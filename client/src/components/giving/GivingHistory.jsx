import { givingHistory } from '../../utils/constants'
import { formatCurrency, formatDate } from '../../utils/formatters'
import './GivingHistory.css'

export default function GivingHistory() {
  return (
    <section className="rounded-[2.5rem] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-midnight/5 relative overflow-hidden">
      <p className="eyebrow text-bronze">Legacy of Stewardship</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight">Your impact at a glance.</h2>
      
      <div className="mt-8 space-y-4">
        {givingHistory.map((item) => (
          <div 
            key={item.id} 
            className="flex items-center justify-between gap-4 rounded-2xl bg-sand/50 p-5 border border-white transition-all hover:bg-sand hover:shadow-sm"
          >
            <div className="space-y-1">
              <p className="font-display text-lg font-bold text-midnight leading-none">{item.fund}</p>
              <p className="text-[0.7rem] uppercase tracking-widest text-midnight/40 font-bold">{formatDate(item.date)}</p>
            </div>
            <div className="text-right">
              <p className="font-display text-xl font-bold text-bronze">{formatCurrency(item.amount)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-bronze/5 blur-3xl rounded-full" />
    </section>
  )
}
