import React from 'react'
import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Plus,
  Search,
  Mic,
  Sparkles,
  Trophy,
  Award,
  Medal,
  Star,
  Flag,
  FileText,
  Laptop,
  Compass,
  ShieldCheck,
  Check,
  Droplets,
  Flame,
  MousePointer2
} from 'lucide-react'

// =========================================================================
// COBALT BLUE FROSTED GLASSMORPHISM UI WIDGETS (From Attached Icon Set)
// High-end editorial glassmorphic 3D tokens in deep cobalt & frosted glass
// =========================================================================

// 1. Frosted Glass Folder (Early Education / Foundation)
function FrostedFolderIcon({ className = 'w-7 h-7' }) {
  return (
    <div className={`relative ${className} select-none flex-none`}>
      {/* Solid cobalt blue back tab */}
      <div className="absolute inset-0 bg-[#0052FF] rounded-lg shadow-xs">
        <div className="absolute -top-1 left-1.5 w-3.5 h-1.5 bg-[#0052FF] rounded-t-sm" />
      </div>
      {/* Front frosted glass pocket */}
      <div className="absolute inset-x-0 bottom-0 h-[72%] bg-blue-100/40 backdrop-blur-md border border-white/70 rounded-b-lg rounded-t-sm shadow-xs" />
    </div>
  )
}

// 2. Frosted Glass Calendar "31" (Middle School / Growth Milestones)
function FrostedCalendarIcon({ className = 'w-7 h-7' }) {
  return (
    <div className={`relative ${className} select-none flex-none`}>
      {/* Solid blue binder loops */}
      <div className="absolute -top-1 left-1.5 w-1.5 h-2 bg-[#0052FF] rounded-full z-10" />
      <div className="absolute -top-1 right-1.5 w-1.5 h-2 bg-[#0052FF] rounded-full z-10" />
      {/* Frosted calendar body */}
      <div className="absolute inset-0 bg-blue-100/40 backdrop-blur-md border border-white/70 rounded-lg shadow-xs flex items-center justify-center pt-1">
        <span className="font-['Inter'] font-extrabold text-[10px] text-[#0052FF] leading-none">31</span>
      </div>
    </div>
  )
}

// 3. Frosted Glass Code / Math (Vocational High School - Software Engineering)
function FrostedMathIcon({ className = 'w-7 h-7' }) {
  return (
    <div className={`relative ${className} select-none flex-none`}>
      {/* Solid blue back card */}
      <div className="absolute inset-0 bg-[#0052FF] rounded-lg shadow-xs" />
      {/* Frosted glass front with math/code symbols */}
      <div className="absolute -top-0.5 -left-0.5 inset-0 bg-blue-100/45 backdrop-blur-md border border-white/70 rounded-lg shadow-xs grid grid-cols-2 p-1 items-center justify-items-center">
        <span className="text-[7.5px] font-mono font-bold text-[#0052FF] leading-none">×</span>
        <span className="text-[7.5px] font-mono font-bold text-[#0052FF] leading-none">+</span>
        <span className="text-[7.5px] font-mono font-bold text-[#0052FF] leading-none">−</span>
        <span className="text-[7.5px] font-mono font-bold text-[#0052FF] leading-none">=</span>
      </div>
    </div>
  )
}

// 4. Frosted Glass Location Pin (Destination / Future Horizon)
function FrostedLocationIcon({ className = 'w-7 h-7' }) {
  return (
    <div className={`relative ${className} select-none flex-none`}>
      {/* Solid blue base podium */}
      <div className="absolute bottom-0 inset-x-1 h-2.5 bg-[#0052FF] rounded-xs" />
      {/* Frosted glass location pointer pin */}
      <div className="absolute -top-1 inset-x-1 bottom-1 bg-blue-100/45 backdrop-blur-md border border-white/70 rounded-t-full rounded-b-md shadow-xs flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
      </div>
    </div>
  )
}

// 5. Floating Accent Widget: Command Key (⌘ command)
function FrostedCommandWidget() {
  return (
    <div className="relative w-20 h-9 select-none pointer-events-none drop-shadow-sm">
      <div className="absolute right-0 top-0 w-12 h-7 bg-[#0052FF] rounded-lg shadow-xs" />
      <div className="absolute left-0 bottom-0 w-15 h-7 bg-blue-100/45 backdrop-blur-md border border-white/80 rounded-lg shadow-xs flex flex-col justify-center px-2">
        <span className="text-[9px] font-mono font-bold text-[#0052FF] leading-none">⌘</span>
        <span className="text-[7.5px] font-mono text-[#0052FF] font-medium leading-none mt-0.5">command</span>
      </div>
    </div>
  )
}

// 6. Floating Accent Widget: Overlapping Glass Circles
function FrostedCirclesWidget() {
  return (
    <div className="relative w-12 h-7 select-none pointer-events-none flex items-center drop-shadow-xs">
      <div className="absolute right-0.5 w-5 h-5 rounded-full bg-[#0052FF] shadow-xs" />
      <div className="absolute left-0.5 w-5 h-5 rounded-full bg-blue-100/45 backdrop-blur-md border border-white/80 shadow-xs" />
    </div>
  )
}

// 7. Floating Accent Widget: Cloud & Sun (Horizon)
function FrostedCloudSunWidget() {
  return (
    <div className="relative w-14 h-8 select-none pointer-events-none drop-shadow-xs">
      <div className="absolute right-2 top-0.5 w-4 h-4 rounded-full bg-[#0052FF]" />
      <div className="absolute left-0 bottom-0 w-11 h-5.5 bg-blue-100/45 backdrop-blur-md border border-white/80 rounded-full shadow-xs" />
    </div>
  )
}

