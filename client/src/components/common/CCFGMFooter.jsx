import { Link } from 'react-router-dom'
import { ccfgmActionNavigation as actionNavigation, ccfgmPrimaryNavigation as primaryNavigation, ccfgmSiteConfig as siteConfig } from '../../utils/ccfgmConstants'
import './Footer.css'

export default function CCFGMFooter() {
  const footerActions = actionNavigation.filter((item) => item.to !== '/admin')
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-shell mt-0 px-4 pb-12 pt-0 text-white sm:px-6 lg:px-10">
      <div className="footer-quote-bar mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <p className="footer-quote-text">
            "A global altar of prayer, uniting hearts across continents in the singular pursuit of God's presence."
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-16">
        <div className="footer-grid grid gap-8 lg:grid-cols-[1.3fr_0.85fr_0.85fr]">
          <section className="footer-panel footer-panel-brand p-8 sm:p-10 lg:p-12">
            <div className="mb-8">
              <p className="footer-brand-location mb-2">Global Network</p>
              <h3 className="display-title text-4xl sm:text-5xl">{siteConfig.churchName}</h3>
            </div>
            <p className="footer-brand-copy mb-10 max-w-lg">{siteConfig.description}</p>
            <div className="flex flex-wrap gap-4">
              {siteConfig.socialMedia?.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="footer-chip">
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          <section className="footer-panel p-8 lg:p-10">
            <p className="footer-heading">Partner Church</p>
            <div className="space-y-4 mt-8">
              <div className="footer-service group">
                <p className="font-semibold text-midnight">The Throne Church</p>
                <p className="footer-service__time mt-2 text-sm opacity-60">Concord, California</p>
              </div>
              <div className="footer-service group">
                <p className="font-semibold text-midnight">Every Sunday Service</p>
                <p className="footer-service__time mt-2 text-sm opacity-60">12:00 PM - 2:00 PM (PST)</p>
              </div>
            </div>
            <div className="footer-contact footer-contact-card mt-8 space-y-3 rounded-3xl p-6 text-sm">
              <p className="font-bold text-white/80">3425 Concord Blvd.</p>
              <p className="text-gold/80">{siteConfig.email}</p>
              <p>Concord, CA 94519, USA</p>
            </div>
          </section>

          <section className="footer-panel p-8 lg:p-10">
            <p className="footer-heading">Explore</p>
            <div className="grid grid-cols-1 gap-3 mt-8">
              {[...primaryNavigation.filter(item => item.to), ...footerActions].map((item) => (
                <Link key={item.to} to={item.to} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="footer-visit-card mt-10 p-6 lg:p-8">
              <p className="footer-visit-card__eyebrow uppercase">Visit Us</p>
              <p className="footer-visit-card__title mt-4 text-xl">The Throne</p>
              <p className="footer-visit-card__copy mt-3">Anchoring the ministry in the heart of Concord, California.</p>
            </div>
          </section>
        </div>

        <div className="footer-base flex flex-col items-center text-center gap-6 pt-12 pb-4 text-[0.75rem] uppercase tracking-widest md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {currentYear} {siteConfig.churchName}. All rights reserved.</p>
          <div className="hidden sm:flex gap-8 mobile-hide-legal">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
