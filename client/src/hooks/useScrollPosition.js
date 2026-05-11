import { useEffect } from 'react'

const STORAGE_KEY = 'radiant-grace-scroll-position'

export default function useScrollPosition() {
  useEffect(() => {
    const saved = window.sessionStorage.getItem(STORAGE_KEY)
    if (saved) {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: Number(saved), behavior: 'auto' })
      })
    }

    const onScroll = () => window.sessionStorage.setItem(STORAGE_KEY, String(window.scrollY))
    const onBeforeUnload = () => window.sessionStorage.setItem(STORAGE_KEY, String(window.scrollY))
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('beforeunload', onBeforeUnload)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('beforeunload', onBeforeUnload)
    }
  }, [])
}
