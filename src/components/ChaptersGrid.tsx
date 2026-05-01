import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { WordsPullUpMultiStyle } from './AnimatedText'
import type { Chapter } from '../types'
import { CHAPTERS } from '../data/chapters'
import { usePosts } from '../hooks/useJsonPlaceholder'
import PostModal from './PostModal'

const TAGS_PREVIEW: Record<number, string[]> = {
  1: ['Autolyse cellulaire', 'Putréfaction bactérienne', 'Datation légale'],
  2: ['800 – 1 000 °C', 'Phosphate de calcium', '2 à 3,5 kg de résidus'],
  3: ['NaOH / KOH', '150 – 180 °C sous pression', 'Dissolution totale'],
  4: ['Loi de Lavoisier', 'Conservation des atomes', 'Rien ne se perd'],
  5: ['6 éléments = 99%', 'Oxygène, Carbone, H₂O', '37 000 milliards de cellules'],
  6: ['923 kJ/mol', '2,3 milliards de joules', "L'eau sous tension"],
  7: ['Four à combustion', 'Four à résistance', 'Arc électrique > 3 500 °C'],
  8: ['Supernovæ', 'Big Bang nucleosynthesis', 'Étoiles mortes'],
  9: ['Annihilation totale', '8 000 trillions CHF/g', 'LHC au CERN'],
  10: ['E = mc²', '3 milliards de tonnes TNT', '200 000 bombes Hiroshima'],
  11: ['Le Gray', '9,2 gray à 33 000 km', 'Rayon de mort global'],
  12: ['Horizon des événements', "Paradoxe de l'information", 'Rayonnement de Hawking'],
}

interface CardProps {
  chapter: Chapter
  index: number
  onOpen: (ch: Chapter, postId: number) => void
  postId: number
}

function ChapterCard({ chapter, index, onOpen, postId }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-[#111] rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group hover:bg-[#161616] transition-colors duration-300 border border-white/[0.03]"
      onClick={() => onOpen(chapter, postId)}
    >
      {/* Number tag */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-primary/30 tracking-widest uppercase">{chapter.number}</span>
        <span className="text-[9px] text-primary/20 uppercase tracking-wider">{chapter.tag}</span>
      </div>

      {/* Title */}
      <h3 className="text-primary text-base md:text-lg font-medium leading-tight">
        {chapter.title}
      </h3>

      {/* Subtitle italic */}
      <p className="font-serif italic text-primary/40 text-xs leading-[1.5]">
        {chapter.subtitle}
      </p>

      {/* Checklist items */}
      <ul className="space-y-2 flex-1">
        {(TAGS_PREVIEW[chapter.id] || []).map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check size={12} className="text-primary mt-0.5 flex-shrink-0" />
            <span className="text-gray-500 text-xs">{item}</span>
          </li>
        ))}
      </ul>

      {/* Learn more */}
      <div className="flex items-center gap-1.5 text-primary/50 group-hover:text-primary transition-colors duration-300 text-xs font-medium pt-2">
        <span>Lire le chapitre</span>
        <ArrowRight size={12} className="-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </div>
    </motion.div>
  )
}

export default function ChaptersGrid() {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null)
  const [activePostId, setActivePostId] = useState<number | null>(null)
  const { posts, loading } = usePosts()

  const handleOpen = (ch: Chapter, postId: number) => {
    setActiveChapter(ch)
    setActivePostId(postId)
  }

  return (
    <>
      <section id="chapters" className="min-h-screen bg-black py-24 px-4 md:px-6 relative overflow-hidden">
        {/* Noise bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary/30 text-[10px] uppercase tracking-widest mb-6">
              12 chapitres — Basé sur la vidéo EGO
            </p>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-3xl mx-auto">
              <WordsPullUpMultiStyle
                segments={[
                  { text: 'Douze façons de comprendre', className: 'text-primary' },
                  { text: "ce qu'il reste de vous.", className: 'font-serif italic text-primary/50' },
                ]}
              />
              <br />
              <WordsPullUpMultiStyle
                delay={0.3}
                segments={[
                  { text: 'La matière est éternelle.', className: 'text-gray-500' },
                  { text: 'Vous, non.', className: 'text-gray-600 font-serif italic' },
                ]}
              />
            </div>
          </div>

          {/* API status badge */}
          <div className="flex justify-center mb-10">
            <span className="text-[10px] text-primary/20 border border-primary/10 rounded-full px-3 py-1">
              {loading ? '⏳ Chargement données JSONPlaceholder...' : `✓ ${posts.length} posts chargés depuis jsonplaceholder.typicode.com`}
            </span>
          </div>

          {/* 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CHAPTERS.map((chapter, i) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                index={i}
                postId={posts[i]?.id ?? i + 1}
                onOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </section>

      <PostModal
        chapter={activeChapter}
        postId={activePostId}
        onClose={() => { setActiveChapter(null); setActivePostId(null) }}
      />
    </>
  )
}