// =========================================================================
// TRENDY REALISTIC OFFICE STATIONERY SVG COMPONENTS (From "Trendy Office Things")
// =========================================================================

function PaperclipIcon({ color = '#EC4899', className = 'w-6 h-12', rotate = 0 }) {
  return (
    <svg 
      viewBox="0 0 32 64" 
      fill="none" 
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, filter: 'drop-shadow(1px 3px 3px rgba(0,0,0,0.18))' }}
      aria-hidden="true"
    >
      <path
        d="M 10 24 L 10 46 C 10 53, 22 53, 22 46 L 22 14 C 22 5, 6 5, 6 14 L 6 48 C 6 59, 26 59, 26 48 L 26 22"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 9.5 24 L 9.5 46 C 9.5 52, 21.5 52, 21.5 46 L 21.5 14 C 21.5 6, 6.5 6, 6.5 14"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PushPinIcon({ color = '#EC4899', needleColor = '#64748B', className = 'w-7 h-9', rotate = -25 }) {
  const gradId = `pinGrad-${color.replace(/[^a-zA-Z0-9]/g, '')}`
  return (
    <svg 
      viewBox="0 0 36 44" 
      fill="none" 
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, filter: 'drop-shadow(2px 4px 5px rgba(0,0,0,0.22))' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <line x1="18" y1="28" x2="6" y2="42" stroke={needleColor} strokeWidth="2.4" strokeLinecap="round" />
      <polygon points="6,42 8,39 5,40" fill="#334155" />
      <ellipse cx="18" cy="27" rx="9" ry="3.5" fill={color} />
      <path d="M 12 14 C 13 20, 11 25, 10 27 L 26 27 C 25 25, 23 20, 24 14 Z" fill={`url(#${gradId})`} />
      <rect x="11" y="7" width="14" height="7" rx="2" fill={color} />
      <ellipse cx="18" cy="7" rx="7" ry="2.5" fill="#FFFFFF" fillOpacity="0.5" />
      <ellipse cx="17" cy="6.5" rx="5" ry="1.5" fill="#FFFFFF" fillOpacity="0.8" />
    </svg>
  )
}

