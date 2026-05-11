import { useEffect, useState } from 'react'

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const listener = (event) => setMatches(event.matches)
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }, [query])

  return matches
}
