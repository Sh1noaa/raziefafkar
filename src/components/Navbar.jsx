import React, { useState, useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import ContactModal from './ContactModal'

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home')
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Progression', href: '#progression' },
  ]

  const tabRefs = useRef({})
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 4, width: 68 })

  // Update sliding indicator position on active tab change and window resize
  useEffect(() => {
    const updatePosition = () => {
      const el = tabRefs.current[activeTab]
      if (el) {
        setIndicatorStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
        })
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [activeTab])

  // Track active section on scroll to update activeTab and slide indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const sections = ['home', 'about', 'projects', 'progression']
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop - 120
          const height = el.offsetHeight
          if (scrollY >= top && scrollY < top + height) {
            const matchedName = sectionId === 'home' ? 'Home' : 
                                sectionId === 'about' ? 'About' :
                                sectionId === 'projects' ? 'Projects' : 'Progression'
            setActiveTab(matchedName)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, link) => {
    e.preventDefault()
    setActiveTab(link.name)
    const target = document.querySelector(link.href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 w-full max-w-full pt-3 pb-3 md:pt-4 md:pb-4 px-4 sm:px-6 md:px-12 lg:px-20 z-40 bg-[#F9F9F9]/85 backdrop-blur-md border-b border-black/[0.04] transition-all flex-none overflow-x-hidden">
      <nav className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Left: Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, { name: 'Home', href: '#home' })}
          className="group flex items-center gap-1.5 sm:gap-2 text-base sm:text-lg md:text-xl font-bold tracking-tight text-[#111111]"
        >
          <span>Razief F. Afkar</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] transition-transform duration-300 group-hover:scale-150 flex-none" />
        </a>

        {/* Center: Navigation Links with Smooth Sliding Black Pill */}
        <div className="relative hidden md:flex items-center gap-1 p-1 rounded-full bg-white/70 backdrop-blur-md border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] text-xs lg:text-sm font-medium">
          {/* Animated Sliding Black Pill (Glides smoothly when user clicks tabs or scrolls) */}
          <div
            className="absolute top-1 bottom-1 rounded-full bg-[#111111] shadow-sm transition-all duration-300 ease-out pointer-events-none"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />

          {navLinks.map((link) => {
            const isActive = activeTab === link.name
            return (
              <a 
                key={link.name}
                ref={(el) => (tabRefs.current[link.name] = el)}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative z-10 px-4 py-1.5 rounded-full transition-colors duration-200 select-none cursor-pointer ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-neutral-600 hover:text-[#111111]'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </div>

        {/* Right: CTA Pill Button - Opens Contact Modal */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            id="lets-talk-btn"
            onClick={() => setIsContactModalOpen(true)}
            className="group relative inline-flex items-center justify-center gap-1 sm:gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#111111] text-white text-xs md:text-sm font-medium transition-all duration-300 hover:bg-neutral-800 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Let's Talk!</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </nav>

      {/* Contact Channels Modal (WhatsApp, Instagram, GitHub) */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </header>
  )
}
