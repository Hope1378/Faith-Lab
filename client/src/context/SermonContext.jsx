import { createContext, useContext, useState } from 'react'

const SermonContext = createContext(null)

export function SermonProvider({ children }) {
  const [activeSpeaker, setActiveSpeaker] = useState('')
  return <SermonContext.Provider value={{ activeSpeaker, setActiveSpeaker }}>{children}</SermonContext.Provider>
}

export function useSermonContext() {
  return useContext(SermonContext)
}
