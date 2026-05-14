import './GalleryMasonry.css'

export default function GalleryMasonry({ items, onSelect }) {
  return (
    <div className="masonry-container">
      {items.map((item, index) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(index)}
          className={`gallery-card group ${item.isWide ? 'is-wide' : ''}`}
        >
          {item.image ? (
            <div className="gallery-image-wrapper">
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
                loading="lazy"
                style={item.position ? { objectPosition: item.position } : {}}
              />
              <div className="gallery-overlay">
                <span className="gallery-view-button">View Moment</span>
              </div>
            </div>
          ) : (
            <div className="gallery-no-image">No Image</div>
          )}
          <div className="gallery-content">
            <p className="gallery-category">{item.category}</p>
            <h3 className="gallery-title">{item.title}</h3>
            {item.description && <p className="gallery-description">{item.description}</p>}
          </div>
        </button>
      ))}
    </div>
  );
}
