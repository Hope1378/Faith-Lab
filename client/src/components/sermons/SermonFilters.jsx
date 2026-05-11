import './SermonFilters.css'

const categories = ['All Themes', 'Sunday Service', 'Midweek Bible Study', 'Youth & Generation', 'Prayer & Intercession', 'Special Events']
const speakers = ['All Voices', 'Pastor Rebbecca Muwanguzzi', 'Pastor Suubi Anthony', 'Bishop Joel Kikomeko', 'Guest Speakers']

export default function SermonFilters({ filters, onChange }) {
  return (
    <div className="mb-12 grid gap-8 rounded-[2.5rem] lg:rounded-[4rem] bg-white p-8 lg:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-midnight/5 lg:grid-cols-3">
      <div className="space-y-4 group">
        <div className="flex items-center gap-3 px-4">
           <i className="fas fa-layer-group text-[10px] text-[#c69a3a]/40 group-focus-within:text-[#c69a3a]" />
           <label style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-[0.3em] text-midnight/30 group-focus-within:text-[#c69a3a] transition-colors">
             Ministry Theme
           </label>
        </div>
        <div className="relative">
          <select 
            value={filters.category === '' ? 'All Themes' : filters.category} 
            onChange={(event) => onChange({ ...filters, category: event.target.value === 'All Themes' ? '' : event.target.value })} 
            className="w-full rounded-2xl border border-midnight/5 bg-[#faf8f5] px-8 py-5 outline-none transition-all focus:border-[#c69a3a]/40 focus:ring-4 focus:ring-[#c69a3a]/5 font-black text-midnight appearance-none cursor-pointer"
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23c69a3a\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'right 2rem center', 
              backgroundSize: '1.2rem' 
            }}
          >
            {categories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-4 group">
        <div className="flex items-center gap-3 px-4">
           <i className="fas fa-microphone-alt text-[10px] text-[#c69a3a]/40 group-focus-within:text-[#c69a3a]" />
           <label style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-[0.3em] text-midnight/30 group-focus-within:text-[#c69a3a] transition-colors">
             Message Speaker
           </label>
        </div>
        <div className="relative">
          <select 
            value={filters.speaker === '' ? 'All Voices' : filters.speaker} 
            onChange={(event) => onChange({ ...filters, speaker: event.target.value === 'All Voices' ? '' : event.target.value })} 
            className="w-full rounded-2xl border border-midnight/5 bg-[#faf8f5] px-8 py-5 outline-none transition-all focus:border-[#c69a3a]/40 focus:ring-4 focus:ring-[#c69a3a]/5 font-black text-midnight appearance-none cursor-pointer"
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23c69a3a\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'right 2rem center', 
              backgroundSize: '1.2rem' 
            }}
          >
            {speakers.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>

      <div className="space-y-4 group">
        <div className="flex items-center gap-3 px-4">
           <i className="fas fa-sort-amount-down text-[10px] text-[#c69a3a]/40 group-focus-within:text-[#c69a3a]" />
           <label style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-[0.65rem] uppercase tracking-[0.3em] text-midnight/30 group-focus-within:text-[#c69a3a] transition-colors">
             Archive Order
           </label>
        </div>
        <div className="relative">
          <select 
            value={filters.sort} 
            onChange={(event) => onChange({ ...filters, sort: event.target.value })} 
            className="w-full rounded-2xl border border-midnight/5 bg-[#faf8f5] px-8 py-5 outline-none transition-all focus:border-[#c69a3a]/40 focus:ring-4 focus:ring-[#c69a3a]/5 font-black text-midnight appearance-none cursor-pointer"
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23c69a3a\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'right 2rem center', 
              backgroundSize: '1.2rem' 
            }}
          >
            <option value="recent">Most Recent Messages</option>
            <option value="popular">Most Impactful Messages</option>
            <option value="oldest">Historical Messages</option>
          </select>
        </div>
      </div>
    </div>
  )
}
