import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CREDITS = [
  { role: 'Concept, recherches, écriture, voix', name: 'Corentin H. (Ego)', url: 'https://www.youtube.com/@ego_yt' },
  { role: 'Réalisation', name: 'Majin', url: 'https://www.youtube.com/@majinstory' },
  { role: 'Visuels 3D', name: '3dyco', url: 'https://www.youtube.com/@3dyco' },
  { role: 'Musique', name: 'Émilien Bernaux', url: 'https://lafayettestreetstudio.com/corps' },
  { role: 'Recherches', name: 'Pascal Marrot', url: 'https://pascalmarrot.weebly.com/' },
  { role: 'Miniatures', name: 'Julien Lacoue', url: 'https://www.youtube.com/@xpatate_doucex' },
  { role: 'Simulation FX 3D', name: 'Mayz', url: 'https://www.youtube.com/@mayzcreates' },
  { role: 'TouchDesigner', name: 'S4legosse', url: 'https://www.youtube.com/@s4legosse' },
  { role: 'Sound design & mix', name: 'Kitchenette', url: 'https://www.youtube.com/@kitchenette.fm' },
  { role: 'Montage', name: 'Sofianechks', url: 'https://www.youtube.com/@sofiane_chks' },
  { role: 'Color Grading', name: 'Majin', url: 'https://www.youtube.com/@majinstory' },
]

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer id="credits" className="bg-black border-t border-primary/10 py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>

        {/* Big EGO credit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="text-primary/20 text-[10px] uppercase tracking-widest mb-4">Contenu original</p>
          <a
            href="https://youtu.be/k1NsN_c4gUM"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <h2
              className="font-medium leading-[0.9] tracking-[-0.04em] text-[clamp(3rem,12vw,10rem)] text-primary/30 group-hover:text-primary/60 transition-colors duration-500"
            >
              EGO
            </h2>
          </a>
          <p className="text-primary/30 text-sm mt-4 font-serif italic">
            "Tuto : comment faire disparaître un corps." — Publié le 25 avril 2026
          </p>
          <p className="text-primary/20 text-xs mt-2">
            Tout le contenu scientifique de ce blog est basé sur et crédité à la vidéo originale d'EGO.
          </p>
        </motion.div>

        {/* Credits grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p className="text-primary/20 text-[10px] uppercase tracking-widest mb-6 text-center">Équipe de la vidéo originale</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CREDITS.map((credit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.04 }}
                className="flex flex-col gap-0.5"
              >
                <p className="text-primary/20 text-[9px] uppercase tracking-wider">{credit.role}</p>
                <a
                  href={credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary/50 text-xs hover:text-primary/80 transition-colors"
                >
                  {credit.name}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-primary/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary/15 text-[10px]">
            Blog TP — Données structurelles via JSONPlaceholder API
          </p>
          <p className="text-primary/15 text-[10px]">
            🐀 Rien ne disparaît vraiment.
          </p>
        </div>
      </div>
    </footer>
  )
}
