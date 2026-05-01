import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpProps {
  text: string
  className?: string
  delay?: number
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
  delay?: number
}

export function WordsPullUp({ text, className = '', delay = 0 }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.22em] pr-[0.05em]"
          initial={{ y: '100%', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function WordsPullUpMultiStyle({ segments, className = '', delay = 0 }: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const allWords: { word: string; cls: string }[] = []
  segments.forEach(seg => {
    seg.text.split(' ').forEach(word => {
      allWords.push({ word, cls: seg.className || '' })
    })
  })

  let globalIndex = 0

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {segments.map((seg, si) => (
        <span key={si} className={`inline-flex flex-wrap mr-2 ${seg.className || ''}`}>
          {seg.text.split(' ').map((word) => {
            const idx = globalIndex++
            return (
              <motion.span
                key={idx}
                className="inline-block mr-[0.22em] pr-[0.05em]"
                initial={{ y: '100%', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: delay + idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            )
          })}
        </span>
      ))}
    </span>
  )
}

interface AnimatedCharProps {
  text: string
  scrollProgress: number
  className?: string
}

export function AnimatedChars({ text, scrollProgress, className = '' }: AnimatedCharProps) {
  const chars = text.split('')
  const total = chars.length

  return (
    <span className={className}>
      {chars.map((char, i) => {
        const charProgress = i / total
        const start = charProgress - 0.1
        const end = charProgress + 0.05
        const opacity = scrollProgress < start ? 0.15
          : scrollProgress > end ? 1
          : 0.15 + ((scrollProgress - start) / (end - start)) * 0.85
        return (
          <span key={i} style={{ opacity, transition: 'opacity 0.05s linear' }}>
            {char}
          </span>
        )
      })}
    </span>
  )
}
