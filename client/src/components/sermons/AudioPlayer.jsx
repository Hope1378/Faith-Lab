import { useMemo, useState } from 'react'
import { formatDuration } from '../../utils/formatters'
import { trackEngagement } from '../../services/analyticsService'
import './AudioPlayer.css'

export default function AudioPlayer({ sermon }) {
  const [playing, setPlaying] = useState(false)
  const progress = useMemo(() => Math.min(100, Math.round((sermon.views % 1000) / 10)), [sermon.views])

  async function handleToggle() {
    const next = !playing
    setPlaying(next)

    if (next) {
      await trackEngagement('sermon_audio_play', { slug: sermon.slug, title: sermon.title })
    }
  }

  async function handleDownload() {
    await trackEngagement('sermon_audio_download', { slug: sermon.slug, title: sermon.title })
  }

  return <div className="rounded-[2rem] bg-midnight p-6 text-white"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="eyebrow text-gold">Audio Player</p><h3 className="mt-3 text-2xl font-bold">{sermon.title}</h3></div><div className="flex gap-3"><button type="button" onClick={handleToggle} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-midnight">{playing ? 'Pause' : 'Play'}</button><a href={sermon.audioUrl} download onClick={handleDownload} className="rounded-full border border-white/14 px-5 py-3 text-sm font-semibold">Download</a></div></div><div className="mt-6 h-2 overflow-hidden rounded-full bg-white/12"><div className="h-full rounded-full bg-gold transition-all" style={{ width: `${progress}%` }} /></div><div className="mt-3 flex items-center justify-between text-sm text-white/68"><span>Progress preview</span><span>{formatDuration(sermon.duration)}</span></div></div>
}
