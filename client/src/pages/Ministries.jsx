import { ministries, ministryPhotos } from '../utils/constants'
import './Ministries.css'

export default function Ministries() {
  return <section className="px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-10"><div className="mx-auto max-w-7xl space-y-10"><div><p className="eyebrow text-bronze">Serve + Belong</p><h1 className="display-title text-5xl">Ministries with real pathways to participation.</h1></div><div className="grid gap-6 md:grid-cols-3">{ministries.map((ministry, index) => <article key={ministry.id} className="overflow-hidden rounded-[2rem] bg-white shadow-glow"><img src={ministryPhotos[index % ministryPhotos.length]} alt={ministry.name} className="h-56 w-full object-cover" /><div className="p-6"><h3 className="text-2xl font-bold">{ministry.name}</h3><p className="mt-3 text-midnight/70">{ministry.description}</p><p className="mt-4 text-sm font-semibold text-bronze">Leader: {ministry.leader}</p><p className="mt-2 text-sm text-midnight/60">{ministry.meetingTime} • {ministry.location}</p><button type="button" className="mt-6 rounded-full bg-midnight px-5 py-3 text-sm font-semibold text-white">Volunteer Signup</button></div></article>)}</div></div></section>
}