function BulldogClipIcon({ className = 'w-9 h-9', rotate = 0 }) {
  return (
    <svg 
      viewBox="0 0 40 40" 
      fill="none" 
      className={className}
      style={{ transform: `rotate(${rotate}deg)`, filter: 'drop-shadow(1px 3px 4px rgba(0,0,0,0.2))' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="metalChrome" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#E2E8F0" />
          <stop offset="70%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="11" r="6.5" fill="none" stroke="url(#metalChrome)" strokeWidth="2.5" />
      <circle cx="20" cy="11" r="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      <path d="M 17 17 L 15 26 M 23 17 L 25 26" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <path d="M 6 26 L 34 26 C 36 26, 36 33, 34 33 L 6 33 C 4 33, 4 26, 6 26 Z" fill="url(#metalChrome)" stroke="#64748B" strokeWidth="1" />
      <line x1="8" y1="28" x2="32" y2="28" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.85" />
    </svg>
  )
}

// =========================================================================
// DATA: SUB-SECTION 1 - ACADEMIC JOURNEY (With Frosted Glassmorphism Widgets)
// =========================================================================
const academicNodes = [
  {
    id: 1,
    position: 'below',
    number: '1',
    school: 'SDIT Al-Manar',
    level: 'Early Education',
    period: '2015 — 2021',
    desc: 'Fondasi dasar karakter, kedisiplinan belajar, dan pembentukan nilai budi pekerti yang kokoh.',
    isPlaceholder: false,
    FrostedWidget: FrostedFolderIcon,
    accentBorder: 'border-blue-100',
  },
  {
    id: 2,
    position: 'above',
    number: '2',
    school: 'SMP Negeri 1 Purwakarta',
    level: 'Middle School',
    period: '2021 — 2024',
    desc: 'Mulai aktif dalam dinamika organisasi kesiswaan, public speaking, dan kerja sama tim.',
    isPlaceholder: false,
    FrostedWidget: FrostedCalendarIcon,
    accentBorder: 'border-blue-100',
  },
  {
    id: 3,
    position: 'below',
    number: '3',
    school: 'SMK Negeri 2 Purwakarta',
    level: 'Vocational High School',
    period: '2024 — Now',
    desc: 'Fokus mendalam pada Rekayasa Perangkat Lunak, kepemimpinan strategis, dan pencapaian teknologi.',
    isPlaceholder: false,
    FrostedWidget: FrostedMathIcon,
    accentBorder: 'border-blue-200/80',
  },
  {
    id: 4,
    position: 'above',
    number: '4',
    school: '???',
    level: 'The Next Chapter (Coming Soon)',
    period: 'Future Horizon',
    desc: 'Pintu gerbang perguruan tinggi dan eksplorasi skala nasional/internasional yang sedang dipersiapkan.',
    isPlaceholder: true,
    FrostedWidget: FrostedLocationIcon,
    accentBorder: 'border-purple-300',
  },
]

// =========================================================================
// DATA: PART 1 - LEADERSHIP ORBIT CARDS
// =========================================================================
const sgeLeadershipCards = [
  {
    id: 'pasusja',
    code: 'PASUSJA-01',
    title: 'Ketua Umum PASUSJA',
    sub: 'Organizational Development',
    period: '2026',
    pinType: 'pink-pin',
    icon: Flag,
    theme: {
      outerBg: 'bg-[#FF4D4D]',
      outerBorder: 'border-red-300',
      codeColor: 'text-[#D32F2F]',
      pocketBg: 'bg-[#FF8A80]/75',
      shadow: 'shadow-[0_12px_28px_rgba(255,77,77,0.22)]',
      iconBoxBg: 'bg-red-50 text-red-600 border-red-200/80',
    },
    mark: (
      <div className="flex items-center gap-1 text-[#8B0000]">
        <Droplets className="w-3.5 h-3.5 fill-current" />
        <span className="text-[10px] font-mono font-bold">SYSTEMS</span>
      </div>
    ),
    desktopStyle: 'top-[42%] left-[2%] xl:left-[5%]',
    delay: 0.15,
  },
  {
    id: 'osis',
    code: 'OSIS-02',
    title: 'Sekretaris Umum OSIS',
    sub: 'Administration & Governance',
    period: '2024 — 2026',
    pinType: 'silver-clip',
    icon: FileText,
    theme: {
      outerBg: 'bg-[#38B6FF]',
      outerBorder: 'border-blue-300',
      codeColor: 'text-[#0284C7]',
      pocketBg: 'bg-[#7DD3FC]/75',
      shadow: 'shadow-[0_12px_28px_rgba(56,182,255,0.22)]',
      iconBoxBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
    },
    mark: (
      <div className="flex items-center gap-1 text-[#0369A1]">
        <Sparkles className="w-3.5 h-3.5 fill-current" />
        <span className="text-[10px] font-mono font-bold">GOVERN</span>
      </div>
    ),
    desktopStyle: 'top-[54%] right-[3%] xl:right-[6%]',
    delay: 0.2,
  },
  {
    id: 'xtik',
    code: 'XTIK-03',
    title: 'Vice President X-TIK',
    sub: 'Tech Community & Sprint',
    period: '2025',
    pinType: 'green-clip',
    icon: Laptop,
    theme: {
      outerBg: 'bg-[#FFD600]',
      outerBorder: 'border-yellow-400',
      codeColor: 'text-[#B45309]',
      pocketBg: 'bg-[#FDE047]/80',
      shadow: 'shadow-[0_12px_28px_rgba(255,214,0,0.25)]',
      iconBoxBg: 'bg-amber-50 text-amber-700 border-amber-200/80',
    },
    mark: (
      <div className="flex items-center gap-1 text-[#78350F]">
        <Flame className="w-3.5 h-3.5 fill-current text-emerald-600" />
        <span className="text-[10px] font-mono font-bold">DEV SPRINT</span>
      </div>
    ),
    desktopStyle: 'top-[9%] left-[8%] xl:left-[12%]',
    delay: 0.1,
  },
  {
    id: 'gajah-mada',
    code: 'SCOUT-04',
    title: 'Pradana & Krani Gajah Mada',
    sub: 'Scout Coordination & Ops',
    period: '2025 — 2026',
    pinType: 'bulldog-clip',
    icon: Compass,
    theme: {
      outerBg: 'bg-[#C084FC]',
      outerBorder: 'border-purple-300',
      codeColor: 'text-[#7E22CE]',
      pocketBg: 'bg-[#E9D5FF]/80',
      shadow: 'shadow-[0_12px_28px_rgba(192,132,252,0.22)]',
      iconBoxBg: 'bg-purple-50 text-purple-700 border-purple-200/80',
    },
    mark: (
      <div className="flex items-center gap-1 text-[#6B21A8]">
        <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
        <span className="text-[10px] font-mono font-bold">FIELD OPS</span>
      </div>
    ),
    desktopStyle: 'top-[11%] right-[8%] xl:right-[12%]',
    delay: 0.25,
  },
  {
    id: 'garuda',
    code: 'GARUDA-05',
    title: 'Ketua Garuda Penegak',
    sub: 'Highest Scout Rank 2026',
    period: '2026',
    pinType: 'chrome-pin',
    icon: ShieldCheck,
    theme: {
      outerBg: 'bg-[#34D399]',
      outerBorder: 'border-emerald-300',
      codeColor: 'text-[#065F46]',
      pocketBg: 'bg-[#A7F3D0]/80',
      shadow: 'shadow-[0_12px_28px_rgba(52,211,153,0.22)]',
      iconBoxBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    },
    mark: (
      <div className="flex items-center gap-1 text-[#047857]">
        <ShieldCheck className="w-3.5 h-3.5 fill-current" />
        <span className="text-[10px] font-mono font-bold">HONOR RANK</span>
      </div>
    ),
    desktopStyle: 'bottom-[9%] left-[20%] xl:left-[24%]',
    delay: 0.3,
  },
]

// =========================================================================
// DATA: PART 2 - ACADEMIC ACHIEVEMENTS
// =========================================================================
const washiAchievements = [
  {
    id: 'arjuna',
    num: '{1}',
    tapeColor: 'bg-[#84CC16]/90',
    tapeRotation: 'rotate-2',
    cardRotation: '-rotate-1',
    numColor: 'text-[#65A30D]',
    title: 'Juara Umum Arjuna',
    subtitle: 'Olimpiade Prestasi Pelajar Nasional',
    bullets: [
      'Medali Emas: Bidang Informatika & Logika',
      'Medali Emas: Bidang Bahasa Inggris',
      'Medali Emas: Pengetahuan Umum Nasional',
    ],
    badge: 'Gold Medalist',
  },
  {
    id: 'logicfest',
    num: '{2}',
    tapeColor: 'bg-[#EC4899]/90',
    tapeRotation: '-rotate-3',
    cardRotation: 'rotate-1.5',
    numColor: 'text-[#DB2777]',
    title: 'Juara Umum LOGICFEST',
    subtitle: 'Kompetisi Teknologi Informasi & AI',
    bullets: [
      'Medali Perak: AI Implementation & Solution',
      'Medali Perunggu: Bahasa Pemrograman',
      'Juara Umum Kategori SMK/Sederajat',
    ],
    badge: 'Overall Winner',
  },
  {
    id: 'quick-math',
    num: '{3}',
    tapeColor: 'bg-[#06B6D4]/90',
    tapeRotation: 'rotate-1',
    cardRotation: '-rotate-1',
    numColor: 'text-[#0891B2]',
    title: 'Juara Harapan 2 Quick Math Vol 2',
    subtitle: 'Speed Arithmetic & Problem Solving',
    bullets: [
      'Menyelesaikan 100 soal dalam 10 menit',
      'Tingkat Akurasi Kalkulasi 96%',
      'Kecepatan & Daya Ingat Berhitung Cepat',
    ],
    badge: 'Speed Champ',
  },
  {
    id: 'marinir',
    num: '{4}',
    tapeColor: 'bg-[#F59E0B]/90',
    tapeRotation: '-rotate-2',
    cardRotation: 'rotate-2',
    numColor: 'text-[#D97706]',
    title: 'Purna Gapura Pancawaluya VII',
    subtitle: 'Ksatrian Marinir Cilandak, Korps Marinir TNI AL',
    bullets: [
      'Latihan Dasar Kepemimpinan & Ketahanan Fisik',
      'Kedisiplinan Lapangan & Mental Tangguh',
      'Pendidikan Karakter & Kerja Sama Pasukan',
    ],
    badge: 'Cadet Honor',
  },
]

export default function Progression() {
  return (
    <section 
      id="progression" 
      className="w-full max-w-full bg-[#F9F9F9] text-[#111111] relative py-16 sm:py-28 overflow-hidden select-none"
    >
      {/* Subtle architectural dot grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(17, 17, 17, 0.12) 1px, transparent 0)',
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full max-w-full">

        {/* =========================================================================
            GLOBAL SECTION HEADER
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-black/[0.08] shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-600">
              Progression &amp; Milestones
            </span>
          </div>

          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] text-[#111111] mb-4">
            A Journey of Growth &amp; Leadership
          </h2>

          <p className="font-['Inter'] text-sm sm:text-base md:text-lg text-neutral-500 font-normal leading-relaxed text-balance">
            Charting the milestones from early formal education to executive leadership and honors.
          </p>
        </div>

        {/* =========================================================================
            SUB-SECTION 1: ACADEMIC JOURNEY
            - NOW ENRICHED WITH COBALT BLUE FROSTED GLASSMORPHISM UI WIDGETS
              (Folder, Calendar 31, Math Code, Location Pin & Floating Glass Tokens)
            ========================================================================= */}
        <div className="mb-24 sm:mb-32 relative">
          
          <div className="flex items-center justify-between pb-6 border-b border-black/[0.08] mb-12 sm:mb-16">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-neutral-900 text-white flex items-center justify-center">
                <GraduationCap className="w-3.5 h-3.5 text-neutral-100" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-neutral-900">
                Academic Journey
              </h3>
            </div>
            <span className="text-[11px] font-mono font-medium text-neutral-400 uppercase tracking-widest">
              Process 01 — 04 • Glass Edition
            </span>
          </div>

          {/* -------------------------------------------------------------
              A. DESKTOP HORIZONTAL TIMELINE WITH FROSTED GLASS WIDGETS
              ------------------------------------------------------------- */}
          <div className="hidden md:block relative w-full h-[430px] select-none">
            
            {/* Ambient Refraction Glows for Glassmorphism Depth */}
            <div className="absolute top-1/4 left-[15%] w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-[20%] w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Floating Glassmorphic Decorative Accent Tokens across the Track */}
            {/* Token 1: Frosted Overlapping Circles */}
            <div className="absolute top-6 left-[23%] z-10 opacity-80">
              <FrostedCirclesWidget />
            </div>

            {/* Token 2: Frosted Command Key ⌘ near SMKN 2 */}
            <div className="absolute top-8 right-[24%] z-10 opacity-85">
              <FrostedCommandWidget />
            </div>

            {/* Token 3: Frosted Cloud & Sun near Horizon */}
            <div className="absolute bottom-10 right-[3%] z-10 opacity-80">
              <FrostedCloudSunWidget />
            </div>

            {/* The Smooth Slightly Wavy SVG Line Spanning Across Screen */}
            <div className="absolute inset-0 flex items-center pointer-events-none">
              <svg 
                viewBox="0 0 1000 120" 
                fill="none" 
                preserveAspectRatio="none"
                className="w-full h-32 overflow-visible"
              >
                <defs>
                  <linearGradient id="academicLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0052FF" stopOpacity="0.3" />
                    <stop offset="35%" stopColor="#0052FF" stopOpacity="0.85" />
                    <stop offset="70%" stopColor="#0052FF" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.45" />
                  </linearGradient>
                </defs>

                {/* Base Soft Guide Line */}
                <path
                  d="M 40 60 C 90 60, 100 60, 125 60 C 200 46, 300 46, 375 60 C 450 74, 550 74, 625 60 C 700 46, 800 46, 875 60 C 910 60, 940 60, 970 60"
                  stroke="#E2E8F0"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Smooth Slightly Wavy Cobalt Gradient Line Through All 4 Nodes */}
                <path
                  d="M 40 60 C 90 60, 100 60, 125 60 C 200 46, 300 46, 375 60 C 450 74, 550 74, 625 60 C 700 46, 800 46, 875 60"
                  stroke="url(#academicLineGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Dashed connector line leading into Node 4 (Future) */}
                <path
                  d="M 875 60 C 910 60, 940 60, 970 60"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  className="opacity-60"
                />
              </svg>
            </div>

            {/* 4 Interactive Nodes Spaced Horizontally (12.5%, 37.5%, 62.5%, 87.5%) */}
            <div className="relative w-full h-full">
              {academicNodes.map((node, index) => {
                const isAbove = node.position === 'above'
                const leftPercent = `${12.5 + index * 25}%`
                const FrostedWidget = node.FrostedWidget

                return (
                  <div
                    key={node.id}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
                    style={{ left: leftPercent, width: '22%' }}
                  >
                    
                    {/* NODE TEXT BLOCK (Alternating Above / Below) */}
                    <div 
                      className={`absolute w-full px-2 transition-all duration-300 ${
                        isAbove 
                          ? 'bottom-[calc(50%+28px)] text-center flex flex-col items-center' 
                          : 'top-[calc(50%+28px)] text-center flex flex-col items-center'
                      }`}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: isAbove ? -15 : 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.12 }}
                        className={`relative w-full group ${
                          node.isPlaceholder 
                            ? 'rounded-2xl p-4 bg-white/85 backdrop-blur-sm border-2 border-dashed border-purple-300 shadow-[0_6px_25px_rgba(168,85,247,0.14)]' 
                            : 'rounded-2xl p-4 bg-white/95 backdrop-blur-sm border border-neutral-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,82,255,0.08)] hover:border-blue-200 hover:-translate-y-1'
                        } transition-all duration-300`}
                      >
                        {/* GIANT GHOST NUMBER */}
                        <span 
                          className="absolute -top-3 left-3 font-['Playfair_Display'] text-7xl lg:text-8xl font-black text-neutral-900/[0.05] select-none pointer-events-none leading-none -z-0 transition-opacity group-hover:text-blue-600/[0.08]"
                          aria-hidden="true"
                        >
                          {node.number}
                        </span>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                          
                          {/* Card Header: Frosted Cobalt Widget Icon + Level Tag */}
                          <div className="flex items-center gap-2 mb-2 justify-center">
                            {/* The Cobalt Glassmorphism Widget Icon from Attached Image */}
                            <div className="transition-transform group-hover:scale-110 duration-200">
                              <FrostedWidget className="w-6 h-6" />
                            </div>
                            <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              node.isPlaceholder 
                                ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                                : 'bg-blue-50 text-blue-700 border border-blue-100'
                            }`}>
                              {node.level}
                            </span>
                          </div>

                          {/* Period */}
                          <span className="text-[10px] font-mono text-neutral-400 mb-1">
                            {node.period}
                          </span>

                          {/* Institution Name */}
                          <h4 className={`font-['Playfair_Display'] text-lg lg:text-xl font-bold tracking-tight mb-1.5 ${
                            node.isPlaceholder ? 'text-purple-950' : 'text-neutral-900 group-hover:text-[#0052FF] transition-colors'
                          }`}>
                            {node.school}
                          </h4>

                          {/* Description */}
                          <p className="font-['Inter'] text-xs text-neutral-500 leading-relaxed max-w-[210px]">
                            {node.desc}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* NODE DOT ON THE SVG LINE (Enhanced with Cobalt Aura) */}
                    <div className="relative z-20 flex items-center justify-center cursor-pointer group/dot">
                      {node.isPlaceholder ? (
                        <div className="relative flex items-center justify-center">
                          <span className="absolute w-10 h-10 rounded-full bg-purple-500/20 animate-ping pointer-events-none" />
                          <div className="w-9 h-9 rounded-full bg-white border-2 border-dashed border-purple-500 flex items-center justify-center shadow-[0_0_18px_rgba(168,85,247,0.4)] group-hover/dot:scale-110 transition-transform">
                            <span className="w-3 h-3 rounded-full bg-purple-600" />
                          </div>
                        </div>
                      ) : (
                        <div className="relative flex items-center justify-center">
                          {/* Soft cobalt blue backlight glow on the node */}
                          <span className="absolute w-7 h-7 rounded-full bg-blue-500/15 pointer-events-none" />
                          <div className="w-8 h-8 rounded-full bg-white border-2 border-[#0052FF] flex items-center justify-center shadow-md group-hover/dot:scale-110 transition-transform">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#0052FF]" />
                          </div>
                        </div>
                      )}
                    </div>

                  </div>
                )
              })}
            </div>

          </div>

          {/* -------------------------------------------------------------
              B. MOBILE VERTICAL PROCESS TIMELINE WITH FROSTED WIDGETS (< md)
              ------------------------------------------------------------- */}
          <div className="md:hidden relative pl-6 border-l-2 border-dashed border-neutral-300 ml-4 space-y-8">
            {academicNodes.map((node) => {
              const FrostedWidget = node.FrostedWidget

              return (
                <div key={node.id} className="relative">
                  <div className="absolute -left-[31px] top-4">
                    {node.isPlaceholder ? (
                      <div className="w-7 h-7 rounded-full bg-white border-2 border-dashed border-purple-500 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-white border-2 border-[#0052FF] flex items-center justify-center shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#0052FF]" />
                      </div>
                    )}
                  </div>

                  <div className={`relative rounded-2xl p-5 overflow-hidden ${
                    node.isPlaceholder 
                      ? 'bg-white/90 border-2 border-dashed border-purple-300 shadow-sm' 
                      : 'bg-white border border-neutral-200/90 shadow-sm'
                  }`}>
                    <span className="absolute -top-2 right-3 font-['Playfair_Display'] text-6xl font-black text-neutral-900/[0.05] select-none pointer-events-none">
                      {node.number}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <FrostedWidget className="w-5 h-5" />
                        <span className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          node.isPlaceholder 
                            ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                            : 'bg-blue-50 text-blue-700 border border-blue-100'
                        }`}>
                          {node.level}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {node.period}
                        </span>
                      </div>

                      <h4 className={`font-['Playfair_Display'] text-lg font-bold mb-1 ${
                        node.isPlaceholder ? 'text-purple-950' : 'text-neutral-900'
                      }`}>
                        {node.school}
                      </h4>

                      <p className="font-['Inter'] text-xs text-neutral-500 leading-relaxed">
                        {node.desc}
                      </p>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>

        {/* =========================================================================
            SUB-SECTION 2: LEADERSHIP & ACHIEVEMENTS
            ========================================================================= */}
        <div>

          {/* =========================================================================
              PART 1: THE SGE ORBIT (Leadership with Real Office Pins & Clips)
              ========================================================================= */}
          <div className="mb-24 sm:mb-28">
            
            <div className="flex items-center justify-between pb-6 border-b border-black/[0.08] mb-10 sm:mb-14">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-neutral-900 text-white flex items-center justify-center">
                  <Flame className="w-3.5 h-3.5 text-neutral-100" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-neutral-900">
                  Leadership Orbit
                </h3>
              </div>
              <span className="text-[11px] font-mono font-medium text-neutral-400 uppercase tracking-widest">
                SGE Constellation • 5 Appointments
              </span>
            </div>

            {/* Desktop SGE Canvas */}
            <div className="hidden lg:block relative w-full h-[650px] xl:h-[680px] rounded-3xl bg-[#F9F9F9] border border-neutral-200/60 overflow-hidden select-none">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-purple-200/25 via-sky-200/25 to-amber-100/20 rounded-full blur-3xl pointer-events-none" />

              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.3]"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(17, 17, 17, 0.08) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Stationery Decoration: Pastel Blue Sticky Note with Yellow Tape */}
              <div className="absolute top-7 right-8 z-20 pointer-events-none select-none">
                <div className="relative p-3 bg-[#DBEAFE] rounded-md border border-blue-200/70 shadow-[0_6px_18px_rgba(59,130,246,0.12)] w-32 rotate-[3deg]">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-yellow-200/85 backdrop-blur-xs border border-yellow-300/60 rounded-[1px] rotate-[-2deg] shadow-xs" />
                  <div className="text-[9px] font-mono text-blue-900/70 font-bold uppercase tracking-wider">
                    Executive Log
                  </div>
                  <p className="font-serif italic text-[10.5px] text-blue-950 leading-tight mt-1">
                    &ldquo;Build systems that outlast the mandate.&rdquo;
                  </p>
                </div>
              </div>

              {/* Stationery Decoration: Stack of White Paper Sheets with Brass Paperclip */}
              <div className="absolute bottom-6 right-10 z-20 pointer-events-none select-none">
                <div className="relative p-3.5 bg-white rounded-xl border border-black/10 shadow-[2px_8px_20px_rgba(0,0,0,0.06)] w-32 rotate-[-4deg]">
                  <div className="absolute inset-0 bg-neutral-100/90 rounded-xl -rotate-2 -z-10 shadow-xs" />
                  <div className="absolute -top-3.5 left-3.5 z-20">
                    <PaperclipIcon color="#D97706" className="w-5 h-9" rotate={-5} />
                  </div>
                  <div className="pt-2 text-[9px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
                    Sprint Ops
                  </div>
                  <p className="font-['Inter'] text-[10px] text-neutral-700 font-medium leading-tight mt-1">
                    5 Student Bodies &amp; Directorships
                  </p>
                </div>
              </div>

              {/* Stationery Decoration: Pastel Mint Sticky Note with Blue Pushpin */}
              <div className="absolute top-7 left-6 z-20 pointer-events-none select-none">
                <div className="relative p-3 bg-[#DCFCE7] rounded-md border border-emerald-200/70 shadow-[0_6px_18px_rgba(16,185,129,0.12)] w-32 rotate-[-3deg]">
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <PushPinIcon color="#0284C7" className="w-5 h-7" rotate={8} />
                  </div>
                  <div className="text-[9px] font-mono text-emerald-900/70 font-bold uppercase tracking-wider mt-1">
                    Focus Note
                  </div>
                  <p className="font-['Inter'] text-[10px] text-emerald-950 font-medium leading-tight mt-0.5">
                    Lead with empathy, execute with speed.
                  </p>
                </div>
              </div>

              {/* Loose Stationery Wire Clips */}
              <div className="absolute top-[48%] left-[28%] pointer-events-none select-none z-10 opacity-70">
                <PaperclipIcon color="#EC4899" className="w-5 h-10" rotate={35} />
              </div>
              <div className="absolute top-[38%] right-[28%] pointer-events-none select-none z-10 opacity-70">
                <PaperclipIcon color="#84CC16" className="w-5 h-10" rotate={-40} />
              </div>
              <div className="absolute bottom-10 left-[48%] pointer-events-none select-none z-10 opacity-60">
                <PaperclipIcon color="#94A3B8" className="w-4 h-9" rotate={15} />
              </div>

              {/* Dashed SVG Connecting Lines */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                viewBox="0 0 1000 650" 
                preserveAspectRatio="none"
                fill="none"
              >
                <line x1="380" y1="300" x2="220" y2="175" stroke="#E5E7EB" strokeWidth="1.2" strokeDasharray="4 6" />
                <circle cx="220" cy="175" r="2.5" fill="#CBD5E1" />

                <line x1="620" y1="300" x2="775" y2="185" stroke="#E5E7EB" strokeWidth="1.2" strokeDasharray="4 6" />
                <circle cx="775" cy="185" r="2.5" fill="#CBD5E1" />

                <line x1="240" y1="325" x2="165" y2="325" stroke="#E5E7EB" strokeWidth="1.2" strokeDasharray="4 6" />
                <circle cx="165" cy="325" r="2.5" fill="#CBD5E1" />

                <line x1="760" y1="345" x2="825" y2="415" stroke="#E5E7EB" strokeWidth="1.2" strokeDasharray="4 6" />
                <circle cx="825" cy="415" r="2.5" fill="#CBD5E1" />

                <line x1="430" y1="355" x2="340" y2="510" stroke="#E5E7EB" strokeWidth="1.2" strokeDasharray="4 6" />
                <circle cx="340" cy="510" r="2.5" fill="#CBD5E1" />
              </svg>

              {/* Central SGE Search Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
              >
                <div className="flex items-center justify-between w-[90vw] max-w-[560px] xl:max-w-[600px] px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-white border border-neutral-200/90 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-none pl-1">
                    <button 
                      type="button" 
                      aria-label="Add item"
                      className="w-7 h-7 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors text-neutral-500"
                    >
                      <Plus className="w-4 h-4 text-neutral-500" />
                    </button>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400">
                      <Search className="w-4 h-4 text-neutral-500" />
                    </div>
                  </div>

                  <div className="flex-1 px-3 min-w-0">
                    <span className="font-['Inter'] text-xs sm:text-[13.5px] text-neutral-400 font-normal tracking-tight select-none truncate block">
                      Ask me anything...
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-none pr-1">
                    <button 
                      type="button" 
                      aria-label="Voice Search"
                      className="w-7 h-7 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors text-neutral-500"
                    >
                      <Mic className="w-4 h-4 text-neutral-500" />
                    </button>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/60 transition-colors cursor-pointer select-none">
                      <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
                      <span className="font-['Inter'] text-[11px] sm:text-xs font-semibold text-neutral-800 tracking-tight">
                        AI Mode
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* The 5 Scattered Cards */}
              {sgeLeadershipCards.map((card) => {
                const RoleIcon = card.icon

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.93 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: card.delay }}
                    className={`absolute z-10 ${card.desktopStyle}`}
                  >
                    <div className="relative group cursor-pointer transition-transform hover:-translate-y-1">
                      
                      {/* Realistic Stationery Pin/Clip */}
                      {card.pinType === 'pink-pin' && (
                        <div className="absolute -top-4 -left-2 z-30 pointer-events-none">
                          <PushPinIcon color="#FF4081" className="w-7 h-9" rotate={-20} />
                        </div>
                      )}
                      {card.pinType === 'silver-clip' && (
                        <div className="absolute -top-4 -left-1 z-30 pointer-events-none">
                          <PaperclipIcon color="#94A3B8" className="w-5 h-10" rotate={-10} />
                        </div>
                      )}
                      {card.pinType === 'green-clip' && (
                        <div className="absolute -top-4 -left-1 z-30 pointer-events-none">
                          <PaperclipIcon color="#84CC16" className="w-5 h-10" rotate={12} />
                        </div>
                      )}
                      {card.pinType === 'bulldog-clip' && (
                        <div className="absolute -top-4.5 -left-2.5 z-30 pointer-events-none">
                          <BulldogClipIcon className="w-8 h-8" rotate={-8} />
                        </div>
                      )}
                      {card.pinType === 'chrome-pin' && (
                        <div className="absolute -top-4 -left-2 z-30 pointer-events-none">
                          <PushPinIcon color="#64748B" needleColor="#334155" className="w-7 h-9" rotate={-25} />
                        </div>
                      )}

                      {/* Outer Chunky Colored Frame */}
                      <div className={`p-1.5 sm:p-2 rounded-3xl ${card.theme.outerBg} ${card.theme.shadow} border-2 border-dashed ${card.theme.outerBorder}`}>
                        <div className="relative bg-white rounded-2xl p-3 sm:p-3.5 overflow-hidden w-[215px] sm:w-[235px] shadow-xs">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1.5">
                              <div className={`w-6 h-6 rounded-lg ${card.theme.iconBoxBg} border flex items-center justify-center`}>
                                <RoleIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="w-4 h-1 rounded-full bg-neutral-200" />
                            </div>
                            <div className="text-right">
                              <span className={`font-mono text-[11px] font-bold ${card.theme.codeColor}`}>
                                {card.code}
                              </span>
                              <span className="text-[8.5px] font-mono text-neutral-400 block -mt-0.5">
                                *Mandate
                              </span>
                            </div>
                          </div>

                          <h4 className="font-['Inter'] font-bold text-neutral-900 text-xs sm:text-[13px] leading-snug tracking-tight mb-0.5 truncate">
                            {card.title}
                          </h4>
                          <p className="font-['Inter'] text-neutral-500 text-[10.5px] leading-snug truncate">
                            {card.sub}
                          </p>

                          <div className={`mt-2.5 -mx-3.5 -mb-3.5 pt-2 pb-2 px-3.5 ${card.theme.pocketBg} backdrop-blur-xs flex items-center justify-between relative`}>
                            <div className="flex items-center gap-1">
                              {card.mark}
                            </div>
                            <span className="text-[9.5px] font-mono font-semibold text-neutral-700/80">
                              {card.period}
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )
              })}

            </div>

            {/* Mobile View (< lg) */}
            <div className="lg:hidden flex flex-col gap-4">
              <div className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-full bg-white border border-neutral-200/90 shadow-sm">
                <div className="flex items-center gap-2 pl-1 min-w-0">
                  <Plus className="w-4 h-4 text-neutral-500 flex-none" />
                  <Search className="w-4 h-4 text-neutral-400 flex-none" />
                  <span className="font-['Inter'] text-xs text-neutral-400 truncate">
                    Ask me anything...
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/60 flex-none">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
                  <span className="font-['Inter'] text-[10.5px] font-semibold text-neutral-800">
                    AI Mode
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {sgeLeadershipCards.map((card) => {
                  const RoleIcon = card.icon

                  return (
                    <div key={card.id} className="relative">
                      {card.pinType === 'pink-pin' && (
                        <div className="absolute -top-3 -left-1.5 z-20 pointer-events-none">
                          <PushPinIcon color="#FF4081" className="w-6 h-7" rotate={-20} />
                        </div>
                      )}
                      {card.pinType === 'silver-clip' && (
                        <div className="absolute -top-3 -left-1 z-20 pointer-events-none">
                          <PaperclipIcon color="#94A3B8" className="w-4 h-8" rotate={-10} />
                        </div>
                      )}
                      {card.pinType === 'green-clip' && (
                        <div className="absolute -top-3 -left-1 z-20 pointer-events-none">
                          <PaperclipIcon color="#84CC16" className="w-4 h-8" rotate={12} />
                        </div>
                      )}
                      {card.pinType === 'bulldog-clip' && (
                        <div className="absolute -top-3.5 -left-2 z-20 pointer-events-none">
                          <BulldogClipIcon className="w-6 h-6" rotate={-8} />
                        </div>
                      )}
                      {card.pinType === 'chrome-pin' && (
                        <div className="absolute -top-3 -left-1.5 z-20 pointer-events-none">
                          <PushPinIcon color="#64748B" needleColor="#334155" className="w-6 h-7" rotate={-25} />
                        </div>
                      )}

                      <div className={`p-1.5 rounded-3xl ${card.theme.outerBg} border-2 border-dashed ${card.theme.outerBorder}`}>
                        <div className="bg-white rounded-2xl p-3 overflow-hidden shadow-xs">
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-1.5">
                              <div className={`w-5 h-5 rounded-md ${card.theme.iconBoxBg} flex items-center justify-center`}>
                                <RoleIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-[10px] font-mono text-neutral-400">{card.code}</span>
                            </div>
                            <span className="text-[10px] font-mono text-neutral-400">
                              {card.period}
                            </span>
                          </div>
                          <h4 className="font-['Inter'] font-bold text-neutral-900 text-xs sm:text-[13px] leading-snug truncate">
                            {card.title}
                          </h4>
                          <p className="font-['Inter'] text-neutral-400 text-[10.5px] leading-snug truncate mt-0.5">
                            {card.sub}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

          {/* =========================================================================
              PART 2: ACADEMIC & COMPETITION ACHIEVEMENTS (Washi-Taped Paper Notes)
              ========================================================================= */}
          <div className="relative">
            
            <div className="flex items-center justify-between gap-3 mb-10 sm:mb-14 pb-6 border-b border-black/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-neutral-900 text-white flex items-center justify-center">
                  <Trophy className="w-3.5 h-3.5 text-neutral-100" />
                </div>
                <h3 className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-neutral-900">
                  Academic &amp; Competition Honors
                </h3>
              </div>
              <span className="text-[11px] font-mono font-medium text-neutral-400 uppercase tracking-widest">
                Washi Note Portfolio • {`{1} — {4}`}
              </span>
            </div>

            {/* Weaving Dashed SVG Line */}
            <svg 
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 1000 360" 
              preserveAspectRatio="none"
              fill="none"
            >
              <path 
                d="M 160 140 C 260 80, 340 180, 420 120 C 500 70, 580 180, 680 120 C 760 80, 840 160, 900 130" 
                stroke="#D1D5DB" 
                strokeWidth="1.2" 
                strokeDasharray="4 6" 
              />
            </svg>

            {/* 4 Washi Tape Pinned Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10 pt-4">
              {washiAchievements.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className={`relative ${item.cardRotation} transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]`}
                >
                  <div 
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 ${item.tapeColor} ${item.tapeRotation} backdrop-blur-xs shadow-xs border-t border-b border-white/50 rounded-[1px] z-30 pointer-events-none`}
                  >
                    <div className="absolute left-0 inset-y-0 w-1 bg-white/25" />
                    <div className="absolute right-0 inset-y-0 w-1 bg-white/25" />
                  </div>

                  <div className="h-full bg-white rounded-2xl p-5 sm:p-5.5 border border-black/[0.06] shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3 pt-1">
                        <span className={`font-mono text-sm font-bold ${item.numColor}`}>
                          {item.num}
                        </span>
                        <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                          {item.badge}
                        </span>
                      </div>

                      <h4 className="font-['Inter'] font-bold text-neutral-900 text-sm sm:text-[14.5px] leading-snug tracking-tight mb-1">
                        {item.title}
                      </h4>

                      <p className="font-['Inter'] text-neutral-400 text-[11px] leading-tight mb-3">
                        {item.subtitle}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                        {item.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-1.5">
                            <span className="text-neutral-300 text-xs flex-none mt-0.5">→</span>
                            <span className="font-['Inter'] text-xs text-neutral-600 leading-snug">
                              {bullet}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span>Honors</span>
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3" /> Verified
                      </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>

            {/* Bottom Svoi-Style Pill Bar */}
            <div className="mt-12 pt-6 border-t border-black/[0.05] flex items-center justify-center flex-wrap gap-2 text-xs font-mono text-neutral-500">
              <span className="px-3 py-1 rounded-full bg-white border border-black/[0.07] shadow-xs">
                ( Honors &amp; Awards )
              </span>
              <span className="text-neutral-300">›››››</span>
              <span className="px-3 py-1 rounded-full bg-white border border-black/[0.07] shadow-xs">
                ( Informatics &amp; Leadership )
              </span>
              <span className="text-neutral-300">›››››</span>
              <span className="px-3 py-1 rounded-full bg-neutral-900 text-white font-medium shadow-xs">
                ( 4 Major Titles )
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
