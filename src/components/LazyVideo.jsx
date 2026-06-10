import { useEffect, useRef, useState } from 'react'

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

  return (
    <video
      ref={ref}
      src={shouldLoad ? src : undefined}
      preload={shouldLoad ? 'metadata' : 'none'}
      autoPlay
      muted
      loop
      playsInline
      className={className}
      {...props}
    />
  )
}
