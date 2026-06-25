import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet-async'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Programs = lazy(() => import('./pages/Programs'))
const Innovation = lazy(() => import('./pages/Innovation'))
const Join = lazy(() => import('./pages/Join'))
const Camps = lazy(() => import('./pages/Camps'))
const Gallery = lazy(() => import('./pages/Gallery'))

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [location.pathname])

  return (
    <div className="page-shell">
      <Navbar />
      <main className={isHome ? 'site-main--home' : 'site-main--inner'}>
        <Suspense fallback={
          <div style={{ padding: '6rem 1rem', textAlign: 'center', color: 'var(--muted)' }}>
            Loading…
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/camps" element={<Camps />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Helmet>
      <Layout />
    </>
  )
}
