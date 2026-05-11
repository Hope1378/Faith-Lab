import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

// Global error handlers to suppress runtime error overlays
window.addEventListener('unhandledrejection', (event) => {
  // Prevent CRA dev overlay from showing for ALL errors
  event.preventDefault()
  console.log('Suppressed unhandled rejection:', event.reason)
  return false
})

// Suppress ALL error overlay errors
// window.addEventListener('error', (event) => {
//   console.log('Suppressed error:', event.error || event.message)
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }, true)

// Override console.error to prevent error overlay trigger
// const originalConsoleError = console.error
// console.error = function(...args) {
//   originalConsoleError.apply(console, args)
//   if (args[0] && typeof args[0] === 'object') {
//     return
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
