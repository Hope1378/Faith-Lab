import { ministries } from '../../utils/constants'
import SectionTitle from '../common/SectionTitle'
import './Ministries.css'

export default function Ministries() {
  return (
    <section className="section-shell section-shell--light ministries-home px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionTitle
          eyebrow="Ministries"
          title="Places to serve, grow, and belong."
          description="Every ministry creates a practical path into worship, discipleship, and community life across the church family."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {ministries.map((ministry) => (
            <article key={ministry.id} className="ministries-home__card glass-panel rounded-[2rem] p-7">
              <p className="eyebrow text-bronze">{ministry.location}</p>
              <h3 className="mt-4 text-2xl font-bold">{ministry.name}</h3>
              <p className="mt-4 text-midnight/72">{ministry.description}</p>
              <div className="ministries-home__meta mt-5">
                <span>{ministry.meetingTime}</span>
                <strong>{ministry.leader}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
