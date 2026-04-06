import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Materials from './components/Materials'
import Services from './components/Services'
import Network from './components/Network'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'
import Preloader from './components/Preloader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return (
    <div className="relative min-h-screen bg-slate-950 overflow-hidden">
      <Particles />
      <div className="grid-pattern fixed inset-0 pointer-events-none z-0" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Materials />
        <Services />
        <Gallery />
        <Network />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
