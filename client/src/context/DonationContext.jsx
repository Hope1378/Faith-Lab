import { createContext, useContext } from 'react'
import useDonation from '../hooks/useDonation'

const DonationContext = createContext(null)

export function DonationProvider({ children }) {
  const donation = useDonation()
  return <DonationContext.Provider value={donation}>{children}</DonationContext.Provider>
}

export function useDonationContext() {
  return useContext(DonationContext)
}
