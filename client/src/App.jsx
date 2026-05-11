import { Suspense, lazy, useEffect, Component } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation, Link, NavLink } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import CCFGMNavbar from './components/common/CCFGMNavbar'
import ScrollToTop from './components/common/ScrollToTop'
import { Outlet } from 'react-router-dom'
import { DonationProvider } from './context/DonationContext'
import { SermonProvider } from './context/SermonContext'
import { EventProvider } from './context/EventContext'
import useScrollPosition from './hooks/useScrollPosition'
import { trackPageView } from './services/analyticsService'

// Simple Error Boundary for Lazy components
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) { return { hasError: true } }
  componentDidCatch(error, errorInfo) { console.error('Error caught:', error, errorInfo) }
  render() {
    if (this.state.hasError) {
      return (
        <div className="px-4 py-24 text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-[#c69a3a] text-white rounded-full"
          >
            Refresh Page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

const Home = lazy(() => import('./pages/Home'))
const FFCKHome = lazy(() => import('./pages/FFCKHome'))
const Sermons = lazy(() => import('./pages/Sermons'))
const SermonDetail = lazy(() => import('./pages/SermonDetailPage'))
const Events = lazy(() => import('./pages/Events'))
const EventDetail = lazy(() => import('./pages/EventDetail'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Give = lazy(() => import('./pages/Give'))
const About = lazy(() => import('./pages/About'))
const CCFGMAbout = lazy(() => import('./pages/CCFGMAbout'))
const CCFGMContact = lazy(() => import('./pages/CCFGMContact'))
const Admin = lazy(() => import('./pages/Admin'))
const Beliefs = lazy(() => import('./pages/Beliefs'))
const Leadership = lazy(() => import('./pages/Leadership'))
const Ministries = lazy(() => import('./pages/Ministries'))
const Contact = lazy(() => import('./pages/Contact'))
const WatchLive = lazy(() => import('./pages/WatchLive'))
const CCFGMGive = lazy(() => import('./pages/CCFGMGive'))

function CCFGMLayout() {
  const location = useLocation()
  return (
    <div className="page-shell overflow-x-hidden">
      <CCFGMNavbar />
      <main className={`site-main ${location.pathname === '/' ? 'site-main--home' : 'site-main--inner'}`}>
        <Suspense fallback={<div className="px-4 py-32 text-center text-midnight/40 animate-pulse">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function FFCKLayout() {
  const location = useLocation()
  return (
    <div className="page-shell overflow-x-hidden">
      <Navbar />
      <main className={`site-main ${location.pathname.endsWith('ffck') || location.pathname.endsWith('ffck/') ? 'site-main--home' : 'site-main--inner'}`}>
        <Suspense fallback={<div className="px-4 py-32 text-center text-midnight/40 animate-pulse">Loading Faith Family Church...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Routes location={location}>
      {/* CCFGM Global Layout */}
      <Route element={<CCFGMLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<CCFGMAbout />} />
        <Route path="/contact" element={<CCFGMContact />} />
        <Route path="/give" element={<CCFGMGive />} />
      </Route>

      {/* FFCK Ministry Layout */}
      <Route path="/ministries/ffck" element={<FFCKLayout />}>
        <Route index element={<FFCKHome />} />
        <Route path="sermons" element={<Sermons />} />
        <Route path="sermons/:slug" element={<SermonDetail />} />
        <Route path="events" element={<Events />} />
        <Route path="events/:slug" element={<EventDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="give" element={<Give />} />
        <Route path="admin" element={<Admin />} />
        <Route path="beliefs" element={<Beliefs />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="ministries" element={<Ministries />} />
        <Route path="watch-live" element={<WatchLive />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  const location = useLocation()
  useScrollPosition()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return (
    <ErrorBoundary>
      <DonationProvider>
        <SermonProvider>
          <EventProvider>
            <ScrollToTop />
            <AnimatedRoutes />
          </EventProvider>
        </SermonProvider>
      </DonationProvider>
    </ErrorBoundary>
  )
}
