export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(value || 0))
}

export function formatDate(value) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(value))
}

export function formatTime(value) {
  return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(new Date(value))
}

export function formatDuration(seconds = 0) {
  const minutes = Math.floor(seconds / 60)
  const remaining = seconds % 60
  return `${minutes}:${String(remaining).padStart(2, '0')}`
}

export function slugToTitle(slug = '') {
  return slug.split('-').map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join(' ')
}
