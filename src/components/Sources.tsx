import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SOURCES = [
  { num: '[1]', label: 'Stages of human death', url: 'https://en.wikipedia.org/wiki/Stages_of_human_death', topic: 'Décomposition' },
  { num: '[4]', label: 'Cremation — Wikipedia', url: 'https://en.wikipedia.org/wiki/Cremation', topic: 'Crémation' },
  { num: '[5]', label: 'Alkaline hydrolysis (body disposal)', url: 'https://en.wikipedia.org/wiki/Alkaline_hydrolysis_(body_disposal)', topic: 'Dissolution alcaline' },
  { num: '[6]', label: 'Antoine Lavoisier — La Chimie', url: 'https://www.lachimie.net/index.php?page=17', topic: 'Conservation de la matière' },
  { num: '[7]', label: 'The essential metals for humans — Zoroddu et al. 2019', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0162013418306846', topic: 'Composition du corps' },
  { num: '[9]', label: 'Nucleosynthesis — Wikipedia', url: 'https://en.wikipedia.org/wiki/Nucleosynthesis', topic: 'Nucléosynthèse stellaire' },
  { num: '[10]', label: 'Big Bang nucleosynthesis', url: 'https://en.wikipedia.org/wiki/Big_Bang_nucleosynthesis', topic: "Origine de l'hydrogène" },
  { num: '[11]', label: 'Antimatter — Wikipedia', url: 'https://en.wikipedia.org/wiki/Antimatter', topic: 'Antimatière' },
  { num: '[13]', label: 'Mass–energy equivalence', url: 'https://en.wikipedia.org/wiki/Mass%E2%80%93energy_equivalence', topic: 'E = mc²' },
  { num: '[15]', label: 'Gray (unité) — Wikipedia', url: 'https://fr.wikipedia.org/wiki/Gray_(unit%C3%A9)', topic: 'Rayonnement gamma' },
  { num: '[17]', label: 'Black hole — Wikipedia', url: 'https://en.wikipedia.org/wiki/Black_hole', topic: 'Trou noir' },
  { num: '[18]', label: 'Black hole information paradox', url: 'https://en.wikipedia.org/wiki/Black_hole_information_paradox', topic: "Paradoxe de l'information" },
]

export default function Sources() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sources" className="bg-black py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-primary/30 text-[10px] uppercase tracking-widest mb-3"
        >
          Références
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-primary text-2xl md:text-3xl font-medium mb-12"
        >
          Sources scientifiques
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SOURCES.map((src, i) => (
            <motion.a
              key={i}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
              className="group flex gap-4 p-4 rounded-xl border border-primary/5 hover:border-primary/20 hover:bg-primary/[0.03] transition-all duration-300"
            >
              <span className="text-primary/20 text-xs font-mono flex-shrink-0 mt-0.5">{src.num}</span>
              <div>
                <p className="text-[10px] text-primary/30 uppercase tracking-wider mb-0.5">{src.topic}</p>
                <p className="text-primary/60 text-xs group-hover:text-primary/80 transition-colors leading-[1.4]">{src.label}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
