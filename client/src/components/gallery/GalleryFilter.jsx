import './GalleryFilter.css'

const categories = ['All', 'Worship', 'Events', 'Outreach', 'Youth', 'Baptism', 'Conferences']

export default function GalleryFilter({ activeCategory, onChange }) {
  return <div className="flex flex-wrap gap-3">{categories.map((category) => <button key={category} type="button" onClick={() => onChange(category)} className={`rounded-full px-5 py-3 text-sm font-semibold ${activeCategory === category ? 'bg-midnight text-white' : 'bg-white text-midnight shadow-glow'}`}>{category}</button>)}</div>
}
