import React, { useState, useEffect, useRef } from 'react'
import { 
  MousePointer2, Sparkles, Award, Target, Heart, Compass, 
  Type, Square, StickyNote, PenTool, MessageSquare, 
  ChevronLeft, ChevronRight, Music, Play, Pause, 
  Flame, ShieldAlert, Layers, Crown, Pin, Check, X, 
  AlertCircle, CheckCircle2, Camera, HelpCircle, SlidersHorizontal
} from 'lucide-react'

export default function About() {
  const aboutRef = useRef(null)

  // -------------------------------------------------------------
  // STATE 1: Toolbar Visibility (Only slides in when in #about)
  // -------------------------------------------------------------
  const [isAboutVisible, setIsAboutVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('about')
      if (el) {
        const rect = el.getBoundingClientRect()
        // Visible when About section enters viewport and until user scrolls away
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25
        setIsAboutVisible(inView)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // -------------------------------------------------------------
  // STATE 2: 4 Photos Interactive Carousel / Deck
  // -------------------------------------------------------------
  const photos = [
    {
      id: 'batik',
      src: '/profile-batik.jpg',
      alt: 'Razief F. Afkar - Formal Batik Leadership',
      role: 'Young Leader & Strategic Thinker',
      subtitle: 'Formal Leadership & Character',
      tag: 'Leadership',
      color: 'bg-emerald-500',
    },
    {
      id: 'party',
      src: '/profile-party.jpg',
      alt: 'Razief F. Afkar - Playful Birthday & OSIS Spirit',
      role: 'Playful by Nature & Team Spirit',
      subtitle: 'Celebrating Milestones & Having Fun',
      tag: 'Playful Mind',
      color: 'bg-amber-500',
    },
    {
      id: 'school',
      src: '/profile-school.jpg',
      alt: 'Razief F. Afkar - SMKN 2 Purwakarta Campus Life',
      role: 'SMKN 2 Purwakarta Journey',
      subtitle: 'Exploring Tech & Lifelong Learning',
      tag: 'Tech Student',
      color: 'bg-sky-500',
    },
    {
      id: 'sporty',
      src: '/profile-sporty.jpg',
      alt: 'Razief F. Afkar - Event Management & Action',
      role: 'Event Master & Action-Oriented',
      subtitle: 'Field Operations & High Energy',
      tag: 'Action Drive',
      color: 'bg-purple-500',
    },
  ]

  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const currentPhoto = photos[activePhotoIndex]

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  // -------------------------------------------------------------
  // STATE 3: Left Toolbar Interactivity & Error Shake
  // -------------------------------------------------------------
  const [activeTool, setActiveTool] = useState('cursor')
  const [errorTool, setErrorTool] = useState(null)
  const [errorTooltip, setErrorTooltip] = useState('')

  const handleToolClick = (toolId, toolName) => {
    if (toolId === 'cursor') {
      setActiveTool('cursor')
      setErrorTool(null)
      setErrorTooltip('')
      return
    }

    // Trigger red error and shake on all tools other than cursor
    setErrorTool(toolId)
    setErrorTooltip(`Tool "${toolName}" is locked, try again!`)
    
    setTimeout(() => {
      setErrorTool(null)
      setErrorTooltip('')
    }, 1400)
  }

  // -------------------------------------------------------------
  // STATE 4: Music Player Simulation & Flip Cards
  // -------------------------------------------------------------
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [flippedChallenge1, setFlippedChallenge1] = useState(false)
  const [flippedChallenge2, setFlippedChallenge2] = useState(false)

  // -------------------------------------------------------------
  // STATE 5: "Is He Attractive??" Comedy Poll
  // -------------------------------------------------------------
  const [yesVotes, setYesVotes] = useState(1428)
  const [hasVotedYes, setHasVotedYes] = useState(false)
  const [noError, setNoError] = useState(false)

  const handleVoteYes = () => {
    if (!hasVotedYes) {
      setYesVotes((prev) => prev + 1)
      setHasVotedYes(true)
    }
  }

  const handleVoteNo = () => {
    setNoError(true)
    setTimeout(() => {
      setNoError(false)
    }, 1400)
  }

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="relative w-full max-w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#F9F9F9] text-[#111111] overflow-hidden select-none"
    >
      {/* Miro Dot Grid Background Canvas */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.28]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(17, 17, 17, 0.15) 1.2px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* =========================================================================
          FLOATING MIRO TOOLBAR (Left Edge, Desktop Only)
          - Slides into screen smoothly ONLY when user is at the About section
          - Slides out off-screen when user leaves About
          - Cursor: Selectable
          - Other Tools: Turn Red, Shake, and Show Error Tooltip on Click
          ========================================================================= */}
      <div 
        className={`hidden xl:flex fixed left-5 top-1/2 -translate-y-1/2 flex-col items-center gap-2 p-2 rounded-2xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.08)] z-50 transition-all duration-500 ease-out ${
          isAboutVisible
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : '-translate-x-32 opacity-0 pointer-events-none'
        }`}
      >
        {/* Tool: Cursor (Selection Tool - Allowed) */}
        <button
          type="button"
          onClick={() => handleToolClick('cursor', 'Select')}
          title="Select Tool (Active)"
          className={`relative group w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
            activeTool === 'cursor'
              ? 'bg-[#111111] text-white shadow-sm'
              : 'hover:bg-neutral-100 text-neutral-600'
          }`}
        >
          <MousePointer2 className="w-4 h-4 fill-current" />
          <span className="sr-only">Select tool</span>
        </button>

        {/* Locked Tools with Error Shake */}
        {[
          { id: 'type', name: 'Text', icon: Type },
          { id: 'sticky', name: 'Sticky Note', icon: StickyNote },
          { id: 'square', name: 'Shapes', icon: Square },
          { id: 'pen', name: 'Pen & Draw', icon: PenTool },
          { id: 'comment', name: 'Comments', icon: MessageSquare },
        ].map((tool) => {
          const Icon = tool.icon
          const isError = errorTool === tool.id

          return (
            <div key={tool.id} className="relative">
              <button
                type="button"
                onClick={() => handleToolClick(tool.id, tool.name)}
                title={tool.name}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  isError
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30 animate-shake-error border border-rose-600'
                    : 'hover:bg-neutral-100 text-neutral-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="sr-only">{tool.name}</span>
              </button>

              {/* Red Error Tooltip Pop-up */}
              {isError && (
                <div className="absolute left-12 top-1/2 -translate-y-1/2 z-50 whitespace-nowrap px-3 py-1.5 rounded-xl bg-rose-600 text-white text-[11px] font-mono font-semibold shadow-lg shadow-rose-600/30 flex items-center gap-1.5 pointer-events-none">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>{errorTooltip}</span>
                  {/* Arrow pointing to button */}
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-rose-600 rotate-45" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* =========================================================================
            1. SECTION HEADER (Top Center, Playfair Display)
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-black/[0.08] shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-600">
              Interactive Whiteboard • Miro Vision Board
            </span>
          </div>

          {/* Title with Miro Yellow Highlighter Brush Effect */}
          <div className="relative inline-block mb-3">
            <span 
              className="absolute -inset-x-4 inset-y-1 bg-[#FDE047]/65 -rotate-1 rounded-sm -z-10"
              style={{
                clipPath: 'polygon(0% 12%, 100% 2%, 98% 92%, 2% 98%)'
              }}
            />
            <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] text-[#111111] px-2">
              My Persona Map
            </h2>
          </div>

          <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-neutral-500 font-normal leading-relaxed text-balance">
            A visual breakdown of who I am, what I do, and what drives me.
          </p>
        </div>

        {/* =========================================================================
            PERSONA BOARD CANVAS (Miro Workshop Grid)
            ========================================================================= */}
        <div className="relative rounded-3xl bg-white/60 border border-black/[0.07] p-5 sm:p-7 lg:p-10 shadow-[0_12px_45px_rgba(0,0,0,0.03)] backdrop-blur-sm">

          {/* Collaborator Cursors with Miro Tags */}
          <div className="hidden md:flex absolute -top-4 left-1/4 items-center gap-1.5 pointer-events-none z-30">
            <MousePointer2 className="w-4 h-4 fill-[#111111] text-[#111111] drop-shadow-sm -rotate-45" />
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#111111] text-white shadow-md">
              Razief
            </span>
          </div>

          <div className="hidden lg:flex absolute top-10 left-[46%] items-center gap-1.5 pointer-events-none z-30">
            <MousePointer2 className="w-4 h-4 fill-[#0284C7] text-[#0284C7] drop-shadow-sm -rotate-45" />
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#0284C7] text-white shadow-md">
              Strategist
            </span>
          </div>

          <div className="hidden md:flex absolute top-[44%] right-[24%] items-center gap-1.5 pointer-events-none z-30">
            <MousePointer2 className="w-4 h-4 fill-[#8B5CF6] text-[#8B5CF6] drop-shadow-sm -rotate-45" />
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#8B5CF6] text-white shadow-md">
              Leader
            </span>
          </div>

          <div className="hidden lg:flex absolute bottom-24 right-12 items-center gap-1.5 pointer-events-none z-30">
            <MousePointer2 className="w-4 h-4 fill-[#10B981] text-[#10B981] drop-shadow-sm -rotate-45" />
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-[#10B981] text-white shadow-md">
              Explorer
            </span>
          </div>

          {/* MAIN GRID: Left Photo & Description + Right Sticky Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start">
            
            {/* =========================================================================
                COLUMN LEFT (5 Cols):
                - Smooth Viewfinder 4-Photo Deck/Carousel
                - CARD A (Brief Description - Yellow)
                - Floating Behind-The-Scenes Polaroid
                ========================================================================= */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Photo Frame Card (With Ultra-Smooth Viewfinder Carousel) */}
              <div className="group relative rounded-3xl bg-white p-4 sm:p-5 border border-black/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                
                {/* Persona Header with Refined Vector Icon Badge */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-neutral-900 text-white flex items-center justify-center shadow-xs">
                      <Crown className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800">
                      Razief F. Afkar
                    </span>
                  </div>
                  {/* Active Photo Counter */}
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500 border border-black/[0.05]">
                    {activePhotoIndex + 1} / {photos.length}
                  </span>
                </div>

                {/* Main Photo Viewfinder Container (Smooth Crossfade & Decorative Framing) */}
                <div 
                  className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 shadow-inner group/photo cursor-pointer"
                  onClick={nextPhoto}
                  title="Click to flip to next photo!"
                >
                  {/* Crossfading Image Stack */}
                  {photos.map((p, idx) => (
                    <div
                      key={p.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        idx === activePhotoIndex
                          ? 'opacity-100 scale-100 pointer-events-auto'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <img
                        src={p.src}
                        alt={p.alt}
                        className="object-cover w-full h-full rounded-2xl"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  ))}
                  
                  {/* Viewfinder Decorative Framing Overlays (Designer Studio Aesthetic) */}
                  {/* Top Left Bracket */}
                  <div className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-white/60 pointer-events-none" />
                  {/* Top Right Bracket */}
                  <div className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-white/60 pointer-events-none" />
                  {/* Bottom Left Bracket */}
                  <div className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-white/60 pointer-events-none" />
                  {/* Bottom Right Bracket */}
                  <div className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-white/60 pointer-events-none" />

                  {/* Top HUD Tag */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[9.5px] font-mono text-white/90 border border-white/15 flex items-center gap-1.5 pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span>REC • FOCUS 4K</span>
                  </div>

                  {/* Subtle Gradient Overlay for Badge Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none rounded-2xl" />

                  {/* Required Badge over Photo with Smooth Transition */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col items-center text-center gap-1.5 pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md text-[#111111] text-xs sm:text-[13px] font-semibold tracking-tight shadow-[0_8px_20px_rgba(0,0,0,0.25)] border border-white/60">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>{currentPhoto.role}</span>
                    </span>
                    <span className="text-[11px] font-mono text-white/95 drop-shadow-md">
                      {currentPhoto.subtitle}
                    </span>

                    {/* Progress Indicator Dots */}
                    <div className="flex items-center gap-1.5 mt-1">
                      {photos.map((_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === activePhotoIndex
                              ? 'w-6 bg-white shadow-sm'
                              : 'w-1.5 bg-white/40'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Glassmorphism Navigation Arrows on Photo */}
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                    aria-label="Previous photo"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                    aria-label="Next photo"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center shadow-md backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 4 Interactive Photo Thumbnails / Badges */}
                <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between gap-1.5">
                  {photos.map((p, idx) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`flex-1 flex flex-col items-center py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer ${
                        idx === activePhotoIndex
                          ? 'bg-neutral-900 text-white shadow-sm scale-102 font-medium'
                          : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider">
                        {p.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CARD A: Brief Description (Yellow Sticky Note) */}
              <div className="relative group transition-all duration-300 hover:z-30">
                <div className="relative rounded-2xl p-5 sm:p-6 bg-[#FEF08A] text-[#111111] border border-yellow-300/80 shadow-[0_10px_25px_rgba(234,179,8,0.18)] -rotate-1 transition-all duration-300 ease-out group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-[0_16px_35px_rgba(234,179,8,0.28)]">
                  {/* Sticky Note Pin / Tape effect */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-yellow-200/90 backdrop-blur-sm border border-yellow-300/60 rounded-sm rotate-2 shadow-sm pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-yellow-900/70">
                      Brief Description
                    </span>
                    <div className="w-5 h-5 rounded-md bg-yellow-400/30 flex items-center justify-center text-yellow-900 border border-yellow-400/40">
                      <Pin className="w-3 h-3 text-yellow-900" />
                    </div>
                  </div>
                  
                  <p className="font-['Inter'] text-sm sm:text-[14.5px] leading-relaxed text-neutral-900 font-normal">
                    Seorang pelajar di SMKN 2 Purwakarta. Menjelajahi dunia kepemimpinan, organisasi, teknologi, dan pengembangan diri.
                  </p>
                </div>
              </div>

              {/* FLOATING POLAROID: Behind the Scenes Snapshot with Washi Tape */}
              <div 
                className="relative rounded-2xl p-3 bg-white border border-black/10 shadow-[0_10px_25px_rgba(0,0,0,0.06)] rotate-2 transition-all duration-300 hover:rotate-0 hover:scale-105 hover:shadow-xl group/snap cursor-pointer"
                onClick={nextPhoto}
                title="Click to toggle through photos"
              >
                {/* Washi tape at top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-amber-200/80 border border-amber-300/60 rounded-sm -rotate-2 shadow-sm pointer-events-none" />

                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 flex-none shadow-sm">
                    <img 
                      src="/profile-party.jpg" 
                      alt="Behind the scenes party hat"
                      className="w-full h-full object-cover group-hover/snap:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="w-4 h-4 rounded bg-neutral-100 flex items-center justify-center">
                        <Camera className="w-2.5 h-2.5 text-neutral-700" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                        Snapshot • 9-to-5 Fun
                      </span>
                    </div>
                    <p className="font-serif italic text-xs text-neutral-800 leading-snug">
                      &ldquo;Work hard, lead with passion, and never forget to have fun.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* =========================================================================
                COLUMN RIGHT (7 Cols):
                - Row 1: CARD B (Main Goal) + CARD E (Current Focus)
                - Row 2: CARD C (Personality) + CARD D (Interests)
                - Row 3: "Apps & Creative Tools" + "Turning Challenges into Fuel"
                - Row 4: "Is he attractive??" Comedy Poll (With Red Error Shake on 'No')
                ========================================================================= */}
            <div className="lg:col-span-7 flex flex-col gap-6">

              {/* Top Row: CARD B (Main Goal - White) + CARD E (Current Focus - Blue) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
                
                {/* CARD B: My Main Goal (White / Grey Sticky Note) */}
                <div className="relative group transition-all duration-300 hover:z-30">
                  <div className="h-full flex flex-col justify-between rounded-2xl p-5 sm:p-6 bg-white text-[#111111] border border-black/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.06)] rotate-1 transition-all duration-300 ease-out group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.1)]">
                    {/* Sticky tape indicator */}
                    <div className="absolute -top-2.5 left-8 w-9 h-3.5 bg-neutral-200/80 border border-neutral-300/60 rounded-sm -rotate-3 shadow-sm pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-800 border border-black/[0.06]">
                            <Target className="w-3 h-3 text-neutral-800" />
                          </div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                            My Main Goal
                          </span>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                      </div>
                      
                      <p className="font-['Inter'] text-sm sm:text-[14px] leading-relaxed text-neutral-800 font-normal">
                        Membangun sistem organisasi yang lebih baik dan menciptakan dampak nyata melalui kepemimpinan yang bertanggung jawab.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-black/[0.05] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span>Vision</span>
                      <span>Impact-Driven</span>
                    </div>
                  </div>
                </div>

                {/* CARD E: Current Focus (Pastel Blue Sticky Note) */}
                <div className="relative group transition-all duration-300 hover:z-30">
                  <div className="h-full flex flex-col justify-between rounded-2xl p-5 sm:p-6 bg-[#DBEAFE] text-[#111111] border border-blue-300/80 shadow-[0_10px_25px_rgba(59,130,246,0.15)] -rotate-1 transition-all duration-300 ease-out group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-[0_18px_36px_rgba(59,130,246,0.25)]">
                    {/* Sticky tape indicator */}
                    <div className="absolute -top-2.5 right-8 w-9 h-3.5 bg-blue-200/90 border border-blue-300/70 rounded-sm rotate-2 shadow-sm pointer-events-none" />

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-md bg-blue-200/60 flex items-center justify-center text-blue-800 border border-blue-300/60">
                            <Compass className="w-3 h-3 text-blue-700" />
                          </div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-900/70">
                            Current Focus
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-md bg-blue-200/50 flex items-center justify-center text-blue-800">
                          <Sparkles className="w-3 h-3 text-blue-700" />
                        </div>
                      </div>
                      
                      <p className="font-['Inter'] text-sm sm:text-[14px] leading-relaxed text-blue-950 font-normal">
                        Mengasah pemikiran kritis, memperluas wawasan akademik, dan mengembangkan potensi dalam bidang teknologi.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-blue-300/50 flex items-center justify-between text-[11px] font-mono text-blue-800/60">
                      <span>Gains &amp; Growth</span>
                      <span>Continuous</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Middle Row: CARD C (Personality - Purple) + CARD D (Interests - Green) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
                
                {/* CARD C: Personality (Pastel Purple Frame with Scattered Sticky Traits) */}
                <div className="relative group transition-all duration-300 hover:z-30">
                  <div className="h-full rounded-2xl p-5 sm:p-6 bg-[#F3E8FF] border border-purple-300/80 shadow-[0_10px_25px_rgba(168,85,247,0.15)] rotate-1 transition-all duration-300 ease-out group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-[0_18px_36px_rgba(168,85,247,0.25)] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-md bg-purple-200/60 flex items-center justify-center text-purple-800 border border-purple-300/60">
                            <Heart className="w-3 h-3 text-purple-700" />
                          </div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-900/70">
                            Personality
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/70 text-purple-800 border border-purple-200">
                          4 Traits
                        </span>
                      </div>

                      {/* Miro Style Mini Sticky Notes for each trait */}
                      <div className="grid grid-cols-2 gap-2.5">
                        {[
                          { trait: 'Outgoing', rot: '-rotate-2', bg: 'bg-white text-purple-950 shadow-sm' },
                          { trait: 'Caring', rot: 'rotate-1', bg: 'bg-white/90 text-purple-900 shadow-sm' },
                          { trait: 'Strategic', rot: 'rotate-2', bg: 'bg-white text-purple-950 shadow-sm' },
                          { trait: 'Disciplined', rot: '-rotate-1', bg: 'bg-white/90 text-purple-900 shadow-sm' },
                        ].map((item) => (
                          <div 
                            key={item.trait}
                            className={`p-2.5 rounded-xl border border-purple-200/70 text-center font-['Inter'] text-xs sm:text-sm font-semibold transition-transform duration-200 hover:rotate-0 hover:scale-105 cursor-default ${item.rot} ${item.bg}`}
                          >
                            <span>{item.trait}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 pt-3 border-t border-purple-200/60 text-[11px] font-mono text-purple-800/70 flex items-center justify-between">
                      <span>Character Core</span>
                      <span>Balanced</span>
                    </p>
                  </div>
                </div>

                {/* CARD D: Interests (Pastel Green Frame with Sticky Notes) */}
                <div className="relative group transition-all duration-300 hover:z-30">
                  <div className="h-full rounded-2xl p-5 sm:p-6 bg-[#DCFCE7] border border-green-300/80 shadow-[0_10px_25px_rgba(34,197,94,0.15)] -rotate-1 transition-all duration-300 ease-out group-hover:rotate-0 group-hover:scale-[1.02] group-hover:shadow-[0_18px_36px_rgba(34,197,94,0.25)] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-md bg-emerald-200/60 flex items-center justify-center text-emerald-800 border border-emerald-300/60">
                            <Sparkles className="w-3 h-3 text-emerald-700" />
                          </div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-900/70">
                            Interests
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/70 text-emerald-800 border border-emerald-200">
                          Passions
                        </span>
                      </div>

                      {/* Floating Interest Pills / Mini Sticky Notes */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {[
                          { name: 'Leadership', color: 'bg-white text-emerald-950 border-emerald-200 rotate-1' },
                          { name: 'Technology', color: 'bg-white text-emerald-950 border-emerald-200 -rotate-1' },
                          { name: 'Public Speaking', color: 'bg-white text-emerald-950 border-emerald-200 rotate-2' },
                          { name: 'Event Management', color: 'bg-white text-emerald-950 border-emerald-200 -rotate-2' },
                          { name: 'Personal Development', color: 'bg-white text-emerald-950 border-emerald-200 rotate-1' },
                        ].map((interest) => (
                          <span
                            key={interest.name}
                            className={`px-3 py-1.5 rounded-xl border text-[11px] sm:text-xs font-semibold shadow-sm transition-transform duration-200 hover:rotate-0 hover:scale-105 font-['Inter'] cursor-default ${interest.color}`}
                          >
                            {interest.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 pt-3 border-t border-emerald-300/50 text-[11px] font-mono text-emerald-800/70 flex items-center justify-between">
                      <span>Endless Curiosity</span>
                      <span>Growth</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* =========================================================================
                  MIRO APPS & CHALLENGES SECTIONS
                  ========================================================================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">

                {/* 1. APPS & CREATIVE TOOLS (4-Sticky Grid like in Miro Reference!) */}
                <div className="rounded-2xl p-5 bg-white border border-black/[0.08] shadow-[0_10px_25px_rgba(0,0,0,0.04)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-800 border border-black/[0.06]">
                          <Layers className="w-3 h-3 text-neutral-800" />
                        </div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-600">
                          Apps &amp; Daily Stack
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">
                        Interactive
                      </span>
                    </div>

                    {/* 4 Interactive App Sticky Notes */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {/* App 1: VS Code */}
                      <div className="p-3 rounded-xl bg-[#FEF9C3] border border-yellow-300/80 shadow-sm transition-all hover:scale-105 cursor-pointer -rotate-1 group/app">
                        <span className="text-xs font-bold text-yellow-950 font-mono block mb-1">
                          VS Code
                        </span>
                        <p className="text-[10px] text-yellow-900/80 leading-tight">
                          Clean code, modular React &amp; Tailwind.
                        </p>
                      </div>

                      {/* App 2: Figma */}
                      <div className="p-3 rounded-xl bg-[#DCFCE7] border border-green-300/80 shadow-sm transition-all hover:scale-105 cursor-pointer rotate-1 group/app">
                        <span className="text-xs font-bold text-emerald-950 font-mono block mb-1">
                          Figma
                        </span>
                        <p className="text-[10px] text-emerald-900/80 leading-tight">
                          Wireframes, design systems &amp; prototypes.
                        </p>
                      </div>

                      {/* App 3: Notion */}
                      <div className="p-3 rounded-xl bg-[#E0E7FF] border border-indigo-200 shadow-sm transition-all hover:scale-105 cursor-pointer rotate-1 group/app">
                        <span className="text-xs font-bold text-indigo-950 font-mono block mb-1">
                          Notion
                        </span>
                        <p className="text-[10px] text-indigo-900/80 leading-tight">
                          Organizing meetings, sprints &amp; timelines.
                        </p>
                      </div>

                      {/* App 4: Spotify Soundtrack with Interactive Play/Pause */}
                      <div 
                        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                        className={`p-3 rounded-xl border transition-all hover:scale-105 cursor-pointer -rotate-1 group/app ${
                          isPlayingMusic 
                            ? 'bg-neutral-900 text-white border-neutral-800 shadow-md' 
                            : 'bg-neutral-100 text-neutral-900 border-neutral-200'
                        }`}
                        title="Click to toggle music soundtrack"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold font-mono">
                            Spotify
                          </span>
                          {isPlayingMusic ? (
                            <Pause className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Play className="w-3 h-3 text-neutral-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-1.5">
                          {isPlayingMusic ? (
                            <div className="flex items-end gap-0.5 h-3">
                              <span className="w-1 h-3 bg-emerald-400 rounded-full animate-bounce" />
                              <span className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                              <span className="w-1 h-3.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                          ) : (
                            <Music className="w-2.5 h-2.5 text-neutral-400" />
                          )}
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold leading-tight truncate">
                              Am I Bothering You?
                            </p>
                            <p className="text-[9px] opacity-70 leading-tight truncate">
                              {isPlayingMusic ? 'Now Playing • Reality Club' : 'Reality Club • Click to play'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* App Tray Footer */}
                  <div className="mt-3 pt-2.5 border-t border-black/[0.05] flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span>Toolkit</span>
                    <span>4 Daily Essentials</span>
                  </div>
                </div>

                {/* 2. TURNING CHALLENGES INTO FUEL (Orange Miro Sticky Notes with Flip) */}
                <div className="rounded-2xl p-5 bg-[#FFEDD5] border border-orange-300/80 shadow-[0_10px_25px_rgba(249,115,22,0.12)] flex flex-col justify-between -rotate-1 transition-all duration-300 hover:rotate-0">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-orange-200/60 flex items-center justify-center text-orange-800 border border-orange-300/60">
                          <Flame className="w-3 h-3 text-orange-600" />
                        </div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-950">
                          Challenges → Fuel
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/70 text-orange-900 border border-orange-200">
                        Click to flip
                      </span>
                    </div>

                    {/* Interactive Flip Card 1 */}
                    <div 
                      onClick={() => setFlippedChallenge1(!flippedChallenge1)}
                      className="p-3 mb-2.5 rounded-xl bg-white border border-orange-200/90 shadow-sm cursor-pointer transition-all hover:scale-[1.02] active:scale-98"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          {flippedChallenge1 ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                          )}
                          <span className="text-[11px] font-bold text-neutral-800">
                            {flippedChallenge1 ? 'The Strategy:' : 'OSIS vs Code?'}
                          </span>
                        </div>
                        <span className="text-[9.5px] font-mono text-orange-600 font-semibold uppercase">
                          {flippedChallenge1 ? 'Solved' : 'Flip'}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 leading-snug font-['Inter']">
                        {flippedChallenge1
                          ? 'Agile time-blocking! 9-to-5 dedicated to school & leadership, evenings for focused coding sprints.'
                          : 'Bagaimana menyeimbangkan tanggung jawab ketua OSIS dengan konsistensi belajar coding?'}
                      </p>
                    </div>

                    {/* Interactive Flip Card 2 */}
                    <div 
                      onClick={() => setFlippedChallenge2(!flippedChallenge2)}
                      className="p-3 rounded-xl bg-white border border-orange-200/90 shadow-sm cursor-pointer transition-all hover:scale-[1.02] active:scale-98"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          {flippedChallenge2 ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <AlertCircle className="w-3.5 h-3.5 text-orange-500" />
                          )}
                          <span className="text-[11px] font-bold text-neutral-800">
                            {flippedChallenge2 ? 'The Strategy:' : 'Perfectionism?'}
                          </span>
                        </div>
                        <span className="text-[9.5px] font-mono text-orange-600 font-semibold uppercase">
                          {flippedChallenge2 ? 'Solved' : 'Flip'}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 leading-snug font-['Inter']">
                        {flippedChallenge2
                          ? 'Build fast, test with real humans, and polish interactions with editorial care.'
                          : 'Takut karya belum sempurna sebelum dipublikasikan ke publik?'}
                      </p>
                    </div>
                  </div>

                  {/* Stamp Badge */}
                  <div className="mt-3 pt-2.5 border-t border-orange-300/50 flex items-center justify-between text-[10px] font-mono text-orange-900/70">
                    <span>Growth Mindset</span>
                    <span className="font-bold text-orange-800">100% Impact Driven</span>
                  </div>
                </div>

              </div>

              {/* =========================================================================
                  COMEDY POLL: "Is he attractive??"
                  - Yes: Increments vote counter with celebration
                  - No: Shakes red violently with humorous error
                  ========================================================================= */}
              <div className="rounded-2xl p-4 sm:p-5 bg-white border border-black/[0.08] shadow-[0_10px_25px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 border border-black/[0.06] flex items-center justify-center text-neutral-800 flex-none">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                      Anonymous Community Poll
                    </span>
                    <h3 className="font-['Playfair_Display'] text-base sm:text-lg font-bold text-neutral-900">
                      Is he attractive??
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 relative">
                  {/* Option: YES (Allowed & Celebrated) */}
                  <button
                    type="button"
                    onClick={handleVoteYes}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all duration-200 cursor-pointer shadow-sm ${
                      hasVotedYes
                        ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                        : 'bg-[#111111] hover:bg-neutral-800 text-white active:scale-95'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>YES! ({yesVotes.toLocaleString()})</span>
                  </button>

                  {/* Option: NO (Errors out with red shake!) */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={handleVoteNo}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                        noError
                          ? 'bg-rose-500 text-white border-rose-600 animate-shake-error shadow-md shadow-rose-500/30'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600 border-black/10'
                      }`}
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>NO</span>
                    </button>

                    {/* Red Error Comedy Tooltip */}
                    {noError && (
                      <div className="absolute right-0 bottom-full mb-2 max-w-[260px] xs:max-w-none whitespace-normal xs:whitespace-nowrap px-3 py-1.5 rounded-xl bg-rose-600 text-white text-[10.5px] xs:text-[11px] font-mono font-semibold shadow-lg shadow-rose-600/30 flex items-center gap-1.5 z-50 pointer-events-none">
                        <ShieldAlert className="w-3.5 h-3.5 flex-none" />
                        <span>System Error: Option 'NO' is disabled!</span>
                        {/* Down Arrow */}
                        <div className="absolute right-4 -bottom-1 w-2 h-2 bg-rose-600 rotate-45" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================================================
              4. LOGOS & TOOLS (Bottom Area - Organizations Led)
              ========================================================================= */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-black/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-5">
            
            {/* Label */}
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-md bg-neutral-900 text-white flex items-center justify-center">
                <Award className="w-3 h-3 text-neutral-100" />
              </div>
              <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-neutral-600">
                Organizations I&apos;ve led:
              </span>
            </div>

            {/* Minimalist Text Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                { name: 'PASUSJA', desc: 'Pasukan Khusus' },
                { name: 'OSIS', desc: 'Organisasi Siswa Intra Sekolah' },
                { name: 'X-TIK', desc: 'Komunitas Teknologi & IT' },
                { name: 'Garuda Penegak', desc: 'Kepanduan Tertinggi' },
              ].map((org) => (
                <div
                  key={org.name}
                  title={org.desc}
                  className="group/org relative px-4 py-2 rounded-xl bg-white border border-black/10 shadow-sm transition-all duration-300 hover:border-[#111111] hover:bg-neutral-900 hover:text-white hover:-translate-y-1 hover:shadow-md cursor-default"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs sm:text-sm font-bold tracking-wider">
                      {org.name}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover/org:bg-emerald-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
