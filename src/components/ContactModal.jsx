import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react'

export default function ContactModal({ isOpen, onClose }) {
  const [copiedId, setCopiedId] = useState(null)

  // Listen to Escape key to close modal
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    // Lock body scroll when modal is active
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const copyToClipboard = (id, text, e) => {
    e.stopPropagation()
    e.preventDefault()
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => {
        setCopiedId((prev) => (prev === id ? null : prev))
      }, 2000)
    }
  }

  const contacts = [
    {
      id: 'wa',
      name: 'WhatsApp',
      handle: '0895-3928-21553',
      copyValue: '0895392821553',
      description: 'Pesan langsung & respon cepat',
      href: 'https://wa.me/62895392821553',
      badge: 'Fast Response',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      iconContainer: 'bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
      accentHover: 'hover:border-emerald-300 hover:shadow-[0_8px_25px_rgba(16,185,129,0.12)]',
      icon: (
        <svg className="w-5 h-5 flex-none" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      id: 'ig',
      name: 'Instagram',
      handle: '@rzifafkarr',
      copyValue: 'rzifafkarr',
      description: 'DM sosial & portofolio visual',
      href: 'https://instagram.com/rzifafkarr',
      badge: 'Direct Message',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200/80',
      iconContainer: 'bg-rose-50 text-rose-600 border border-rose-100 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-rose-500 group-hover:to-purple-600 group-hover:text-white',
      accentHover: 'hover:border-rose-300 hover:shadow-[0_8px_25px_rgba(244,63,94,0.12)]',
      icon: (
        <svg className="w-5 h-5 flex-none" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      id: 'gh',
      name: 'GitHub',
      handle: 'Sh1noaa',
      copyValue: 'Sh1noaa',
      description: 'Repositories, commits & code',
      href: 'https://github.com/Sh1noaa',
      badge: 'Code Showcase',
      badgeColor: 'bg-neutral-100 text-neutral-800 border-neutral-300',
      iconContainer: 'bg-neutral-100 text-neutral-800 border border-neutral-200 group-hover:bg-neutral-900 group-hover:text-white',
      accentHover: 'hover:border-neutral-400 hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]',
      icon: (
        <svg className="w-5 h-5 flex-none" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
  ]

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container: Kotak Kecil-Lumayan Aja (Compact & Balanced) */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0, scale: 0.93, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 16 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-[420px] bg-white rounded-3xl p-5 sm:p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.28)] border border-neutral-200/90 z-10 overflow-hidden"
          >
            {/* Top Subtle Background Accents */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-44 h-44 bg-gradient-to-br from-neutral-100 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                {/* Active Availability Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10.5px] font-mono font-medium text-emerald-800 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Direct Channels</span>
                </div>

                <h3
                  id="contact-modal-title"
                  className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight"
                >
                  Let&apos;s Connect &amp; Talk
                </h3>
                <p className="font-['Inter'] text-xs sm:text-[12.5px] text-neutral-500 mt-0.5 leading-relaxed">
                  Pilih platform untuk menghubungi saya secara langsung:
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup pop up"
                className="flex-none p-1.5 rounded-full text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-all duration-200 -mr-1 -mt-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contact Channels List */}
            <div className="space-y-2.5">
              {contacts.map((item) => {
                const isCopied = copiedId === item.id

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-neutral-50/70 hover:bg-white border border-neutral-200/80 transition-all duration-300 ${item.accentHover}`}
                  >
                    {/* Left: Icon & Details */}
                    <div className="flex items-center gap-3 min-w-0 pr-2">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 flex-none ${item.iconContainer}`}
                      >
                        {item.icon}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-['Inter'] text-[13.5px] font-semibold text-neutral-900 group-hover:text-black">
                            {item.name}
                          </span>
                          <span
                            className={`text-[9.5px] font-mono font-medium px-2 py-0.2 rounded-full border ${item.badgeColor}`}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <p className="font-mono text-xs text-neutral-600 truncate mt-0.5 font-medium">
                          {item.handle}
                        </p>
                      </div>
                    </div>

                    {/* Right: Quick Actions (Copy & Direct Arrow) */}
                    <div className="flex items-center gap-1 flex-none">
                      {/* Copy Value Button */}
                      <button
                        type="button"
                        onClick={(e) => copyToClipboard(item.id, item.copyValue, e)}
                        title={`Salin ${item.name}`}
                        className={`p-1.5 rounded-lg border text-xs font-mono transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs scale-105'
                            : 'bg-white hover:bg-neutral-100 text-neutral-500 hover:text-neutral-900 border-neutral-200/90'
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-medium pr-0.5">Disalin</span>
                          </>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {/* Open Link Arrow */}
                      <div className="p-1.5 rounded-lg bg-white group-hover:bg-[#111111] group-hover:text-white text-neutral-400 border border-neutral-200/90 transition-all duration-200">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Footer Prompt */}
            <div className="mt-4 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-[11px] font-['Inter'] text-neutral-400">
              <span className="flex items-center gap-1">
                <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
                <span>Terbuka untuk kolaborasi &amp; diskusi</span>
              </span>
              <span className="font-mono text-[10px] text-neutral-400">
                Purwakarta, ID
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
