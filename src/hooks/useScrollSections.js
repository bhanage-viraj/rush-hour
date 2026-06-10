import { useLayoutEffect, useRef } from 'react'

const SECTION_COUNT = 4

export function useScrollSections(siteRef, wipeRef) {
  const activeIndex = useRef(0)

  useLayoutEffect(() => {
    const site = siteRef.current
    if (!site) return undefined

    const sections = site.querySelectorAll('main > section')
    if (!sections.length) return undefined

    sections[0].classList.add('section-active')

    const setSectionTheme = (index) => {
      for (let i = 0; i < SECTION_COUNT; i += 1) {
        site.classList.toggle(`site-section-${i}`, i === index)
      }
    }

    const playWipe = () => {
      const wipe = wipeRef.current
      if (!wipe) return

      wipe.classList.remove('page-wipe--play')
      // Force reflow so the animation can restart
      void wipe.offsetWidth
      wipe.classList.add('page-wipe--play')
    }

    setSectionTheme(0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.6) return

          const section = entry.target
          section.classList.add('section-active')

          const index = Array.from(sections).indexOf(section)
          if (index === -1 || index === activeIndex.current) return

          activeIndex.current = index
          setSectionTheme(index)
          playWipe()
        })
      },
      {
        root: site,
        threshold: [0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [siteRef, wipeRef])
}
