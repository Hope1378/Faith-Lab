import BeliefCard from '../components/about/BeliefCard'
import { beliefs } from '../utils/constants'
import './Beliefs.css'

export default function Beliefs() {
  return <section className="px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-10"><div className="mx-auto max-w-7xl space-y-10"><div><p className="eyebrow text-bronze">Doctrine</p><h1 className="display-title text-5xl">What shapes our witness.</h1></div><div className="grid gap-6 md:grid-cols-2">{beliefs.map((belief) => <BeliefCard key={belief.id} belief={belief} />)}</div></div></section>
}
