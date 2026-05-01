import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { WordsPullUpMultiStyle, AnimatedChars } from './AnimatedText'

function ScrollText({ text, scrollProgress }: { text: string; scrollProgress: MotionValue<number> }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    return scrollProgress.on('change', setProgress)
  }, [scrollProgress])

  return (
    <p className="text-xs sm:text-sm md:text-base leading-[1.7] max-w-2xl mx-auto">
      <AnimatedChars text={text} scrollProgress={progress} className="text-primary" />
    </p>
  )
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="about" className="bg-black py-24 px-4 md:px-6 flex justify-center">
      <div
        className="bg-[#101010] rounded-2xl md:rounded-[2rem] p-10 md:p-16 max-w-5xl w-full text-center"
        ref={ref}
      >
        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-8 font-light">
          Vulgarisation scientifique
        </p>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'La matière ne disparaît pas.', className: 'font-normal text-primary' },
              { text: 'Elle se transforme.', className: 'font-serif italic text-primary/60' },
              { text: 'Encore et encore, depuis le Big Bang.', className: 'font-normal text-primary/80' },
            ]}
          />
        </div>

        <ScrollText
          text="Depuis 13,8 milliards d'années, les atomes qui composent votre corps voyagent. Ils ont été forgés dans le coeur d'étoiles mortes bien avant que notre Soleil n'existe. Ils ont traversé des supernovas, des nuages interstellaires, la formation de la Terre, des millions d'espèces vivantes — avant d'arriver ici, arrangés de façon à former quelque chose capable de lire ces mots et de s'interroger sur sa propre disparition."
          scrollProgress={progress}
        />
      </div>
    </section>
  )
}
