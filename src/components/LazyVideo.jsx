import { useEffect, useRef, useState } from 'react'

function playVideo(video) {
  const attempt = video.play()
  if (attempt?.catch) {
    attempt.catch(() => {})
  }
}

export default function LazyVideo({
  src,
  className,
  eager = false,
  rootMargin = '240px',
  ...props
}) {
  const ref = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(eager)

  useEffect(() => {
    if (eager || shouldLoad) return undefined

    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold: 0.01 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [eager, shouldLoad, rootMargin])

  useEffect(() => {
    if (!shouldLoad) return undefined

    const video = ref.current
    if (!video) return undefined

    const handleReady = () => playVideo(video)

    video.addEventListener('loadeddata', handleReady)
    if (video.readyState >= 2) handleReady()

    return () => video.removeEventListener('loadeddata', handleReady)
  }, [shouldLoad, src])

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      preload={shouldLoad ? 'auto' : 'none'}
      autoPlay
      muted
      loop
      playsInline
      className={className}
      {...props}
    />
  )
}
