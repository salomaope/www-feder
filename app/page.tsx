'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Benefits from './components/Benefits'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Plans />
      <Benefits />
      <FAQ />
      <Footer />
    </main>
  )
}