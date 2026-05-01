import Hero from './components/Hero'
import About from './components/About'
import ChaptersGrid from './components/ChaptersGrid'
import Sources from './components/Sources'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About />
      <ChaptersGrid />
      <Sources />
      <Footer />
    </main>
  )
}
