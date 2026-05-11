import EventCard from './EventCard';
import './EventGrid.css';

export default function EventGrid({ events }) {
  const safeEvents = Array.isArray(events) ? events : []
  // Show exactly three cards
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {safeEvents.map((event) => (
        <EventCard key={event.id || event.slug} event={event} />
      ))}
      {!safeEvents.length && (
        <div className="col-span-full py-24 text-center bg-white rounded-[4rem] border-2 border-dashed border-midnight/5 shadow-inner">
           <div className="w-20 h-20 rounded-full bg-[#faf8f5] mx-auto mb-6 flex items-center justify-center border border-midnight/5">
              <i className="far fa-calendar-times text-2xl text-midnight/10" />
           </div>
           <p style={{fontFamily:"'Manrope',sans-serif", fontWeight:800}} className="text-midnight/30 font-black uppercase tracking-[0.5em] text-[0.7rem]">No upcoming encounters scheduled</p>
        </div>
      )}
    </div>
  );
}
