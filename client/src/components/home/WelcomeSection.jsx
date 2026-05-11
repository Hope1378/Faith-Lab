import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../common/SectionTitle'
import { fadeUp, staggerContainer } from '../../utils/animationVariants'
import { siteConfig } from '../../utils/constants'
import './WelcomeSection.css'

export default function WelcomeSection() {
  const heartPillars = siteConfig.ourHeart?.pillars || []

  return (
    <section className="section-shell section-shell--soft welcome-heart px-6 py-12 sm:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,0.78fr)] lg:items-start">
        <div className="welcome-heart__intro space-y-8">
          <SectionTitle
            eyebrow={siteConfig.ourHeart?.eyebrow || 'Our Heart'}
            title={siteConfig.ourHeart?.title || 'A Church Family in Kidiki'}
            description={siteConfig.ourHeart?.description}
            align="left"
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="welcome-heart__statement flex flex-col gap-7"
          >
            <p>
              We are building a church family in Kidiki marked by the presence of God, devotion to Scripture, and practical love for people.
              Every gathering is designed to form steady disciples who are ready for the return of Christ and useful in His mission now.
            </p>
            <div className="rounded-2xl border border-[rgba(255,255,255,0.15)] bg-gradient-to-br from-[rgba(0,0,0,0.15)] to-transparent p-5 sm:p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <p className="font-semibold text-[1.05rem] text-[#f1eedc] leading-relaxed">
                Kidiki is our home, and as the only church in the entire village, our doors are wide open. We invite you to come, belong, and be a vital part of this mission.
              </p>
              <div className="mt-5">
                <Link to="/ministries/ffck/contact" className="inline-flex h-11 items-center justify-center rounded-full bg-[#f1eedc] px-6 text-sm font-bold text-[#352b1b] shadow-xl hover:bg-white hover:-translate-y-0.5 transition-all duration-200">
                  Join Us This Sunday
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {heartPillars.map((item, index) => (
            <motion.article 
              key={item} 
              variants={fadeUp} 
              className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow hover:border-gold/20"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/5 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  {
                    [
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>,
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    ][index]
                  }
                </div>
                <p className="text-[0.65rem] font-black tracking-widest text-gold uppercase opacity-40">
                  {['John 4:24', 'Matthew 28:19', 'Mark 16:15', 'Hebrews 10:24'][index]}
                </p>
              </div>
              
              <h3 className="text-2xl font-black text-midnight mb-3 tracking-tight">{item}</h3>
              <p className="text-sm text-midnight/60 leading-relaxed font-medium">
                {
                  [
                    'Spirit-led gatherings that keep Jesus at the center and the church anchored in prayer.',
                    'Formation through Scripture, teaching, and daily obedience across every generation.',
                    'Visible love for Kidiki and beyond through evangelism, service, and open-handed mission.',
                    'A warm church home where people are known, encouraged, and built up together.'
                  ][index]
                }
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
