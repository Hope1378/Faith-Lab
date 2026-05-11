import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, key } = useLocation()

  useLayoutEffect(() => {
    // Force the browser to reset scroll immediately before paint
    const resetScroll = () => {
      // Disable smooth scroll temporarily to ensure instant jump
      const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior
      document.documentElement.style.scrollBehavior = 'auto'
      
      window.scrollTo(0, 0)
      if (document.documentElement) document.documentElement.scrollTop = 0
      if (document.body) document.body.scrollTop = 0

      // Revert style after a frame
      requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = originalStyle
      })
    }

    resetScroll()

    // Triple-check with small timeouts for slower rendering pages
    const t1 = setTimeout(resetScroll, 0)
    const t2 = setTimeout(resetScroll, 50)
    const t3 = setTimeout(resetScroll, 150)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [pathname, key])

  return null
}
