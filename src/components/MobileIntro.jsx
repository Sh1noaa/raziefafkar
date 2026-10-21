import React, { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz0123456789@#$%&*!?'
const TARGET_TEXT = 'Come In'
const WELCOME_TEXT = 'Welcome'

function getRandomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)]
}

export default function MobileIntro() {
  // Mobile Rule: ONLY show if initial screen width < 768px.
  // Desktop Rule: >= 768px, do not show at all.
  // Using useState initializer guarantees it won't re-trigger on window resize.
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
    }
    return false
  })

  const [displayText, setDisplayText] = useState(WELCOME_TEXT)
  const [textOpacity, setTextOpacity] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const intervalRef = useRef(null)
  const timeoutsRef = useRef([])

  useEffect(() => {
    if (!showIntro) return

    // Lock body scroll during intro
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const addTimeout = (fn, delay) => {
      const id = setTimeout(fn, delay)
      timeoutsRef.current.push(id)
      return id
    }

    // Phase 1: "Welcome" Fade In (First ~600ms)
    addTimeout(() => {
      setTextOpacity(1)
    }, 50)

    // Phase 2: Scramble to "Come In" (Next ~800ms, starts at 600ms)
    addTimeout(() => {
      let tick = 0
      const totalTicks = 16 // 16 ticks * 50ms = 800ms

      intervalRef.current = setInterval(() => {
        tick++
        // Progressively lock in characters from left to right
        const lockedCount = Math.min(
          TARGET_TEXT.length,
          Math.floor((tick / (totalTicks - 3)) * TARGET_TEXT.length)
        )

        let result = ''
        for (let i = 0; i < TARGET_TEXT.length; i++) {
          if (TARGET_TEXT[i] === ' ') {
            result += ' '
          } else if (i < lockedCount) {
            result += TARGET_TEXT[i]
          } else {
            result += getRandomChar()
          }
        }

        setDisplayText(result)

        // When locked in or reaching tick limit
        if (tick >= totalTicks) {
          clearInterval(intervalRef.current)
          setDisplayText(TARGET_TEXT)
        }
      }, 50)
    }, 600)

    // Phase 3: Wait 300ms after locked (~1450ms), then fade out over 500ms
    addTimeout(() => {
      setIsFadingOut(true)
    }, 1500)

    // Phase 4: Unmount completely from DOM at ~2000ms
    addTimeout(() => {
      setShowIntro(false)
      document.body.style.overflow = originalOverflow
    }, 2050)

    return () => {
      document.body.style.overflow = originalOverflow
      if (intervalRef.current) clearInterval(intervalRef.current)
      timeoutsRef.current.forEach(clearTimeout)
    }
  }, [showIntro])

  if (!showIntro) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F9F9F9] transition-opacity duration-500 ease-out select-none pointer-events-auto ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center text-center px-6">
        {/* Minimalist Top Indicator */}
        <div className="flex items-center gap-1.5 mb-5 opacity-40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-[#111111] uppercase">
            Initializing
          </span>
        </div>

        {/* Cinematic Scramble Text */}
        <div
          style={{ opacity: textOpacity }}
          className="transition-opacity duration-300 min-w-[200px] flex items-center justify-center"
        >
          <span className="font-mono text-2xl sm:text-3xl font-semibold tracking-[0.18em] text-[#111111] uppercase">
            {displayText}
          </span>
        </div>

        {/* Minimalist Bottom Subtle Brand */}
        <div className="mt-6 opacity-30">
          <span className="font-['Inter'] text-[11px] font-medium tracking-wider text-[#111111]">
            Razief F. Afkar
          </span>
        </div>
      </div>
    </div>
  )
}
