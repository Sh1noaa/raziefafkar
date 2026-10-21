import React, { useState, useEffect } from 'react'
import { ArrowRight, Download, Code2, Sparkles, Moon, ChevronDown, Users, Layers, Lightbulb } from 'lucide-react'

export default function Hero() {
  const [isConnected, setIsConnected] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Calculate continuous scroll progress (0.0 at top of hero -> 1.0 when scrolled to next section)
  // When user scrolls a little bit, it slides a little bit. Full scroll to next section = fully slid off.
  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      // Threshold: distance to scroll before the solid background is 100% slid off and disappeared
      // At window.scrollY = 0, progress = 0. Around 260-350px down (towards next page), progress = 1
      const threshold = Math.max(240, window.innerHeight * 0.38)
      const currentScroll = window.scrollY || document.documentElement.scrollTop || 0
      const progress = Math.min(1, Math.max(0, currentScroll / threshold))
      setScrollProgress(progress)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // 5 Dynamic Orbiting Frosted Glass Cards (Encircling the Lego Minifigure)
  // Evenly spaced at 4.8s intervals across the 24s orbit cycle with constant velocity
  const orbitCards = [
    {
      id: 'organizations',
      icon: Users,
      iconColor: 'text-sky-600',
      badge: 'Organizations',
      desc: 'Leadership, teamwork & community',
      delay: '0s',
    },
    {
      id: 'hard-skills',
      icon: Code2,
      iconColor: 'text-neutral-800',
      badge: 'Hard Skills',
      desc: 'React 19, TypeScript, Modern UI/UX',
      delay: '-4.8s',
    },
    {
      id: 'soft-skills',
      icon: Sparkles,
      iconColor: 'text-amber-500',
      badge: 'Soft Skills',
      desc: 'Problem solving & adaptability',
      delay: '-9.6s',
    },
    {
      id: 'projects',
      icon: Layers,
      iconColor: 'text-indigo-600',
      badge: 'Projects',
      desc: 'Clean architecture & fluid web apps',
      delay: '-14.4s',
    },
    {
      id: 'creative-mind',
      icon: Lightbulb,
      iconColor: 'text-emerald-600',
      badge: 'Creative Mind',
      desc: '9-to-5 fun & playful details',
      delay: '-19.2s',
    },
  ]

  return (
    <section className="relative w-full max-w-full h-full flex flex-col justify-between pt-1 pb-3 px-3 sm:px-6 md:px-12 lg:px-20 overflow-hidden select-none">
      {/* Subtle Ambient Background Texture/Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(17, 17, 17, 0.08) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative Rotating Seal (Top Right) */}
      <div className="hidden xl:flex absolute top-3 right-12 2xl:right-24 items-center justify-center pointer-events-none z-10">
        <div className="relative w-24 h-24 flex items-center justify-center animate-[spin_24s_linear_infinite]">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[6.8px] tracking-[0.24em] uppercase font-medium fill-neutral-600">
              <textPath href="#circlePath" startOffset="0%">
                ✦ PROFESSIONAL BY DAY • PLAYFUL BY NATURE •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-neutral-800 text-xs">✦</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO CORE: HEADLINE (WITH 'E' TOGGLE BUTTON & DYNAMIC SCROLL SLIDING 'AND EXPLORE'), SUBHEADLINE, CTAS
          ========================================================================= */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center flex-none pt-2 sm:pt-4 md:pt-6">
        
        {/* Main Headline (Playfair Display) */}
        <h1 className="font-['Playfair_Display'] text-[1.85rem] xs:text-[2.15rem] sm:text-4xl md:text-5xl lg:text-[4.1rem] xl:text-[4.6rem] font-normal leading-[1.16] tracking-[-0.03em] text-[#111111] text-balance mb-3 sm:mb-3.5">
          Hello! Let&apos;s conn
          {/* Interactive Toggle Switch replacing letter 'E' in 'connect' */}
          <button
            type="button"
            onClick={() => setIsConnected(!isConnected)}
            aria-label="Toggle connection status representing letter E"
            title={isConnected ? 'Status: Connected (Letter E Active)' : 'Status: Standby'}
            className="inline-flex items-center align-middle mx-0.5 sm:mx-1 -translate-y-0.5 sm:-translate-y-1.5 w-12 xs:w-14 sm:w-16 md:w-18 h-6 xs:h-7 sm:h-8 md:h-8.5 rounded-full p-0.5 cursor-pointer transition-all duration-300 focus:outline-none border border-black/15 select-none shadow-[inset_0_2px_5px_rgba(0,0,0,0.22)] active:scale-95 bg-[#111111] relative overflow-hidden group/switch"
          >
            {/* Background rail with stylized 'E' indicator */}
            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-2.5 pointer-events-none">
              <span className={`text-[9px] xs:text-[10px] sm:text-xs font-serif font-bold tracking-wider transition-all duration-300 ${isConnected ? 'text-white/60 opacity-100 scale-100' : 'text-white/20 opacity-30 scale-90'}`}>
                E
              </span>
              <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isConnected ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]' : 'bg-neutral-600'}`} />
            </div>

            {/* Sliding Knob featuring embossed lowercase serif 'e' */}
            <span
              className={`relative z-10 w-5 xs:w-6 sm:w-7 md:w-7.5 h-5 xs:h-6 sm:h-7 md:h-7.5 rounded-full bg-white shadow-md flex items-center justify-center transition-transform duration-300 ease-out ${
                isConnected ? 'translate-x-6 xs:translate-x-7 sm:translate-x-8 md:translate-x-9' : 'translate-x-0.5'
              }`}
            >
              <span className="font-serif italic font-bold text-[11px] xs:text-xs sm:text-sm text-[#111111] leading-none select-none -translate-y-0.5">
                e
              </span>
            </span>
          </button>
          ct, <br className="hidden sm:inline" />

          {/* 'and explore': Solid black background slides to the left like rolling a carpet, 
              revealing underlying black text, while text stays strictly stationary. 
              Aligned seamlessly in line with 'with me'. */}
          <span 
            className="relative inline-flex items-center align-middle mx-1 sm:mx-2 select-none pointer-events-none cursor-default overflow-hidden rounded-xl -translate-y-0.5 sm:-translate-y-1"
          >
            {/* Layer 1: Base Black Text (Stationary, revealed in black as solid background slides off to the left) */}
            <span className="px-3.5 sm:px-4.5 py-1 sm:py-1.5 inline-flex items-center justify-center italic font-light text-[#111111] select-none pointer-events-none leading-none">
              and explore
            </span>

            {/* Layer 2: Sliding Solid Black Background (slides to the left by scrollProgress * 102%) */}
            <span
              className="absolute inset-0 rounded-xl bg-[#111111] shadow-sm flex items-center justify-center overflow-hidden pointer-events-none select-none"
              style={{
                transform: `translateX(-${scrollProgress * 102}%)`,
                opacity: Math.max(0, 1 - scrollProgress * 0.75),
                willChange: 'transform, opacity',
                transition: 'transform 0.05s linear, opacity 0.05s linear',
              }}
            >
              {/* Child White Text with Counter-Transform (+scrollProgress * 102%) so it remains 100% motionless in place */}
              <span 
                className="px-3.5 sm:px-4.5 py-1 sm:py-1.5 whitespace-nowrap italic font-light text-[#F9F9F9] pointer-events-none select-none leading-none inline-flex items-center justify-center"
                style={{
                  transform: `translateX(${scrollProgress * 102}%)`,
                  willChange: 'transform',
                  transition: 'transform 0.05s linear',
                }}
              >
                and explore
              </span>
            </span>
          </span>{' '}
          with me
        </h1>

        {/* Subheadline (Slightly larger with comfortable balanced line height) */}
        <p className="font-['Inter'] text-[13px] xs:text-[14px] sm:text-[15px] md:text-[15.5px] text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-5 font-normal text-balance">
          I&apos;m <span className="text-neutral-900 font-medium">Razief</span>. I clock in, write clean code, and meet deadlines, just like everyone else. But I also believe that the best digital experiences are made by people who haven&apos;t forgotten how to have fun. This is my little corner of the internet.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-3.5 mb-2.5 sm:mb-4 md:mb-5">
          {/* Primary CTA */}
          <a
            href="#about"
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#111111] text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-neutral-800 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Persona Map</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="/cv.pdf"
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-transparent border border-black/20 text-[#111111] text-xs sm:text-sm font-medium transition-all duration-300 hover:border-[#111111] hover:bg-black/[0.03] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* =========================================================================
          THE COMPOSITION (CENTER LEGO + 5 CONSTANT-SPEED ORBITING CARDS + ASYMMETRICAL WAVY LINES)
          ========================================================================= */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 min-h-0 flex items-center justify-center">
        
        {/* Animated Flowing Water Connecting Lines with Asymmetrical Wavy Curves (Visible on lg+ screens) */}
        <svg 
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10" 
          viewBox="0 0 1200 540" 
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="streamGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#111111" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="streamGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#111111" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.55" />
            </linearGradient>
          </defs>

          {/* LEFT CURVE: Emerges seamlessly from deep inside batik torso beneath arm (X=520, Y=360),
              curves cleanly upward, dips in a smooth zig-zag wave, and connects into top-left card */}
          {/* Base Guide Line Left */}
          <path
            d="M 520 360 C 450 375, 390 350, 340 230 C 310 130, 270 120, 245 175 C 220 220, 195 90, 180 50"
            stroke="rgba(17, 17, 17, 0.08)"
            strokeWidth="1.2"
          />
          {/* Animated Flowing Water Stroke Left */}
          <path
            d="M 520 360 C 450 375, 390 350, 340 230 C 310 130, 270 120, 245 175 C 220 220, 195 90, 180 50"
            stroke="url(#streamGradLeft)"
            strokeWidth="1.6"
            className="animate-flow-stream"
          />
          {/* Secondary Harmonic Wave Left */}
          <path
            d="M 530 380 C 460 395, 400 370, 350 250 C 320 150, 280 140, 255 195 C 230 240, 185 110, 170 70"
            stroke="rgba(17, 17, 17, 0.06)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* RIGHT CURVE: Starts deep inside Lego torso (X=680, Y=250), dips down first, swoops high, levels to card */}
          {/* Base Guide Line */}
          <path
            d="M 680 250 C 720 340, 760 380, 820 370 C 880 350, 860 80, 930 60 C 970 50, 990 65, 1020 50"
            stroke="rgba(17, 17, 17, 0.08)"
            strokeWidth="1.2"
          />
          {/* Animated Flowing Water Stroke */}
          <path
            d="M 680 250 C 720 340, 760 380, 820 370 C 880 350, 860 80, 930 60 C 970 50, 990 65, 1020 50"
            stroke="url(#streamGradRight)"
            strokeWidth="1.6"
            className="animate-flow-stream-reverse"
          />
          {/* Secondary Harmonic Wave Right */}
          <path
            d="M 720 280 C 760 370, 800 400, 850 390 C 900 370, 890 110, 950 90 C 980 80, 1000 85, 1030 70"
            stroke="rgba(17, 17, 17, 0.06)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          <circle cx="180" cy="50" r="3.5" fill="#0284c7" opacity="0.75" />
          <circle cx="1020" cy="50" r="3.5" fill="#0284c7" opacity="0.75" />
        </svg>

        {/* -------------------------------------------------------------
            OUTER FLANK CARDS (Positioned higher up & further out for ample clearance)
            ------------------------------------------------------------- */}
        
        {/* Card: Upper Left ("Off the clock") */}
        <div className="hidden lg:block absolute left-2 xl:left-6 2xl:left-10 top-[-8px] xl:top-[-12px] z-20 group">
          <div className="editorial-glass rounded-xl p-3.5 max-w-[240px] xl:max-w-[260px] transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)] group-hover:border-black/20 cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-800 border border-black/[0.06]">
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                  Off the clock
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs font-semibold text-neutral-900 mb-1 leading-snug">
              Still building side projects.
            </p>
            <p className="text-[11px] text-neutral-500 leading-snug">
              Eksplorasi ide gila, eksperimen interaksi, dan prototipe seru.
            </p>
          </div>
        </div>

        {/* Card: Upper Right ("Filosofi Kerja") */}
        <div className="hidden lg:block absolute right-2 xl:right-6 2xl:right-10 top-[-8px] xl:top-[-12px] z-20 group">
          <div className="editorial-glass rounded-xl p-3.5 max-w-[240px] xl:max-w-[260px] transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.1)] group-hover:border-black/20 cursor-pointer">
            <div className="flex items-center gap-1.5 text-neutral-400 mb-1.5">
              <span className="text-xs text-neutral-700">✦</span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Filosofi Kerja
              </span>
            </div>
            <p className="text-xs font-serif italic text-neutral-800 leading-snug">
              &ldquo;Saya kerja profesional, tapi saya bukan robot.&rdquo;
            </p>
          </div>
        </div>

        {/* -------------------------------------------------------------
            CENTER STAGE:
            - Lego Figure at z-20 (Intermediate Layer)
            - 5 Orbiting Cards at 100% Constant Speed across entire perimeter
              * z-35 when in FRONT (moving right to left across chest/shoulders)
              * z-10 when in BACK (moving left to right behind head/neck)
            ------------------------------------------------------------- */}
        <div className="relative flex items-center justify-center w-full h-full max-h-[490px] xl:max-h-[530px]">
          
          {/* Ambient Backlight Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 xs:w-80 sm:w-96 md:w-[480px] h-72 xs:h-80 sm:h-96 md:h-[480px] bg-gradient-to-b from-white/95 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

          {/* 5 Constant-Speed Orbiting Cards (Equal speed at every point, Front/Back Z-Index Sorting) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {orbitCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.id}
                  style={{ animationDelay: card.delay }}
                  className="animate-orbit-dynamic absolute pointer-events-none select-none"
                >
                  <div className="orbit-frosted-glass rounded-xl sm:rounded-2xl p-1.5 xs:p-2 sm:p-2.5 md:p-3 w-[102px] xs:w-[118px] sm:w-[165px] md:min-w-[205px]">
                    <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                      <div className="w-4 h-4 xs:w-5 xs:h-5 rounded-md bg-white/90 border border-black/[0.06] flex items-center justify-center flex-none">
                        <Icon className={`w-2.5 h-2.5 xs:w-3.5 xs:h-3.5 ${card.iconColor}`} />
                      </div>
                      <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11.5px] font-semibold text-neutral-900 tracking-tight truncate">
                        {card.badge}
                      </span>
                    </div>
                    <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-[10.5px] text-neutral-600 leading-tight line-clamp-1 sm:line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center Lego Minifigure (Slightly enlarged to fill space harmoniously without overflowing) */}
          <div className="relative z-20 w-[245px] xs:w-[290px] sm:w-[385px] md:w-[460px] lg:w-[520px] xl:w-[560px] max-h-full flex items-center justify-center pointer-events-none select-none">
            <img
              src="/lego-me.png"
              alt="Lego Minifigure waving with hand wearing Indonesian Batik shirt and ID lanyard"
              className="w-full h-auto max-h-[305px] xs:max-h-[345px] sm:max-h-[410px] md:max-h-[460px] xl:max-h-[485px] object-contain select-none pointer-events-none lego-fade-mask"
              loading="eager"
            />
            {/* Ground Contact Shadow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-48 xs:w-56 sm:w-68 md:w-76 h-4 bg-black/[0.06] blur-lg rounded-full pointer-events-none" />
          </div>

        </div>

      </div>

      {/* =========================================================================
          BOTTOM OF HERO: SOCIAL PROOF & MINIMALIST SCROLL BUTTON
          ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-2 pb-1 border-t border-black/[0.06] flex items-center justify-between gap-4 flex-none">
        
        {/* Bottom Left: Social Proof with Minimalist Monochrome Logos */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          <div className="hidden sm:flex items-center gap-5 sm:gap-6 opacity-40 hover:opacity-80 transition-opacity duration-300">
            <span className="text-xs font-bold tracking-widest text-[#111111] uppercase font-sans">
              VERTEX
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span className="text-xs font-bold tracking-wider text-[#111111] uppercase font-sans">
              ATELIER
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span className="text-xs font-semibold tracking-widest text-[#111111] uppercase font-mono">
              KINETIC
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span className="text-xs font-bold tracking-tight text-[#111111] uppercase font-serif italic">
              Studio Mono
            </span>
          </div>
        </div>

        {/* Bottom Right: Clean Scroll Down Arrow */}
        <a 
          href="#about" 
          aria-label="Scroll to About Me"
          className="group flex items-center justify-center w-7 h-7 rounded-full border border-black/15 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-[#111111] hover:bg-black/[0.04] hover:scale-105 active:scale-95"
        >
          <ChevronDown className="w-3.5 h-3.5 text-neutral-700 transition-transform duration-300 group-hover:translate-y-0.5" />
        </a>

      </div>
    </section>
  )
}
