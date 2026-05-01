import { motion } from 'framer-motion'

const NAV_ITEMS = ['Chapitres', 'À propos', 'Sources', 'Crédits EGO']

const SCROLL_IDS: Record<string, string> = {
  'Chapitres': 'chapters',
  'À propos': 'about',
  'Sources': 'sources',
  'Crédits EGO': 'credits',
}

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-10"
      >
        {NAV_ITEMS.map(item => (
          <button
            key={item}
            onClick={() => scrollTo(SCROLL_IDS[item])}
            className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap transition-colors duration-200"
            style={{ color: 'rgba(225,224,204,0.8)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E1E0CC')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(225,224,204,0.8)')}
          >
            {item}
          </button>
        ))}
      </motion.div>
    </div>
  )
}
