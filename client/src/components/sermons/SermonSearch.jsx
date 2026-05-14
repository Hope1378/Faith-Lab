import './SermonSearch.css'

export default function SermonSearch({ value, onChange }) {
  return (
    <div className="relative w-full group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-midnight/20 transition-colors group-focus-within:text-[#c69a3a]">
        <i className="fas fa-search" />
      </div>
      <input 
        value={value} 
        onChange={(event) => onChange(event.target.value)} 
        placeholder="Search by title, speaker, or keyword" 
        className="w-full h-14 lg:h-16 rounded-full border border-midnight/5 bg-white px-14 outline-none lg:max-w-md shadow-lg shadow-midnight/5 transition-all focus:border-[#c69a3a]/40 focus:ring-4 focus:ring-[#c69a3a]/5 font-medium leading-normal placeholder:text-midnight/20" 
      />
    </div>
  )
}
