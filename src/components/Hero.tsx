import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WordsPullUp } from './AnimatedText'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6 relative">
      {/* Container inset avec coins arrondis */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">

        {/* Banner Video */}
        <video
          src="/vagabond.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.55] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px',
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />

        {/* Navbar */}
        <Navbar />

        {/* Badge EGO - coin supérieur gauche */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-6 left-6 z-40"
        >
          <a
            href="https://www.youtube.com/@ego_yt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black/60 border border-primary/20 rounded-full px-3 py-1.5 text-[10px] sm:text-xs text-primary/70 hover:text-primary hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Caleb-dev Blog.
          </a>
        </motion.div>

        {/* Hero content — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 grid grid-cols-12 items-end gap-4">

          {/* Titre géant */}
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="font-medium leading-[0.95] tracking-[-0.05em]"
              style={{
                fontSize: 'clamp(2.5rem, 9vw, 8rem)',
                color: '#E1E0CC',
              }}
            >
              <WordsPullUp text="Comment faire" delay={0.3} />
              <br />
              <WordsPullUp
                text="disparaître"
                delay={0.5}
                className="font-serif italic text-primary/60"
              />
              <br />
              <WordsPullUp text="un corps." delay={0.7} />
            </h1>
          </div>

          {/* Colonne droite — description + CTA */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 pb-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-primary/60 text-xs sm:text-sm leading-[1.4] max-w-xs"
            >
              De la décomposition biologique à l'antimatière, en passant par la fusion stellaire et les trous noirs — un voyage scientifique au cœur de ce que signifie véritablement "disparaître".
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => document.getElementById('chapters')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 bg-primary rounded-full pl-5 pr-1.5 py-1.5 w-fit hover:gap-3 transition-all duration-300"
            >
              <span className="text-black font-medium text-sm">Lire les chapitres</span>
              <span className="bg-black rounded-full w-9 h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowRight size={16} className="text-primary" />
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
