'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { HomeView } from '@/components/home-view'
import { DestinationsView } from '@/components/destinations-view'
import { ContactView } from '@/components/contact-view'
import { Footer } from '@/components/footer'
import type { Lang } from '@/lib/translations'

type View = 'home' | 'destinations' | 'contact'

export default function ZagranEasyApp() {
  const [currentView, setCurrentView] = useState<View>('home')
  const [lang, setLang] = useState<Lang>('RU')

  const navigate = (view: View) => {
    setCurrentView(view)
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar currentView={currentView} onNavigate={navigate} lang={lang} onLangChange={setLang} />

      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentView}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
        >
          {currentView === 'home' && <HomeView onNavigate={navigate} lang={lang} />}
          {currentView === 'destinations' && <DestinationsView onNavigate={navigate} lang={lang} />}
          {currentView === 'contact' && <ContactView lang={lang} />}
        </motion.div>
      </AnimatePresence>

      <Footer onNavigate={navigate} lang={lang} />
    </div>
  )
}
