import { createContext, useContext, useState } from 'react'

const EventContext = createContext(null)

export function EventProvider({ children }) {
  const [view, setView] = useState('month')
  return <EventContext.Provider value={{ view, setView }}>{children}</EventContext.Provider>
}

export function useEventContext() {
  return useContext(EventContext)
}
