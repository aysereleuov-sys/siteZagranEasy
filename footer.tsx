'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { t, type Lang } from '@/lib/translations'

type View = 'home' | 'destinations' | 'contact'

interface FooterProps {
  onNavigate: (view: View) => void
  lang: Lang
}

export function Footer({ onNavigate, lang }: FooterProps) {
  const ft = t.footer

  const navLinks: { label: string; view: View }[] = [
    { label: t.nav.home[lang],         view: 'home' },
    { label: t.nav.destinations[lang], view: 'destinations' },
    { label: t.nav.concierge[lang],    view: 'contact' },
  ]

  return (
    <footer className="bg-card border-t border-border px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5 max-w-xs">
            <button onClick={() => onNavigate('home')} className="text-left">
              <span className="font-serif text-xl tracking-widest text-foreground" style={{ letterSpacing: '0.18em' }}>
                ZAGRAN
              </span>
              <span className="font-serif text-xl tracking-widest text-primary" style={{ letterSpacing: '0.18em' }}>
                EASY
              </span>
            </button>
            <p className="font-body text-xs text-muted-foreground leading-relaxed font-light">
              {ft.tagline[lang]}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-5">
              {ft.navLabel[lang]}
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ label, view }) => (
                <button
                  key={view}
                  onClick={() => onNavigate(view)}
                  className="font-body text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 text-left"
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-5">
              {ft.contactLabel[lang]}
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="tel:87479112606"
                className="flex items-center gap-3 font-body text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Phone size={12} strokeWidth={1.5} className="text-primary" />
                8 (747) 911-26-06
              </a>
              <a
                href="https://wa.me/77479112606"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <MessageCircle size={12} strokeWidth={1.5} className="text-primary" />
                WhatsApp
              </a>
              <a
                href="https://t.me/zagraneasy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                  aria-hidden="true"
                >
                  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.948 1.317 1.533 4.6a2.25 2.25 0 0 0 3.838.683l1.775-2.226 4.15 2.07a2.25 2.25 0 0 0 3.093-1.837l1.5-14.25a2.25 2.25 0 0 0-2.441-2.242z" />
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[10px] tracking-widest text-muted-foreground/50 uppercase">
            &copy; {new Date().getFullYear()} ZagranEasy. {ft.rights[lang]}
          </p>
          <p className="font-body text-[10px] tracking-widest text-muted-foreground/40 uppercase">
            {ft.eliteLabel[lang]}
          </p>
        </div>
      </div>
    </footer>
  )
}
