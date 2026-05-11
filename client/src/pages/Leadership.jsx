import LeadershipCard from '../components/about/LeadershipCard'
import { leaders } from '../utils/constants'
import './Leadership.css'

export default function Leadership() {
  return <section className="px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-10"><div className="mx-auto max-w-7xl space-y-10"><div><p className="eyebrow text-bronze">Leadership</p><h1 className="display-title text-5xl">People who steward vision with integrity.</h1></div><div className="grid gap-6 md:grid-cols-2">{leaders.map((leader) => <LeadershipCard key={leader.id} leader={leader} />)}</div></div></section>
}
