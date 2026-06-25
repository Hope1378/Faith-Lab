import AnalyticsEvent from '../models/AnalyticsEvent.js'

export async function trackAnalyticsEvent(req, res) {
  // Analytics tracking disabled per user request
  return res.status(202).json({ ok: true })
}

export async function getAnalyticsOverview(req, res) {
  const days = Math.max(1, Math.min(90, Number(req.query.days || 30)))
  const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
  const events = await AnalyticsEvent.find({ createdAt: { $gte: since } }).sort({ createdAt: -1 }).limit(1000)

  const totals = events.reduce(
    (acc, event) => {
      acc.total += 1
      acc.byType[event.type] = (acc.byType[event.type] || 0) + 1
      acc.byName[event.name] = (acc.byName[event.name] || 0) + 1
      acc.byPath[event.path] = (acc.byPath[event.path] || 0) + 1
      return acc
    },
    { total: 0, byType: {}, byName: {}, byPath: {} }
  )

  return res.json({
    days,
    totalEvents: totals.total,
    pageViews: totals.byType.pageview || 0,
    conversions: totals.byType.conversion || 0,
    engagements: totals.byType.engagement || 0,
    topEvents: Object.entries(totals.byName)
      .sort((left, right) => right[1] - left[1])
      .slice(0, 6)
      .map(([name, count]) => ({ name, count })),
    topPages: Object.entries(totals.byPath)
      .sort((left, right) => right[1] - left[1])
      .slice(0, 6)
      .map(([path, count]) => ({ path, count }))
  })
}