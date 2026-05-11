import { useState } from 'react'
import { galleryVideos } from '../../utils/constants'
import SectionTitle from '../common/SectionTitle'
import Modal from '../common/Modal'
import './VideoGallery.css'

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <section className="video-gallery pt-16">
      <SectionTitle 
        eyebrow="Cinematic Archive" 
        title="Ministry Highlights" 
        description="Experience the journey of Faith Family Church through our cinematic video collection." 
        align="left" 
      />
      
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {galleryVideos.map((video) => (
          <article 
            key={video.id} 
            className="video-card group cursor-pointer overflow-hidden rounded-[2.5rem] bg-midnight shadow-glow transition-all hover:scale-[1.02]"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="relative aspect-video overflow-hidden">
              {/* Fake play button / overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <div className="h-0 w-0 border-y-[15px] border-l-[25px] border-y-transparent border-l-white ml-2" />
                </div>
              </div>
              
              <img 
                src={`https://img.youtube.com/vi/${video.embedUrl.split('/').pop()}/maxresdefault.jpg`} 
                alt={video.title}
                className="h-full w-full object-cover grayscale-[0.3] transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
            </div>
            
            <div className="p-8 text-white">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-bronze" />
                <p className="eyebrow text-xs tracking-[0.3em] text-bronze uppercase">{video.provider}</p>
              </div>
              <h3 className="mt-4 text-3xl font-extrabold leading-tight">{video.title}</h3>
              <p className="mt-3 text-white/60 line-clamp-2">{video.description}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedVideo && (
        <Modal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)}>
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <iframe 
              title={selectedVideo.title} 
              src={`${selectedVideo.embedUrl}?autoplay=1`} 
              className="h-full w-full" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen 
            />
          </div>
        </Modal>
      )}
    </section>
  )
}
