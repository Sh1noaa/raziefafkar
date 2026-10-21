import React, { useState, useEffect, useRef } from 'react'
import { 
  ArrowUpRight, 
  ExternalLink, 
  Eye, 
  Maximize2, 
  X, 
  ShieldCheck, 
  BookOpen, 
  MessageSquare, 
  TrendingUp, 
  Lock, 
  Sparkles, 
  Check, 
  Globe, 
  Code2, 
  Home, 
  Folder, 
  SlidersHorizontal, 
  User,
  Layers,
  ArrowRight,
  GraduationCap,
  Clock,
  Award,
  Search,
  Bot,
  Calendar,
  Flame,
  Bookmark,
  Play,
  Pause,
  Square,
  Plus,
  CheckCircle2,
  BarChart3,
  PieChart,
  Activity,
  FileText,
  CheckCheck,
  Thermometer,
  Dumbbell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Users,
  PhoneCall,
  ShieldAlert,
  CreditCard,
  KeyRound,
  Laptop
} from 'lucide-react'

export default function Projects() {
  // -------------------------------------------------------------
  // STATE: Active DigiSafe View Panel (Controlled by Floating Nav & Tabs)
  // Panel 1: 'digisafe' (Platform Overview & Live Showcase)
  // Panel 2: 'edulearn' (Modul & Kurikulum Literasi Siber Purwakarta)
  // Panel 3: 'tasklab'  (Pusat Analitik & Aduan Keamanan Siber Warga)
  // -------------------------------------------------------------
  const [activeProjectTab, setActiveProjectTab] = useState('digisafe')
  const [hoveredNav, setHoveredNav] = useState(null)
  const [isProjectsVisible, setIsProjectsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileSelectOpen, setIsMobileSelectOpen] = useState(false)

  // Sub-states for DigiSafe Overview (Panel 1)
  const [activeChartPoint, setActiveChartPoint] = useState(4)

  // Sub-states for Modul Literasi (Panel 2)
  const [activeEduCategory, setActiveEduCategory] = useState('Semua Topik')
  const [hoveredDonutSlice, setHoveredDonutSlice] = useState(null)

  // Sub-states for Analitik & Incident Tracker (Panel 3)
  const [tasklabTimer, setTasklabTimer] = useState(9900) // 02:45:00 in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [hoveredMonthBar, setHoveredMonthBar] = useState(null)

  const sectionRef = useRef(null)

  // -------------------------------------------------------------
  // Scroll Listener: Floating Right-Side Navigation Visibility
  // (Only visible in this section, slides in smoothly)
  // -------------------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('projects')
      if (el) {
        const rect = el.getBoundingClientRect()
        // Visible when Projects section enters viewport and until user scrolls away (matches About.jsx)
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25
        setIsProjectsVisible(inView)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // -------------------------------------------------------------
  // Modal Keyboard & Body Scroll Lock Handler
  // -------------------------------------------------------------
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  // -------------------------------------------------------------
  // Timer effect for DigiSafe Incident Response Time Tracker
  // -------------------------------------------------------------
  useEffect(() => {
    let interval = null
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTasklabTimer((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isTimerRunning])

  const formatTimer = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0')
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0')
    const seconds = (totalSeconds % 60).toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  // Navigation Items for the 3 DigiSafe Data Panels (Right-Side Vertical Pill)
  const projectNavItems = [
    { 
      id: 'digisafe', 
      label: '1. Platform Overview (Utama)', 
      shortTitle: 'Platform Utama',
      icon: Home,
      tag: 'Ringkasan & Live Preview'
    },
    { 
      id: 'edulearn', 
      label: '2. Modul & Kurikulum Siber', 
      shortTitle: 'Modul Edukasi',
      icon: GraduationCap,
      tag: 'LMS Literasi Warga'
    },
    { 
      id: 'tasklab', 
      label: '3. Analitik & Laporan Siber', 
      shortTitle: 'Pusat Analitik',
      icon: BarChart3,
      tag: 'Metrik & Pengaduan Warga'
    },
  ]

  // DigiSafe progress chart points
  const progressPoints = [
    { week: 'Mgg 1', value: 35, users: '4.2k Warga', label: 'Pengenalan Phishing' },
    { week: 'Mgg 2', value: 52, users: '7.8k Warga', label: 'Privasi Data Pribadi' },
    { week: 'Mgg 3', value: 68, users: '9.6k Warga', label: 'Keamanan Transaksi' },
    { week: 'Mgg 4', value: 78, users: '11.1k Warga', label: 'Etika & Anti-Hoaks' },
    { week: 'Mgg 5', value: 94, users: '12.4k Warga', label: 'Kesiapsiagaan Total' },
  ]

  // TaskLab monthly bar chart data (12 months: This year vs Last year)
  const monthlyChartData = [
    { month: 'Jan', thisYear: 2.1, lastYear: 1.0 },
    { month: 'Feb', thisYear: 2.3, lastYear: 3.2 },
    { month: 'Mar', thisYear: 3.2, lastYear: 1.5 },
    { month: 'Apr', thisYear: 1.8, lastYear: 0.2 },
    { month: 'May', thisYear: 2.2, lastYear: 1.8 },
    { month: 'Jun', thisYear: 2.0, lastYear: 0.8 },
    { month: 'Jul', thisYear: 2.4, lastYear: 1.2 },
    { month: 'Aug', thisYear: 3.1, lastYear: 0.5 },
    { month: 'Sep', thisYear: 0.3, lastYear: 0.2 },
    { month: 'Oct', thisYear: 3.8, lastYear: 0.1 },
    { month: 'Nov', thisYear: 1.9, lastYear: 0.4 },
    { month: 'Dec', thisYear: 2.6, lastYear: 1.1 },
  ]

  const currentTabIndex = Math.max(0, projectNavItems.findIndex((item) => item.id === activeProjectTab))
  const handlePrevTab = () => {
    const prevIdx = (currentTabIndex - 1 + projectNavItems.length) % projectNavItems.length
    setActiveProjectTab(projectNavItems[prevIdx].id)
  }
  const handleNextTab = () => {
    const nextIdx = (currentTabIndex + 1) % projectNavItems.length
    setActiveProjectTab(projectNavItems[nextIdx].id)
  }

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="w-full max-w-full bg-[#F9F9F9] text-[#111111] relative py-20 sm:py-32 overflow-hidden selection:bg-[#111111] selection:text-[#F9F9F9]"
    >
      {/* Subtle background ambient grid for editorial depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35]" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #E5E5E5 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      {/* =========================================================================
          RIGHT-SIDE FLOATING VERTICAL ICON NAVIGATION (Switches Projects Views - Desktop/Tablet Only)
          - Matches About.jsx toolbar transition: slides smoothly from right edge (translate-x-32)
          ========================================================================= */}
      <div 
        className={`hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-out ${
          isProjectsVisible 
            ? 'translate-x-0 opacity-100 pointer-events-auto' 
            : 'translate-x-32 opacity-0 pointer-events-none'
        }`}
        aria-label="Projects Section View Switcher"
      >
        <div className="bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.08)] rounded-full p-2 flex flex-col items-center gap-2.5">
          {projectNavItems.map((item, idx) => {
            const Icon = item.icon
            const isActive = activeProjectTab === item.id
            const isHovered = hoveredNav === item.id

            return (
              <div key={item.id} className="relative flex items-center justify-center group">
                <button
                  onClick={() => setActiveProjectTab(item.id)}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`w-11 h-11 rounded-full flex flex-col items-center justify-center transition-all duration-300 relative ${
                    isActive 
                      ? 'bg-[#111111] text-white shadow-md scale-105' 
                      : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="text-[9px] font-bold font-mono mt-0.5 opacity-80 leading-none">
                    0{idx + 1}
                  </span>

                  {isActive && (
                    <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </button>

                {/* Floating Tooltip to the Left of the Pill */}
                <div 
                  className={`absolute right-14 px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-xs font-medium tracking-wide whitespace-nowrap shadow-xl pointer-events-none transition-all duration-200 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}
                >
                  <div className="font-semibold text-white">{item.label}</div>
                  <div className="text-[10px] text-neutral-400">{item.tag}</div>
                  <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-900 rotate-45" />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full max-w-full">

        {/* =========================================================================
            1. SECTION HEADER (Top Left Title & Top Right Minimalist Action)
            ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-neutral-200/80">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase font-sans">
                ( 02 / SELECTED WORK )
              </span>
              <span className="h-px w-10 bg-neutral-300" />
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Interactive Showcase
              </span>
            </div>

            {/* Scaled-down Title in Playfair Display (Slightly reduced in size as requested) */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[1.08]">
              Featured Projects<span className="text-neutral-400 font-serif">.</span>
            </h2>

            {/* Sans-serif Subtitle */}
            <p className="font-sans text-base sm:text-lg text-neutral-500 font-normal mt-3 max-w-xl leading-relaxed">
              Membangun ruang digital yang bermakna, fungsional, dan berdampak nyata.
            </p>
          </div>

          {/* Right Side: Minimalist "View GitHub" Button */}
          <div className="pt-2 md:pt-0">
            <a 
              href="https://github.com/Sh1noaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-neutral-300 bg-white/80 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 text-sm font-medium text-neutral-800 shadow-sm backdrop-blur-sm"
              id="view-github-btn"
            >
              {/* GitHub SVG Icon */}
              <svg 
                className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" 
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
              <span>View GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            TOP SEGMENTED TABS & RESPONSIVE SELECTOR (Accessible Switcher)
            - Mobile (< md): Single-button dropdown menu so items are never cut off
            - Desktop (>= md): Full segmented tabs + minimalist arrow navigation & guide
            ========================================================================= */}
        <div className="mt-8 pb-2">
          
          {/* A. MOBILE ONLY (< md): Single Clickable Option / Dropdown Selector */}
          <div className="md:hidden relative w-full">
            <button
              type="button"
              onClick={() => setIsMobileSelectOpen((prev) => !prev)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white border border-neutral-300/90 shadow-sm text-neutral-900 active:bg-neutral-50 transition-all"
              aria-expanded={isMobileSelectOpen}
              aria-label="Pilih panel data DigiSafe"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-none" />
                <div className="w-7 h-7 rounded-xl bg-neutral-100 flex items-center justify-center flex-none text-neutral-800 border border-neutral-200/60">
                  {(() => {
                    const ActiveIcon = projectNavItems[currentTabIndex].icon
                    return <ActiveIcon className="w-3.5 h-3.5" />
                  })()}
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-xs font-bold text-neutral-900 truncate">
                    {projectNavItems[currentTabIndex].label}
                  </span>
                  <span className="text-[10px] text-neutral-500 truncate">
                    {projectNavItems[currentTabIndex].tag}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-none pl-2.5 border-l border-neutral-200">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700">
                  0{currentTabIndex + 1}/03
                </span>
                <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${isMobileSelectOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {/* Mobile Dropdown Backdrop */}
            {isMobileSelectOpen && (
              <div 
                className="fixed inset-0 z-30" 
                onClick={() => setIsMobileSelectOpen(false)} 
              />
            )}

            {/* Mobile Experience Notice Banner */}
            <div className="mt-3 p-3 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/70 flex items-center justify-center flex-none">
                <Laptop className="w-3.5 h-3.5" />
              </div>
              <p className="text-[11px] text-neutral-600 leading-tight">
                <strong className="text-neutral-900 font-semibold">Mode Ringkas Mobile:</strong> Menampilkan 2 ringkasan utama. Buka di layar desktop untuk eksplorasi dashboard &amp; diagram lengkap.
              </p>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileSelectOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white rounded-2xl border border-neutral-200/90 shadow-2xl z-40 flex flex-col gap-1.5 animate-fadeIn">
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400 border-b border-neutral-100">
                  Pilih Tampilan Data DigiSafe:
                </div>
                {projectNavItems.map((item, idx) => {
                  const Icon = item.icon
                  const isActive = activeProjectTab === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setActiveProjectTab(item.id)
                        setIsMobileSelectOpen(false)
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                        isActive 
                          ? 'bg-neutral-900 text-white font-semibold shadow-xs' 
                          : 'hover:bg-neutral-100 text-neutral-700 active:bg-neutral-200'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-none ${
                          isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold truncate">{item.label}</div>
                          <div className={`text-[10px] truncate ${isActive ? 'text-neutral-300' : 'text-neutral-400'}`}>
                            {item.tag}
                          </div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full flex-none ${
                        isActive ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'
                      }`}>
                        0{idx + 1}
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* B. DESKTOP ONLY (>= md): Full Segmented Bar + Minimalist Navigation Arrows & Guides */}
          <div className="hidden md:flex items-center justify-between flex-wrap gap-4">
            <div className="inline-flex items-center p-1.5 rounded-2xl bg-neutral-200/60 backdrop-blur-sm border border-neutral-300/60 shadow-inner">
              {projectNavItems.map((item, idx) => {
                const Icon = item.icon
                const isActive = activeProjectTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveProjectTab(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                      isActive 
                        ? 'bg-white text-neutral-900 shadow-sm font-semibold' 
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/40'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-neutral-900' : 'text-neutral-400'}`} />
                    <span>{item.shortTitle}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-neutral-100 text-neutral-700' : 'text-neutral-400'}`}>
                      0{idx + 1}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Minimalist Navigation Arrows & Interactive Guide */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-neutral-200/90 shadow-xs backdrop-blur-sm text-xs text-neutral-600 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-neutral-700">Data Panel:</span>
                <span className="text-[11px] font-mono text-neutral-500 font-semibold">
                  0{currentTabIndex + 1} / 03
                </span>
                <span className="h-3.5 w-px bg-neutral-200 mx-1" />
                
                {/* Minimalist Previous Arrow */}
                <button
                  type="button"
                  onClick={handlePrevTab}
                  className="w-6 h-6 rounded-full hover:bg-neutral-100 active:bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
                  title="Data Sebelumnya (Panah Kiri)"
                  aria-label="Previous data panel"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                {/* Minimalist Next Arrow */}
                <button
                  type="button"
                  onClick={handleNextTab}
                  className="w-6 h-6 rounded-full hover:bg-neutral-100 active:bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
                  title="Data Berikutnya (Panah Kanan)"
                  aria-label="Next data panel"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-xs text-neutral-400 font-sans hidden lg:flex items-center gap-1.5">
                <span>Gunakan tab atau panah untuk beralih data</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 animate-pulse" />
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            TAB CONTENT 1: DIGISAFE PURWAKARTA (Featured Core Project)
            ========================================================================= */}
        {activeProjectTab === 'digisafe' && (
          <div className="mt-8 transition-all duration-500 animate-fadeIn">
            <div className="rounded-3xl border border-neutral-200/80 bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#F5EFEB] p-6 sm:p-10 lg:p-14 shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden group">
              
              {/* Subtle soft ambient glow inside card */}
              <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                
                {/* -----------------------------------------------------------
                    LEFT COLUMN: PROJECT TEXT CONTENT & ACTIONS
                    ----------------------------------------------------------- */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Category Pill & Year */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-900 text-white shadow-xs">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        Featured Platform
                      </span>
                      <span className="text-xs font-semibold text-neutral-400">
                        2024
                      </span>
                    </div>

                    {/* Project Title with Official Logo */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-white p-1.5 border border-neutral-200/90 shadow-sm shrink-0">
                        <img 
                          src="/digisafe-logo.png" 
                          alt="DigiSafe Purwakarta Official Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
                        DigiSafe Purwakarta
                      </h3>
                    </div>

                    {/* Subtitle */}
                    <h4 className="font-sans text-base sm:text-lg font-medium text-neutral-600 mt-3">
                      Digital Literacy &amp; Cyber Security Platform.
                    </h4>

                    {/* Description Paragraph */}
                    <p className="font-sans text-sm sm:text-base text-neutral-600 mt-5 leading-relaxed">
                      Platform edukasi interaktif untuk warga Purwakarta. Menyediakan 6 Modul Edukasi, Video Pembelajaran, dan 5 Forum Diskusi untuk meningkatkan kesadaran akan keamanan siber, perlindungan data pribadi, dan bahaya penipuan online.
                    </p>

                    {/* Tech Stack Badges (Pastel Colors: Soft Green, Soft Orange, Soft Yellow) */}
                    <div className="flex flex-wrap items-center gap-2.5 mt-7">
                      {/* Badge 1: Web App (Soft Green Pastel) */}
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#E8F5E9] text-[#1B5E20] border border-[#C8E6C9] shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Web App
                      </span>

                      {/* Badge 2: Community (Soft Orange Pastel) */}
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#FFF3E0] text-[#B7410E] border border-[#FFE0B2] shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-orange-500" />
                        Community
                      </span>

                      {/* Badge 3: Education (Soft Yellow/Gold Pastel) */}
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-[#FEF9C3] text-[#713F12] border border-[#FEF08A] shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        Education
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons: "View Live Site" & "View Source Code" */}
                  <div className="flex flex-wrap items-center gap-3.5 mt-8 sm:mt-10 pt-6 border-t border-neutral-200/80">
                    {/* View Live Site Button */}
                    <a
                      href="https://digisafepurwakarta.web.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-white font-medium text-sm hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
                      id="digisafe-live-btn"
                    >
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span>View Live Site</span>
                      <ArrowUpRight className="w-4 h-4 opacity-75" />
                    </a>

                    {/* View Source Code Button */}
                    <a
                      href="https://github.com/Sh1noaa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 bg-white/80 text-neutral-800 font-medium text-sm hover:bg-neutral-900 hover:text-white hover:border-neutral-900 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm backdrop-blur-sm"
                      id="digisafe-source-btn"
                    >
                      <Code2 className="w-4 h-4" />
                      <span>View Source Code</span>
                    </a>
                  </div>
                </div>

                {/* -----------------------------------------------------------
                    RIGHT COLUMN: STYLIZED "FAKE DASHBOARD" UI MOCKUP
                    ----------------------------------------------------------- */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl bg-white border border-neutral-200/90 shadow-[0_12px_32px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300">
                    
                    {/* Browser Window Header Chrome */}
                    <div className="bg-[#FAF9F6] border-b border-neutral-200 px-2.5 sm:px-4 py-2 sm:py-3 flex items-center justify-between gap-1.5 sm:gap-2 overflow-hidden">
                      {/* Mac-style Window Controls */}
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-none">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF605C] border border-[#E14844]" />
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD44] border border-[#DF9F2D]" />
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00CA4E] border border-[#009E3D]" />
                      </div>

                      {/* Fake URL Address Pill (Responsive text, icon, and padding to prevent cutoffs on mobile) */}
                      <div className="min-w-0 max-w-[215px] sm:max-w-none flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-neutral-200/90 text-[10px] sm:text-xs text-neutral-600 font-mono shadow-xs">
                        <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 flex-none" />
                        <span className="truncate tracking-tight sm:tracking-normal">digisafepurwakarta.web.id</span>
                      </div>

                      {/* Live indicator dot */}
                      <div className="flex items-center gap-1 sm:gap-1.5 flex-none">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] sm:text-[11px] font-medium text-neutral-400 hidden sm:inline">Active</span>
                      </div>
                    </div>

                    {/* Dashboard Content Mockup */}
                    <div className="p-5 sm:p-6 bg-gradient-to-b from-[#FAF9F6]/50 to-white flex flex-col gap-4">
                      
                      {/* Mini Hero Header in Dashboard with Real DigiSafe Logo */}
                      <div className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white shadow-xs">
                        <div className="flex items-center gap-3">
                          {/* Replaced generic shield with official DigiSafe Logo (Image 2) */}
                          <div className="w-9 h-9 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-xs shrink-0">
                            <img 
                              src="/digisafe-logo.png" 
                              alt="DigiSafe Logo" 
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <div className="text-xs font-semibold tracking-wide text-white">DigiSafe Purwakarta</div>
                            <div className="text-[11px] text-neutral-300">Portal Warga Bijak &amp; Aman Siber</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                          Status: Aman
                        </span>
                      </div>

                      {/* Two Pastel Bubbles (Row 1): 6 Modules & 5 Forums */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        
                        {/* Pastel Bubble 1: Soft Green Pastel (6 Modules) */}
                        <div className="rounded-2xl p-4 bg-[#EBF7EE] border border-[#C5E8CE] shadow-xs flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
                          <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-xl bg-white/80 border border-emerald-200 flex items-center justify-center shadow-xs">
                              <BookOpen className="w-4 h-4 text-emerald-700" />
                            </div>
                            <span className="text-[11px] font-semibold text-emerald-800 bg-white/80 px-2 py-0.5 rounded-full border border-emerald-200">
                              100% Selesai
                            </span>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-bold text-neutral-900">6 Modul Edukasi</div>
                            <div className="text-xs text-neutral-600 mt-0.5">Dasar Siber, Data Pribadi, Anti-Scam</div>
                          </div>
                          {/* Progress Bar inside bubble */}
                          <div className="w-full bg-white/70 h-2 rounded-full overflow-hidden mt-3 border border-emerald-200">
                            <div className="bg-emerald-500 h-full w-full rounded-full" />
                          </div>
                        </div>

                        {/* Pastel Bubble 2: Soft Orange Pastel (5 Forums) */}
                        <div className="rounded-2xl p-4 bg-[#FFF5EB] border border-[#FEE0C2] shadow-xs flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
                          <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-xl bg-white/80 border border-orange-200 flex items-center justify-center shadow-xs">
                              <MessageSquare className="w-4 h-4 text-orange-700" />
                            </div>
                            <span className="text-[11px] font-semibold text-orange-800 bg-white/80 px-2 py-0.5 rounded-full border border-orange-200 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                              Aktif
                            </span>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm font-bold text-neutral-900">5 Forum Diskusi</div>
                            <div className="text-xs text-neutral-600 mt-0.5">Lapor Scam, Tanya Pakar, Komunitas</div>
                          </div>
                          {/* Mini Activity Indicators */}
                          <div className="flex items-center gap-1.5 mt-3 text-[11px] font-medium text-orange-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                            <span>140+ Diskusi Warga Baru</span>
                          </div>
                        </div>
                      </div>

                      {/* Pastel Bubble 3: Soft Yellow Pastel (User Progress & Fake Line Chart) - Hidden on Mobile */}
                      <div className="hidden md:block rounded-2xl p-4 bg-[#FEFCE8] border border-[#FEF08A] shadow-xs">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-white/80 border border-amber-200 flex items-center justify-center">
                              <TrendingUp className="w-3.5 h-3.5 text-amber-700" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-neutral-900">User Progress</div>
                              <div className="text-[10px] text-neutral-500">Tingkat Pemahaman Keamanan Siber Warga</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-emerald-700">+84% Literasi</div>
                            <div className="text-[10px] text-neutral-500">12,480+ Warga</div>
                          </div>
                        </div>

                        {/* Fake Interactive Line Chart (SVG) */}
                        <div className="relative pt-2">
                          <svg viewBox="0 0 400 90" className="w-full h-20 overflow-visible">
                            <defs>
                              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>

                            {/* Grid horizontal guidelines */}
                            <line x1="0" y1="20" x2="400" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" />
                            <line x1="0" y1="55" x2="400" y2="55" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" />
                            <line x1="0" y1="85" x2="400" y2="85" stroke="#E2E8F0" strokeWidth="1" />

                            {/* Filled Area */}
                            <path
                              d="M 10,75 L 90,60 L 190,45 L 290,30 L 380,12 L 380,85 L 10,85 Z"
                              fill="url(#chartFill)"
                            />

                            {/* Line Path */}
                            <path
                              d="M 10,75 L 90,60 L 190,45 L 290,30 L 380,12"
                              fill="none"
                              stroke="#059669"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />

                            {/* Interactive Chart Points */}
                            {[
                              { cx: 10, cy: 75, index: 0 },
                              { cx: 90, cy: 60, index: 1 },
                              { cx: 190, cy: 45, index: 2 },
                              { cx: 290, cy: 30, index: 3 },
                              { cx: 380, cy: 12, index: 4 },
                            ].map((pt) => {
                              const isSelected = activeChartPoint === pt.index
                              return (
                                <g 
                                  key={pt.index} 
                                  className="cursor-pointer"
                                  onClick={() => setActiveChartPoint(pt.index)}
                                >
                                  <circle
                                    cx={pt.cx}
                                    cy={pt.cy}
                                    r={isSelected ? 6 : 4}
                                    fill={isSelected ? '#059669' : '#FFFFFF'}
                                    stroke="#059669"
                                    strokeWidth={isSelected ? 3 : 2}
                                    className="transition-all duration-200"
                                  />
                                  {isSelected && (
                                    <circle
                                      cx={pt.cx}
                                      cy={pt.cy}
                                      r={10}
                                      fill="none"
                                      stroke="#10B981"
                                      strokeWidth="1.5"
                                      opacity="0.6"
                                      className="animate-ping"
                                    />
                                  )}
                                </g>
                              )
                            })}
                          </svg>

                          {/* Interactive Data Point Tooltip Pill */}
                          <div className="flex items-center justify-between text-[11px] text-neutral-600 mt-1 pt-1.5 border-t border-amber-200/60 font-mono">
                            <span>{progressPoints[activeChartPoint].week}: {progressPoints[activeChartPoint].label}</span>
                            <span className="font-semibold text-emerald-800">{progressPoints[activeChartPoint].users}</span>
                          </div>
                        </div>
                      </div>

                      {/* =========================================================================
                          THE "PREVIEW FULL SCREENSHOT" BUTTON (Triggers Modal Lightbox)
                          ========================================================================= */}
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="group/btn w-full mt-1 flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 hover:shadow-lg active:scale-[0.99] transition-all duration-300"
                        id="preview-screenshot-trigger"
                      >
                        <Maximize2 className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                        <span>Preview Full Screenshot</span>
                        <Eye className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                      </button>

                      {/* Mobile Desktop Prompt Footer */}
                      <div className="md:hidden mt-2 pt-3 border-t border-neutral-200/60 text-center">
                        <span className="text-[10px] text-neutral-400 font-mono inline-flex items-center gap-1.5">
                          <Laptop className="w-3 h-3 text-neutral-400" />
                          <span>Buka mode desktop untuk visualisasi grafik &amp; metrik lengkap</span>
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PANEL 2: DIGISAFE MODUL & KURIKULUM LITERASI SIBER (Data B)
            - Curated for DigiSafe Purwakarta E-Learning & Cyber Curriculum
            - Styled to match off-white editorial theme (#FAF9F6, soft pastels)
            - Includes Module pills, Cyber workshops, Citizen progress rings,
              Lead Creator profile (Razief F. Afkar), and Interactive Donut Diagram!
            ========================================================================= */}
        {activeProjectTab === 'edulearn' && (
          <div className="mt-8 transition-all duration-500 animate-fadeIn">
            <div className="rounded-3xl border border-neutral-200/90 bg-[#FAF9F6] p-4 sm:p-6 lg:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative">
              
              {/* Dashboard Layout: Mini Sidebar + Main View + Right Profile Sidebar */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
                
                {/* 1. Mini Left Icon Bar */}
                <div className="hidden xl:flex xl:col-span-1 bg-white rounded-2xl border border-neutral-200/80 p-3 flex-col items-center justify-between shadow-xs">
                  <div className="flex flex-col items-center gap-6">
                    {/* Brand Shield Icon */}
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>

                    {/* Navigation Icons */}
                    <div className="flex flex-col items-center gap-4 text-neutral-400">
                      <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:text-neutral-900 hover:bg-neutral-100 transition-colors" title="Cari Modul">
                        <Search className="w-4 h-4" />
                      </button>
                      <button className="w-9 h-9 rounded-xl flex items-center justify-center bg-neutral-900 text-white shadow-xs" title="Modul Utama">
                        <BookOpen className="w-4 h-4" />
                      </button>
                      <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:text-neutral-900 hover:bg-neutral-100 transition-colors" title="Forum Edukasi">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:text-neutral-900 hover:bg-neutral-100 transition-colors" title="Sertifikat Warga">
                        <Award className="w-4 h-4" />
                      </button>
                      <button className="w-9 h-9 rounded-xl flex items-center justify-center hover:text-neutral-900 hover:bg-neutral-100 transition-colors" title="Kuis Siber">
                        <GraduationCap className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Settings & Mini Avatar */}
                  <div className="flex flex-col items-center gap-4">
                    <button className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors">
                      <SlidersHorizontal className="w-4 h-4" />
                    </button>
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-xs font-bold text-emerald-800">
                      RF
                    </div>
                  </div>
                </div>

                {/* 2. Main Middle Area: Header, Subject Pills, Upcoming Workshops, Content Table */}
                <div className="lg:col-span-8 xl:col-span-7 flex flex-col gap-6">
                  
                  {/* Top Bar: "Portal Edukasi Warga DigiSafe" + "Tanya AI Siber" */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          DigiSafe Purwakarta LMS
                        </span>
                        <span className="text-[11px] text-neutral-400">• Literasi &amp; Edukasi Siber</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 flex items-center gap-2.5">
                        <span>Portal Edukasi Warga DigiSafe</span>
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200/80 shadow-xs">
                          <ShieldCheck className="w-4 h-4 text-emerald-700" />
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-xl">
                        Kurikulum interaktif pencegahan penipuan online, kebocoran data, dan keamanan transaksi digital warga Purwakarta.
                      </p>
                    </div>

                    <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-emerald-200 text-emerald-700 font-medium text-xs shadow-xs hover:bg-emerald-50 hover:scale-105 transition-all">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Tanya AI Siber</span>
                    </button>
                  </div>

                  {/* Category Pills (Semua Topik, Anti-Phishing, Privasi Data, Transaksi Finansial, Etika) - Hidden on Mobile */}
                  <div className="hidden md:flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
                    {[
                      { name: 'Semua Topik', icon: Sparkles, bg: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
                      { name: 'Anti-Phishing & Scam', icon: ShieldAlert, bg: 'bg-rose-50 border-rose-200 text-rose-800' },
                      { name: 'Privasi Data Pribadi', icon: Lock, bg: 'bg-purple-50 border-purple-200 text-purple-800' },
                      { name: 'Keamanan e-Wallet', icon: CreditCard, bg: 'bg-amber-50 border-amber-200 text-amber-800' },
                      { name: 'Etika & Anti-Hoaks', icon: Globe, bg: 'bg-cyan-50 border-cyan-200 text-cyan-800' },
                    ].map((subj) => {
                      const SubjIcon = subj.icon
                      return (
                        <button
                          key={subj.name}
                          onClick={() => setActiveEduCategory(subj.name)}
                          className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl border text-xs font-semibold whitespace-nowrap transition-all shadow-xs ${
                            activeEduCategory === subj.name 
                              ? 'bg-neutral-900 border-neutral-900 text-white scale-102 ring-1 ring-neutral-900' 
                              : `${subj.bg} hover:bg-white`
                          }`}
                        >
                          <span className="w-5 h-5 rounded-lg bg-white/90 border border-current/20 flex items-center justify-center">
                            <SubjIcon className="w-3 h-3 text-current" />
                          </span>
                          <span>{subj.name}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Section: Sosialisasi & Workshop Siber Terdekat */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold text-neutral-900">Sosialisasi &amp; Workshop Siber Terdekat</h4>
                      <button className="text-xs font-medium text-neutral-400 hover:text-neutral-900 transition-colors">
                        Lihat Jadwal Lengkap →
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Workshop Card 1: Anti-APK Scam */}
                      <div className="rounded-2xl bg-white border border-neutral-200/80 p-4 shadow-xs hover:shadow-md transition-shadow">
                        <div className="h-24 rounded-xl bg-gradient-to-br from-rose-100 via-rose-50 to-orange-100 p-3 flex flex-col justify-between relative overflow-hidden">
                          <span className="self-start text-[10px] font-semibold bg-white/90 text-rose-800 px-2 py-0.5 rounded-md shadow-xs">
                            Mulai: Hari Ini, 14:00 WIB
                          </span>
                          <div className="absolute right-3 bottom-1 w-14 h-14 opacity-40">
                            <ShieldCheck className="w-full h-full text-rose-600" />
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-600">Webinar Warga</span>
                          <h5 className="text-sm font-bold text-neutral-900 mt-0.5">Waspada Modus Undangan Nikah &amp; Resi APK Palsu</h5>

                          <div className="flex items-center justify-between mt-4">
                            {/* Avatar stack */}
                            <div className="flex items-center -space-x-1.5">
                              <span className="w-6 h-6 rounded-full bg-rose-200 border-2 border-white text-[9px] flex items-center justify-center font-bold text-rose-800">PW</span>
                              <span className="w-6 h-6 rounded-full bg-amber-200 border-2 border-white text-[9px] flex items-center justify-center font-bold text-amber-800">RA</span>
                              <span className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white text-[9px] flex items-center justify-center font-bold text-blue-800">DS</span>
                              <span className="text-[10px] text-neutral-400 font-medium pl-2.5">165+ Warga Terdaftar</span>
                            </div>

                            <button className="px-3.5 py-1.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors">
                              Ikuti
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Workshop Card 2: Keamanan e-Wallet UMKM */}
                      <div className="rounded-2xl bg-white border border-neutral-200/80 p-4 shadow-xs hover:shadow-md transition-shadow">
                        <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 p-3 flex flex-col justify-between relative overflow-hidden">
                          <span className="self-start text-[10px] font-semibold bg-white/90 text-emerald-800 px-2 py-0.5 rounded-md shadow-xs">
                            Mulai: Besok, 16:30 WIB
                          </span>
                          <div className="absolute right-2 bottom-1 w-14 h-14 opacity-40">
                            <Lock className="w-full h-full text-emerald-600" />
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">Workshop UMKM</span>
                          <h5 className="text-sm font-bold text-neutral-900 mt-0.5">Amankan QRIS, Rekening &amp; e-Wallet dari Scam</h5>

                          <div className="flex items-center justify-between mt-4">
                            {/* Avatar stack */}
                            <div className="flex items-center -space-x-1.5">
                              <span className="w-6 h-6 rounded-full bg-purple-200 border-2 border-white text-[9px] flex items-center justify-center font-bold text-purple-800">MK</span>
                              <span className="w-6 h-6 rounded-full bg-emerald-200 border-2 border-white text-[9px] flex items-center justify-center font-bold text-emerald-800">SR</span>
                              <span className="text-[10px] text-neutral-400 font-medium pl-2.5">98+ Pelaku UMKM</span>
                            </div>

                            <button className="px-3.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-900 hover:text-white text-xs font-semibold text-neutral-800 transition-colors">
                              Ikuti
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* MOBILE ONLY (< md): Summary Cards shown right after Workshops to keep exactly 2 sections on mobile */}
                    <div className="md:hidden grid grid-cols-2 gap-2.5 w-full mt-4">
                      <div className="rounded-xl bg-white border border-neutral-200/80 p-3 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <FileText className="w-3.5 h-3.5 text-emerald-700" />
                          </span>
                          <div>
                            <div className="text-xs font-bold text-neutral-900">24 Modul</div>
                            <div className="text-[10px] text-neutral-500">Materi Edukasi</div>
                          </div>
                        </div>
                        <a 
                          href="https://digisafepurwakarta.web.id" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] font-semibold text-neutral-500 hover:text-neutral-900 mt-2 block transition-colors"
                        >
                          Lihat di web →
                        </a>
                      </div>

                      <div className="rounded-xl bg-white border border-neutral-200/80 p-3 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                          </span>
                          <div>
                            <div className="text-xs font-bold text-neutral-900">150+ Kuis</div>
                            <div className="text-[10px] text-neutral-500">Simulasi Scam</div>
                          </div>
                        </div>
                        <a 
                          href="https://digisafepurwakarta.web.id" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] font-semibold text-neutral-500 hover:text-neutral-900 mt-2 block transition-colors"
                        >
                          Ikuti kuis →
                        </a>
                      </div>
                    </div>

                    {/* Mobile Desktop Prompt Footer for Panel 2 */}
                    <div className="md:hidden mt-4 pt-3 border-t border-neutral-200/60 text-center">
                      <span className="text-[10px] text-neutral-400 font-mono inline-flex items-center gap-1.5">
                        <Laptop className="w-3 h-3 text-neutral-400" />
                        <span>Buka mode desktop untuk kurikulum 6 modul &amp; diagram donat</span>
                      </span>
                    </div>

                  </div>

                  {/* Section: Modul Literasi Sedang Dipelajari Warga - Hidden on Mobile */}
                  <div className="hidden md:block">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold text-neutral-900">Modul Literasi Sedang Dipelajari Warga</h4>
                      <button className="text-xs font-medium text-neutral-400 hover:text-neutral-900 transition-colors">
                        Lihat 6 Modul Lengkap →
                      </button>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {[
                        {
                          title: 'Mengenal Ciri-Ciri Pesan & Link Phishing',
                          category: 'Anti-Phishing',
                          icon: ShieldAlert,
                          color: 'bg-rose-50 text-rose-700 border-rose-200',
                          materials: '5 Materi Video',
                          progress: 85,
                          time: '15 mnt',
                          action: 'Lanjutkan',
                          actionClass: 'bg-[#111111] text-white hover:bg-neutral-800'
                        },
                        {
                          title: 'Panduan UU PDP: Amankan KTP, NIK & Data Keluarga',
                          category: 'Data Privacy',
                          icon: Lock,
                          color: 'bg-purple-50 text-purple-700 border-purple-200',
                          materials: '6 Panduan Praktis',
                          progress: 64,
                          time: '20 mnt',
                          action: 'Lanjutkan',
                          actionClass: 'bg-[#111111] text-white hover:bg-neutral-800'
                        },
                        {
                          title: 'Aktivasi Verifikasi 2 Langkah (2FA) WhatsApp & Email',
                          category: 'Keamanan Akun',
                          icon: KeyRound,
                          color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
                          materials: '4 Langkah Praktis',
                          progress: 100,
                          time: 'Selesai',
                          action: 'Ulangi',
                          actionClass: 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                        },
                        {
                          title: 'Mendeteksi Berita Palsu & Hoaks di Media Sosial',
                          category: 'Literasi Digital',
                          icon: Globe,
                          color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
                          materials: '4 Studi Kasus',
                          progress: 48,
                          time: '10 mnt',
                          action: 'Mulai',
                          actionClass: 'bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-800'
                        },
                      ].map((course, idx) => {
                        const CourseIcon = course.icon
                        return (
                          <div 
                            key={idx}
                            className="flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-all flex-wrap sm:flex-nowrap"
                          >
                            <div className="flex items-center gap-3">
                              <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs border ${course.color}`}>
                                <CourseIcon className="w-4 h-4" />
                              </span>
                              <div>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                                  {course.category}
                                </span>
                                <div className="text-xs sm:text-sm font-bold text-neutral-900">
                                  {course.title}
                                </div>
                              </div>
                            </div>

                          <div className="flex items-center gap-4 sm:gap-6 self-end sm:self-center ml-auto">
                            <div className="hidden md:block text-right">
                              <span className="text-[10px] text-neutral-400 block">Kurikulum</span>
                              <span className="text-xs font-semibold text-neutral-700">{course.materials}</span>
                            </div>

                            {/* Circular Mini Progress Ring */}
                            <div className="flex items-center gap-2">
                              <div className="relative w-8 h-8">
                                <svg viewBox="0 0 36 36" className="w-8 h-8 -rotate-90">
                                  <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#E5E7EB"
                                    strokeWidth="3.5"
                                  />
                                  <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#059669"
                                    strokeWidth="3.5"
                                    strokeDasharray={`${course.progress}, 100`}
                                  />
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-neutral-700">
                                  {course.progress}%
                                </span>
                              </div>
                            </div>

                            <div className="hidden sm:block text-right">
                              <span className="text-[10px] text-neutral-400 block">Durasi</span>
                              <span className="text-xs font-semibold text-neutral-700 flex items-center gap-1">
                                <Clock className="w-3 h-3 text-neutral-400" />
                                {course.time}
                              </span>
                            </div>

                            <button className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${course.actionClass}`}>
                              {course.action}
                            </button>
                          </div>
                        </div>
                      )
                    })}
                    </div>
                  </div>

                </div>

                {/* 3. Right Sidebar: Developer Profile, Donut Diagram, Summary Cards - Hidden on Mobile (< lg) */}
                <div className="hidden lg:flex lg:col-span-4 xl:col-span-4 flex-col gap-5">
                  <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs flex flex-col items-center">
                    
                    {/* Top control icons */}
                    <div className="w-full flex items-center justify-between text-neutral-400 mb-3">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        Platform Creator
                      </span>
                      <SlidersHorizontal className="w-4 h-4 text-neutral-400 hover:text-neutral-900 transition-colors" />
                    </div>

                    {/* Profile Avatar */}
                    <div className="relative">
                      <div className="w-18 h-18 rounded-full p-1 bg-gradient-to-tr from-emerald-400 via-teal-300 to-amber-300 shadow-md">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img 
                            src="/profile-batik.jpg" 
                            alt="Razief F. Afkar" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                      <span className="absolute bottom-0 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
                    </div>

                    <h4 className="font-bold text-neutral-900 text-base mt-2.5">Razief F. Afkar</h4>
                    <p className="text-xs text-neutral-400 font-medium">Developer &amp; Desainer DigiSafe</p>

                    {/* 3 Stat Badges (6 Modul, 12.4k Warga, 98% Kelulusan) */}
                    <div className="grid grid-cols-3 gap-2 w-full mt-4">
                      <div className="rounded-xl bg-emerald-50/70 border border-emerald-100 p-2 text-center">
                        <BookOpen className="w-4 h-4 text-emerald-600 mx-auto" />
                        <div className="text-xs font-bold text-neutral-900 mt-1">6</div>
                        <div className="text-[10px] text-neutral-500">Modul</div>
                      </div>

                      <div className="rounded-xl bg-amber-50/70 border border-amber-100 p-2 text-center">
                        <Award className="w-4 h-4 text-amber-600 mx-auto" />
                        <div className="text-xs font-bold text-neutral-900 mt-1">12.4k</div>
                        <div className="text-[10px] text-neutral-500">Warga</div>
                      </div>

                      <div className="rounded-xl bg-purple-50/70 border border-purple-100 p-2 text-center">
                        <GraduationCap className="w-4 h-4 text-purple-600 mx-auto" />
                        <div className="text-xs font-bold text-neutral-900 mt-1">98%</div>
                        <div className="text-[10px] text-neutral-500">Kelulusan</div>
                      </div>
                    </div>

                    {/* Activity Time Header */}
                    <div className="w-full flex items-center justify-between mt-5 pt-4 border-t border-neutral-100">
                      <div>
                        <div className="text-[11px] text-neutral-400 font-medium">Tingkat Penyelesaian</div>
                        <div className="text-base font-bold text-neutral-900 flex items-center gap-2">
                          <span>+84%</span>
                          <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                            Efektif
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] text-neutral-500 bg-neutral-100 px-2 py-1 rounded-md flex items-center gap-1 font-mono">
                        Tahun 2024
                      </span>
                    </div>

                    {/* =========================================================================
                        THE DONUT DIAGRAM: Distribusi Materi Yang Dipelajari Warga
                        ========================================================================= */}
                    <div className="relative w-full flex flex-col items-center mt-3 pt-2">
                      <div className="relative w-36 h-36">
                        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          {/* Segment 1: Anti-Scam & Phishing (Emerald Green - 48%) */}
                          <circle
                            cx="50"
                            cy="50"
                            r="36"
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="14"
                            strokeDasharray="108 118"
                            strokeDashoffset="0"
                            className="cursor-pointer hover:opacity-85 transition-opacity"
                            onMouseEnter={() => setHoveredDonutSlice('Anti-Scam & Phishing: 48%')}
                            onMouseLeave={() => setHoveredDonutSlice(null)}
                          />
                          {/* Segment 2: Privasi Data (Amber - 26%) */}
                          <circle
                            cx="50"
                            cy="50"
                            r="36"
                            fill="none"
                            stroke="#F59E0B"
                            strokeWidth="14"
                            strokeDasharray="59 167"
                            strokeDashoffset="-110"
                            className="cursor-pointer hover:opacity-85 transition-opacity"
                            onMouseEnter={() => setHoveredDonutSlice('Privasi Data Pribadi: 26%')}
                            onMouseLeave={() => setHoveredDonutSlice(null)}
                          />
                          {/* Segment 3: Keamanan e-Wallet & Finansial (Blue - 16%) */}
                          <circle
                            cx="50"
                            cy="50"
                            r="36"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="14"
                            strokeDasharray="36 190"
                            strokeDashoffset="-171"
                            className="cursor-pointer hover:opacity-85 transition-opacity"
                            onMouseEnter={() => setHoveredDonutSlice('Keamanan Finansial: 16%')}
                            onMouseLeave={() => setHoveredDonutSlice(null)}
                          />
                          {/* Segment 4: Etika & Anti-Hoaks (Rose - 10%) */}
                          <circle
                            cx="50"
                            cy="50"
                            r="36"
                            fill="none"
                            stroke="#FB7185"
                            strokeWidth="14"
                            strokeDasharray="23 203"
                            strokeDashoffset="-209"
                            className="cursor-pointer hover:opacity-85 transition-opacity"
                            onMouseEnter={() => setHoveredDonutSlice('Etika & Anti-Hoaks: 10%')}
                            onMouseLeave={() => setHoveredDonutSlice(null)}
                          />
                        </svg>

                        {/* Center Circle & Stats */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                          <span className="text-[10px] text-neutral-400 font-medium">Warga</span>
                          <span className="text-lg font-extrabold text-neutral-900 leading-none mt-0.5">12.4k</span>
                        </div>
                      </div>

                      {/* Donut Legend / Tooltip */}
                      <div className="text-[11px] font-medium text-neutral-600 mt-2 h-4 text-center">
                        {hoveredDonutSlice ? (
                          <span className="text-neutral-900 font-bold bg-neutral-100 px-2 py-0.5 rounded-md">
                            {hoveredDonutSlice}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-emerald-700">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Anti-Scam &amp; Phishing 48%
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Summary Cards (24 Materi & 150+ Latihan Kuis) */}
                    <div className="grid grid-cols-2 gap-2.5 w-full mt-4">
                      <div className="rounded-xl bg-[#FAF9F6] border border-neutral-200/80 p-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <FileText className="w-3.5 h-3.5 text-emerald-700" />
                          </span>
                          <div>
                            <div className="text-xs font-bold text-neutral-900">24 Modul</div>
                            <div className="text-[10px] text-neutral-500">Materi Edukasi</div>
                          </div>
                        </div>
                        <a 
                          href="https://digisafepurwakarta.web.id" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] font-semibold text-neutral-500 hover:text-neutral-900 mt-2 block transition-colors"
                        >
                          Lihat di web →
                        </a>
                      </div>

                      <div className="rounded-xl bg-[#FAF9F6] border border-neutral-200/80 p-3">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                            <ShieldCheck className="w-3.5 h-3.5 text-purple-700" />
                          </span>
                          <div>
                            <div className="text-xs font-bold text-neutral-900">150+ Kuis</div>
                            <div className="text-[10px] text-neutral-500">Simulasi Scam</div>
                          </div>
                        </div>
                        <a 
                          href="https://digisafepurwakarta.web.id" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[10px] font-semibold text-neutral-500 hover:text-neutral-900 mt-2 block transition-colors"
                        >
                          Ikuti kuis →
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PANEL 3: DIGISAFE PUSAT ANALITIK & PENGADUAN SIBER (Data C)
            - Curated for DigiSafe Purwakarta Cybersecurity Monitoring Center
            - Styled to match off-white editorial theme (#FAF9F6, soft pastels)
            - Includes Target gauge, 3D iridescent bubble orb,
              Squircle pastel incident cards, Monthly Bar Chart (Prevented vs Reported),
              Interactive Response Time Tracker, and Volunteer Response Team!
            ========================================================================= */}
        {activeProjectTab === 'tasklab' && (
          <div className="mt-8 transition-all duration-500 animate-fadeIn">
            <div className="rounded-3xl border border-neutral-200/90 bg-[#FAF9F6] p-4 sm:p-6 lg:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
                
                {/* 1. Left Mini Sidebar (DIGISAFE, Lead Profile, Navigation, Hotline) */}
                <div className="hidden xl:flex xl:col-span-2 bg-white rounded-2xl border border-neutral-200/80 p-4 flex-col justify-between shadow-xs">
                  <div>
                    {/* Brand Logo */}
                    <div className="pb-4 border-b border-neutral-100">
                      <div className="font-sans font-extrabold text-sm tracking-wider text-rose-600 uppercase flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-rose-600" />
                        <span>DIGISAFE</span>
                      </div>
                      <div className="text-[9px] font-bold tracking-wider text-neutral-400 uppercase mt-0.5">
                        Purwakarta Cyber Watch
                      </div>
                    </div>

                    {/* Lead Profile */}
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-xs shadow-xs overflow-hidden border border-neutral-200">
                        <img 
                          src="/profile-school.jpg" 
                          alt="Razief F. Afkar" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-neutral-900 leading-tight">Razief F. Afkar</div>
                        <div className="text-[10px] text-neutral-400 font-semibold uppercase">Platform Lead</div>
                      </div>
                    </div>

                    {/* Sidebar Nav Links */}
                    <nav className="flex flex-col gap-1.5 mt-6">
                      {[
                        { name: 'Monitoring Siber', icon: Activity, active: true },
                        { name: 'Tim Relawan', icon: Users },
                        { name: 'Laporan Aduan', icon: FileText },
                        { name: 'Jadwal Sosialisasi', icon: Calendar },
                        { name: 'Analitik Daerah', icon: BarChart3 },
                      ].map((link) => {
                        const Icon = link.icon
                        return (
                          <button
                            key={link.name}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all relative ${
                              link.active
                                ? 'bg-rose-50 text-rose-600 font-bold'
                                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                            }`}
                          >
                            {link.active && (
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-rose-500 rounded-r-full" />
                            )}
                            <Icon className="w-3.5 h-3.5" />
                            <span>{link.name}</span>
                          </button>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Hotline & Emergency Response Section */}
                  <div className="pt-4 border-t border-neutral-100">
                    <div className="flex items-center justify-between text-[11px] font-bold text-neutral-400 mb-2">
                      <span>Hotline Aduan</span>
                      <ChevronDown className="w-3 h-3" />
                    </div>
                    <div className="flex items-center gap-2.5 p-2 rounded-xl bg-rose-50/60 border border-rose-200/60">
                      <div className="relative">
                        <span className="w-7 h-7 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-[10px] font-bold">
                          DS
                        </span>
                        <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-white animate-pulse" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-neutral-900 truncate">Aduan Siber Cepat</div>
                        <div className="text-[10px] text-rose-700 flex items-center gap-1 font-medium">
                          <PhoneCall className="w-2.5 h-2.5 text-rose-600" />
                          <span>Siaga 24/7 Warga</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Main Middle Area: Header, Weekly Target Gauge, Squircle Cards, Monthly Bar Chart */}
                <div className="lg:col-span-8 xl:col-span-7 flex flex-col gap-6">
                  
                  {/* Top Bar: "Pusat Analitik & Pengaduan Siber" & Relawan response team */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                          DigiSafe Monitoring
                        </span>
                        <span className="text-[11px] text-neutral-400">• Purwakarta Tanggap Siber</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900">
                        Pusat Analitik &amp; Pengaduan Siber
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                        Pemantauan insiden siber aktif, statistik edukasi warga, dan status penanganan penipuan digital.
                      </p>
                    </div>

                    {/* Response Team Avatar Stack */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-neutral-500 hidden sm:inline">Tim Siaga Siber</span>
                      <div className="flex items-center -space-x-1.5">
                        <span className="w-7 h-7 rounded-full bg-purple-200 border-2 border-white text-[10px] font-bold text-purple-800 flex items-center justify-center" title="Relawan Diskominfo">DK</span>
                        <span className="w-7 h-7 rounded-full bg-amber-200 border-2 border-white text-[10px] font-bold text-amber-800 flex items-center justify-center" title="Relawan Siber PWK">RS</span>
                        <span className="w-7 h-7 rounded-full bg-cyan-200 border-2 border-white text-[10px] font-bold text-cyan-800 flex items-center justify-center" title="Koordinator Lapangan">KL</span>
                        <span className="w-7 h-7 rounded-full bg-neutral-100 border-2 border-white text-[10px] font-bold text-neutral-600 flex items-center justify-center">15+</span>
                        <button className="w-7 h-7 rounded-full border border-dashed border-neutral-300 hover:border-neutral-900 text-neutral-500 hover:text-neutral-900 flex items-center justify-center text-xs ml-1 transition-colors" title="Gabung Relawan">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Middle Row: Target Proteksi Warga + 3D Orb + Dashed Lapor Button - Hidden on Mobile */}
                  <div className="hidden md:grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    
                    {/* Widget 1: "Target Proteksi Warga Bulan Ini" (Radial 82% + 3D pastel orb) */}
                    <div className="sm:col-span-7 rounded-2xl bg-white border border-neutral-200/80 p-4 shadow-xs flex items-center justify-between relative overflow-hidden">
                      <div className="z-10">
                        <span className="text-xs font-bold text-neutral-900 block leading-tight">Target Literasi &amp;<br />Proteksi Warga:</span>
                        <span className="text-[11px] text-neutral-500 font-medium mt-3 block">12.4k dari 15k warga</span>
                      </div>

                      {/* 3D Soft Pastel Bubble Orb */}
                      <div 
                        className="w-14 h-14 rounded-full pointer-events-none shadow-lg animate-floatGentle z-10"
                        style={{
                          background: 'radial-gradient(circle at 35% 35%, #F472B6 0%, #C084FC 45%, #60A5FA 85%)',
                          filter: 'drop-shadow(0 10px 15px rgba(236, 72, 153, 0.35))'
                        }}
                      />

                      {/* Circular Gauge 82% */}
                      <div className="relative w-16 h-16 shrink-0 z-10">
                        <svg viewBox="0 0 36 36" className="w-16 h-16 -rotate-90">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#FEE2E2"
                            strokeWidth="3.5"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E11D48"
                            strokeWidth="3.5"
                            strokeDasharray="82, 100"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-xs font-extrabold text-neutral-900">
                          82%
                        </span>
                      </div>
                    </div>

                    {/* Widget 2: "LAPOR ADUAN SCAM" Dashed Button */}
                    <div className="sm:col-span-5 h-full">
                      <a 
                        href="https://digisafepurwakarta.web.id" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full h-full min-h-[96px] rounded-2xl border-2 border-dashed border-neutral-300 hover:border-neutral-900 bg-white/60 hover:bg-white flex flex-col items-center justify-center p-3 text-neutral-500 hover:text-neutral-900 transition-all shadow-xs group"
                      >
                        <span className="text-[11px] font-extrabold uppercase tracking-wider">BUAT ADUAN SCAM</span>
                        <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-500 border border-rose-200 flex items-center justify-center mt-1.5 group-hover:scale-110 transition-transform">
                          <Plus className="w-4 h-4" />
                        </div>
                      </a>
                    </div>

                  </div>

                  {/* Two Pastel Squircle Cards (18 LAPORAN DITANGANI & 142 KASUS TERCEGAH) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Squircle 1: Soft Pastel Purple/Pink (18 Laporan Ditangani) */}
                    <div className="rounded-3xl p-5 bg-[#F6EEFA] border border-[#E9D6F3] shadow-xs flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-2xl bg-white/90 text-purple-600 flex items-center justify-center shadow-xs">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold text-purple-700 bg-white/80 px-2 py-0.5 rounded-full border border-purple-200">
                          Investigasi Berjalan
                        </span>
                      </div>
                      <div className="my-4">
                        <div className="text-4xl font-extrabold text-neutral-900 leading-none">18</div>
                        <div className="text-xs font-bold text-purple-900 tracking-wider uppercase mt-1">LAPORAN SEDANG DITANGANI</div>
                        <p className="text-[11px] text-purple-800/80 mt-1">Verifikasi tautan phishing &amp; modus APK ilegal</p>
                      </div>
                      <a 
                        href="https://digisafepurwakarta.web.id" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-neutral-900 hover:text-white text-xs font-semibold text-neutral-800 transition-colors shadow-xs"
                      >
                        <span>PANTAU PROSES</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Squircle 2: Soft Pastel Orange/Amber (142 Kasus Tercegah) */}
                    <div className="rounded-3xl p-5 bg-[#FDEEDB] border border-[#FAD6AF] shadow-xs flex flex-col justify-between hover:translate-y-[-2px] transition-transform">
                      <div className="flex items-center justify-between">
                        <div className="w-9 h-9 rounded-2xl bg-white/90 text-orange-600 flex items-center justify-center shadow-xs">
                          <CheckCheck className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold text-orange-700 bg-white/80 px-2 py-0.5 rounded-full border border-orange-200">
                          +28% dari bulan lalu
                        </span>
                      </div>
                      <div className="my-4">
                        <div className="text-4xl font-extrabold text-neutral-900 leading-none">142</div>
                        <div className="text-xs font-bold text-orange-950 tracking-wider uppercase mt-1">KASUS BERHASIL DICEGAH</div>
                        <p className="text-[11px] text-orange-900/80 mt-1">Melalui sosialisasi dini &amp; kewaspadaan warga</p>
                      </div>
                      <a 
                        href="https://digisafepurwakarta.web.id" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-neutral-900 hover:text-white text-xs font-semibold text-neutral-800 transition-colors shadow-xs"
                      >
                        <span>LIHAT REKAP</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Mobile Quick Action for Panel 3 */}
                  <div className="md:hidden mt-1">
                    <a 
                      href="https://digisafepurwakarta.web.id" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl border border-dashed border-rose-300 bg-rose-50/70 hover:bg-rose-100 flex items-center justify-center gap-2 text-rose-700 font-bold text-xs transition-colors shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>BUAT ADUAN SCAM CEPAT</span>
                    </a>
                  </div>

                  {/* =========================================================================
                      THE MONTHLY BAR CHART DIAGRAM: Tren Kasus Dicegah vs Laporan Insiden - Hidden on Mobile
                      ========================================================================= */}
                  <div className="hidden md:block rounded-2xl bg-white border border-neutral-200/80 p-5 shadow-xs">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-neutral-900">Tren Edukasi &amp; Pencegahan Scam Purwakarta</h4>
                        <div className="flex items-center gap-4 text-[11px] text-neutral-500 mt-1">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-rose-500" />
                            Kasus Dicegah (2024)
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            Laporan Insiden (2023)
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-md flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                        <span>Data Bulanan</span>
                        <ChevronDown className="w-3 h-3 text-neutral-400" />
                      </span>
                    </div>

                    {/* SVG/HTML Dual Bar Chart for 12 Months */}
                    <div className="relative pt-4 pb-1">
                      <div className="h-32 flex items-end justify-between gap-1 sm:gap-2 px-2 border-b border-neutral-100">
                        {monthlyChartData.map((d, i) => {
                          const thisYearHeight = (d.thisYear / 4) * 100
                          const lastYearHeight = (d.lastYear / 4) * 100
                          const isHovered = hoveredMonthBar === d.month

                          return (
                            <div 
                              key={d.month} 
                              className="flex flex-col items-center flex-1 h-full justify-end group cursor-pointer"
                              onMouseEnter={() => setHoveredMonthBar(d.month)}
                              onMouseLeave={() => setHoveredMonthBar(null)}
                            >
                              {/* Hover tooltip */}
                              {isHovered && (
                                <div className="absolute -top-7 px-2 py-0.5 rounded bg-neutral-900 text-white text-[10px] font-mono whitespace-nowrap z-20 shadow-md">
                                  {d.month}: {Math.round(d.thisYear * 100)} dicegah vs {Math.round(d.lastYear * 100)} insiden
                                </div>
                              )}

                              {/* Dual Bars */}
                              <div className="flex items-end gap-1 w-full justify-center">
                                {/* This Year Bar (Rose/Coral) */}
                                <div 
                                  className={`w-2 sm:w-2.5 rounded-t-md transition-all duration-300 ${
                                    isHovered ? 'bg-rose-600 scale-105' : 'bg-rose-500'
                                  }`}
                                  style={{ height: `${thisYearHeight}%` }}
                                />
                                {/* Last Year Bar (Amber/Gold) */}
                                <div 
                                  className={`w-2 sm:w-2.5 rounded-t-md transition-all duration-300 ${
                                    isHovered ? 'bg-amber-500 scale-105' : 'bg-amber-400'
                                  }`}
                                  style={{ height: `${lastYearHeight}%` }}
                                />
                              </div>

                              {/* Month Label */}
                              <span className={`text-[10px] font-mono mt-2 transition-colors ${
                                isHovered ? 'text-neutral-900 font-bold' : 'text-neutral-400'
                              }`}>
                                {d.month}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                </div>

                {/* 3. Right Column: Aduan Penipuan Terkini List & Response Time Tracker */}
                <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-5">
                  
                  {/* Aduan Penipuan Terkini Active List - Hidden on Mobile */}
                  <div className="hidden md:block bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold text-neutral-900">Aduan Siber Terkini</h4>
                      <a 
                        href="https://digisafepurwakarta.web.id" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[10px] font-bold text-neutral-400 hover:text-neutral-900 uppercase tracking-wider transition-colors"
                      >
                        FORUM ADUAN →
                      </a>
                    </div>

                    <div className="flex flex-col gap-3">
                      {[
                        { 
                          name: 'APK Undangan Nikah Palsu', 
                          icon: FileText, 
                          color: 'bg-rose-50 text-rose-600 border-rose-200',
                          tag: 'Kec. Kota',
                          status: 'Diblokir'
                        },
                        { 
                          name: 'Phishing Promo Kuota Palsu', 
                          icon: Globe, 
                          color: 'bg-amber-50 text-amber-600 border-amber-200',
                          tag: 'Kec. Jatiluhur',
                          status: 'Edukasi Terbit'
                        },
                        { 
                          name: 'Takeover Akun WhatsApp Warga', 
                          icon: Lock, 
                          color: 'bg-purple-50 text-purple-600 border-purple-200',
                          tag: 'Kec. Plered',
                          status: 'Pulih'
                        },
                      ].map((proj, idx) => {
                        const Icon = proj.icon
                        return (
                          <div 
                            key={idx}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/60 hover:bg-white hover:border-neutral-300 transition-all"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center border ${proj.color}`}>
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <span className="text-xs font-bold text-neutral-800 block truncate max-w-[130px]">{proj.name}</span>
                                <span className="text-[10px] text-neutral-400 font-medium">{proj.tag}</span>
                              </div>
                            </div>

                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-neutral-200 text-neutral-700 shadow-xs">
                              {proj.status}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Incident Response Time Tracker Interactive Widget */}
                  <div className="bg-white rounded-2xl border border-neutral-200/80 p-5 shadow-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-xs font-bold text-neutral-900">Waktu Respons Aduan</span>
                      <SlidersHorizontal className="w-3.5 h-3.5 hover:text-neutral-900 cursor-pointer" />
                    </div>

                    <div className="my-4 text-center">
                      <div className="font-mono text-3xl font-extrabold tracking-wider text-neutral-900">
                        {formatTimer(tasklabTimer)}
                      </div>
                      <span className="text-[10px] text-neutral-500 font-medium mt-1 inline-flex items-center justify-center gap-1.5">
                        {isTimerRunning ? (
                          <>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Tim Relawan Aktif Menangani</span>
                          </>
                        ) : (
                          <>
                            <Pause className="w-3 h-3 text-neutral-400" />
                            <span>Waktu Rata-rata Penanganan (02:45)</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Interactive Play / Pause / Reset Buttons */}
                    <div className="flex items-center justify-center gap-3">
                      {/* Play Button */}
                      <button
                        onClick={() => setIsTimerRunning(true)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-xs ${
                          isTimerRunning 
                            ? 'bg-rose-500 text-white shadow-md scale-105' 
                            : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                        }`}
                        aria-label="Mulai Timer Respons"
                        title="Mulai Monitoring Respons"
                      >
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </button>

                      {/* Pause Button */}
                      <button
                        onClick={() => setIsTimerRunning(false)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-xs ${
                          !isTimerRunning 
                            ? 'bg-neutral-900 text-white shadow-md' 
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                        aria-label="Jeda Timer"
                        title="Jeda"
                      >
                        <Pause className="w-4 h-4" />
                      </button>

                      {/* Reset Button */}
                      <button
                        onClick={() => {
                          setIsTimerRunning(false)
                          setTasklabTimer(9900) // Reset to 02:45:00
                        }}
                        className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 flex items-center justify-center transition-all shadow-xs"
                        aria-label="Reset Timer"
                        title="Reset Waktu"
                      >
                        <Square className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Mobile Desktop Prompt Footer for Panel 3 */}
                    <div className="md:hidden mt-1 pt-3 border-t border-neutral-200/60 text-center">
                      <span className="text-[10px] text-neutral-400 font-mono inline-flex items-center gap-1.5">
                        <Laptop className="w-3 h-3 text-neutral-400" />
                        <span>Buka mode desktop untuk grafik tahunan &amp; riwayat aduan lengkap</span>
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>

      {/* =========================================================================
          4. THE SCREENSHOT MODAL / LIGHTBOX (Triggered by Preview Full Screenshot)
          - Displays the user's real uploaded screenshot (/digisafe-screenshot.png)
          - Max 85vh height so background blur is clearly visible
          - Soft glowing radial gradient behind the image (off-white/grey)
          - Close button (X), ESC listener, outside click to close
          ========================================================================= */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-neutral-950/75 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false)
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-screenshot-title"
        >
          {/* Modal Content Wrapper */}
          <div className="relative max-w-6xl w-full flex flex-col items-center justify-center">
            
            {/* Top Bar with Info & Close Button */}
            <div className="w-full flex items-center justify-between text-white mb-3 px-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h4 id="modal-screenshot-title" className="text-sm sm:text-base font-semibold tracking-wide text-white">
                  DigiSafe Purwakarta — Platform Preview
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://digisafepurwakarta.web.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                >
                  <span>Visit digisafepurwakarta.web.id</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {/* Close Button (X) */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white hover:text-white transition-all duration-200 hover:rotate-90 cursor-pointer"
                  aria-label="Close Screenshot Modal"
                  id="close-modal-btn"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Container with Soft Glowing Radial Gradient Decoration */}
            <div className="relative w-full flex items-center justify-center">
              
              {/* Soft Glowing Radial Gradient Behind Image (Off-white / Grey, no harsh colors) */}
              <div 
                className="absolute inset-0 -z-10 pointer-events-none rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.22) 0%, rgba(200, 200, 200, 0.10) 45%, rgba(0, 0, 0, 0) 75%)',
                  filter: 'blur(35px)',
                  transform: 'scale(1.08)'
                }}
              />

              {/* The Real DigiSafe Screenshot Image (Max 85vh height as requested) */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] bg-neutral-900">
                <img 
                  src="/digisafe-screenshot.png" 
                  alt="DigiSafe Purwakarta Real Website Screenshot"
                  className="max-h-[75vh] sm:max-h-[82vh] w-auto max-w-full object-contain select-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Bottom Caption Pill */}
            <div className="mt-3 text-center">
              <p className="text-xs text-neutral-400 font-sans">
                Tekan <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[11px] font-mono border border-white/20">ESC</kbd> atau klik di luar untuk menutup preview
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
