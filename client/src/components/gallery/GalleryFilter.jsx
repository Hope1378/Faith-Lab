import './GalleryFilter.css'

const categories = ['All', 'Worship', 'Events', 'Outreach', 'Youth', 'Baptism', 'Conferences']

export default function GalleryFilter({ activeCategory, onChange }) {
  return <div className="gallery-filter-bar">{categories.map((category) => <button key={category} type="button" onClick={() => onChange(category)} className={`gallery-filter-button ${activeCategory === category ? 'is-active' : ''}`}>{category}</button>)}</div>
}
