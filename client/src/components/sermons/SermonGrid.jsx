import SermonCard from './SermonCard'
import './SermonGrid.css'

export default function SermonGrid({ sermons, onOpenBible }) {
  const safeSermons = Array.isArray(sermons) ? sermons : []

  return (
    <div className="sermon-grid grid items-stretch gap-8 justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto max-w-6xl">
      {safeSermons.map((sermon) => (
        <SermonCard key={sermon.slug} sermon={sermon} onOpenBible={onOpenBible} singleLineFooter compactFooter />
      ))}
      {!safeSermons.length && (
        <div className="col-span-full py-20 text-center">
          <p className="text-midnight/40 font-medium">No sermons found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
