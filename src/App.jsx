import React from 'react'
import MobileIntro from './components/MobileIntro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Progression from './components/Progression'

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F9F9F9] text-[#111111] flex flex-col relative selection:bg-[#111111] selection:text-[#F9F9F9]">
      {/* Mobile-Only Cinematic Intro Animation (width < 768px, exactly 2s) */}
      <MobileIntro />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Hero Section (100vh Full Viewport on Load) */}
      <div id="home" className="h-[calc(100vh-68px)] min-h-[580px] sm:min-h-[600px] w-full max-w-full flex flex-col justify-between overflow-hidden relative">
        <Hero />
      </div>

      {/* =========================================================================
          SECTION: ABOUT ME ("My Persona Map" Miro Digital Vision Board)
          ========================================================================= */}
      <About />

      {/* =========================================================================
          SECTION: FEATURED PROJECTS (Editorial Dashboard Showcase)
          ========================================================================= */}
      <Projects />

      {/* =========================================================================
          SECTION: PROGRESSION (Timeline Winding Road Showcase)
          ========================================================================= */}
      <Progression />

    </div>
  )
}


