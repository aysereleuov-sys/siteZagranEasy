'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown, Check } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { t, type Lang } from '@/lib/translations'

type View = 'home' | 'destinations' | 'contact'

interface NavProps {
  currentView: View
  onNavigate: (view: View) => void
  lang: Lang
  onLangChange: (lang: Lang) => void
}

const LANGS: Lang[] = ['RU', 'KZ', 'EN']

export function Navbar({ currentView, onNavigate, lang, onLangChange }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (view: View) => {
    onNavigate(view)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks: { label: string; view: View }[] = [
    { label: t.nav.home[lang],         view: 'home' },
    { label: t.nav.destinations[lang], view: 'destinations' },
    { label: t.nav.concierge[lang],    view: 'contact' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-background/80 border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-1 group"
          >
            <span
              className="text-2xl font-serif font-light tracking-widest text-foreground group-hover:text-primary transition-colors duration-300"
              style={{ letterSpacing: '0.18em' }}
            >
              ZAGRAN
            </span>
            <span
              className="text-2xl font-serif font-semibold tracking-widest text-primary"
              style={{ letterSpacing: '0.18em' }}
            >
              EASY
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map(({ label, view }) => (
              <button
                key={view}
                onClick={() => handleNav(view)}
                className={`font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative pb-0.5 ${
                  currentView === view
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
                {currentView === view && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="hidden md:flex items-center gap-8">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="flex items-center gap-1 font-body text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label="Select language"
                >
                  {lang}
                  <ChevronDown size={12} strokeWidth={2} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[80px]">
                {LANGS.map((l) => (
                  <DropdownMenuItem
                    key={l}
                    onClick={() => onLangChange(l)}
                    className="flex items-center justify-between font-body text-xs tracking-[0.18em] uppercase cursor-pointer"
                  >
                    {l}
                    {lang === l && <Check size={12} strokeWidth={2} className="text-primary" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Phone */}
            <a
              href="tel:87479112606"
              className="flex items-center gap-2 font-body text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Phone size={13} strokeWidth={1.5} className="text-primary" />
              8 (747) 911-26-06
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-40 backdrop-blur-xl bg-background/95 border-b border-border px-6 pb-8 pt-6 md:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
              {navLinks.map(({ label, view }) => (
                <button
                  key={view}
                  onClick={() => handleNav(view)}
                  className={`font-body text-sm tracking-[0.2em] uppercase text-left transition-colors duration-300 ${
                    currentView === view ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {label}
                </button>
              ))}

              {/* Mobile Language Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center gap-1 font-body text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit"
                    aria-label="Select language"
                  >
                    {lang}
                    <ChevronDown size={12} strokeWidth={2} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[80px]">
                  {LANGS.map((l) => (
                    <DropdownMenuItem
                      key={l}
                      onClick={() => onLangChange(l)}
                      className="flex items-center justify-between font-body text-xs tracking-[0.18em] uppercase cursor-pointer"
                    >
                      {l}
                      {lang === l && <Check size={12} strokeWidth={2} className="text-primary" />}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a
                href="tel:87479112606"
                className="flex items-center gap-2 font-body text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors pt-2 border-t border-border"
              >
                <Phone size={13} strokeWidth={1.5} className="text-primary" />
                8 (747) 911-26-06
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
