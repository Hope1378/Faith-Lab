import { useMemo, useState } from 'react'
import { formatCurrency } from '../../utils/formatters'
import './TithingCalculator.css'

export default function TithingCalculator() {
  const [income, setIncome] = useState(5000)
  const [percentage, setPercentage] = useState(10)
  const total = useMemo(() => Number(income) * (Number(percentage) / 100), [income, percentage])

  return (
    <section className="rounded-[2.5rem] bg-midnight p-8 text-white shadow-2xl relative overflow-hidden border border-white/5">
      <div className="relative z-10">
        <p className="eyebrow text-gold">Financial Stewardship</p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight">Plan your partnership.</h2>
        
        <div className="mt-8 grid gap-6">
          <div className="space-y-2">
            <label className="text-[0.7rem] uppercase tracking-widest text-white/50 font-bold ml-1">Monthly Investment</label>
            <div className="relative">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gold font-bold">$</span>
              <input 
                type="number" 
                value={income} 
                onChange={(event) => setIncome(event.target.value)} 
                className="w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-5 py-4 focus:bg-white/10 focus:border-gold/50 transition-all outline-none font-bold text-lg" 
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center px-1">
              <label className="text-[0.7rem] uppercase tracking-widest text-white/50 font-bold">Generosity Goal</label>
              <span className="text-gold font-bold">{percentage}%</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={percentage} 
              onChange={(event) => setPercentage(event.target.value)}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-gold"
            />
          </div>

          <div className="mt-4 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent p-6 border border-white/5 text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gold font-black">Suggested Monthly Gift</p>
            <p className="mt-4 font-display text-5xl font-bold text-white tracking-tight">
              {formatCurrency(total)}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-32 w-32 bg-gold/5 blur-3xl rounded-full" />
    </section>
  )
}
