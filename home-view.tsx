'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useTransform, useMotionValue } from 'framer-motion'
import { ArrowRight, Globe, Shield, Star } from 'lucide-react'
import { t, type Lang } from '@/lib/translations'

type View = 'home' | 'destinations' | 'contact'

interface HomeViewProps {
  onNavigate: (view: View) => void
  lang: Lang
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const pillarIcons = [Globe, Shield, Star]

export function HomeView({ onNavigate, lang }: HomeViewProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const scrollY = useMotionValue(0)
  const parallaxY = useTransform(scrollY, [0, 600], ['0%', '20%'])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    const onScroll = () => scrollY.set(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollY])

  const ht = t.home

  return (
    <main>
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center"
      >
        {/* Parallax bg */}
        <motion.div style={{ y: parallaxY }} className="absolute inset-0 scale-110">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury private jet over ocean coastline at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Overlay — light warm veil to keep charcoal headings legible over bright photography */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/25 to-white/70" />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-8"
          >
            {ht.eyebrow[lang]}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-foreground leading-[0.95] text-balance mb-10"
          >
            {ht.headline1[lang]}
            <br />
            <em className="text-primary not-italic">{ht.headline2[lang]}</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="font-body text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto mb-12 font-light tracking-wide"
          >
            {ht.subheadline[lang]}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.75}>
            <button
              onClick={() => onNavigate('contact')}
              className="group inline-flex items-center gap-3 font-body text-xs tracking-[0.22em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-300"
            >
              {ht.planBtn[lang]}
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {ht.scroll[lang]}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
          />
        </motion.div>
      </section>

      {/* ── Pillars ── */}
      <section className="py-28 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              {ht.promiseEyebrow[lang]}
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground">
              {ht.promiseTitle1[lang]}
              <br />
              <em className="not-italic text-primary">{ht.promiseTitle2[lang]}</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {ht.pillars.map((pillar, i) => {
              const Icon = pillarIcons[i]
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                  className="bg-background p-12 group"
                >
                  <div className="w-10 h-10 border border-primary/30 flex items-center justify-center mb-8 group-hover:border-primary transition-colors duration-300">
                    <Icon size={18} strokeWidth={1.2} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-foreground mb-4 leading-tight">
                    {pillar.title[lang]}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                    {pillar.desc[lang]}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Destinations Teaser ── */}
      <section className="py-28 px-6 bg-card">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              {ht.destEyebrow[lang]}
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground leading-tight mb-6 text-balance">
              {ht.destTitle1[lang]}
              <br />
              <em className="not-italic text-primary">{ht.destTitle2[lang]}</em>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed font-light max-w-md mb-10">
              {ht.destBody[lang]}
            </p>
            <button
              onClick={() => onNavigate('destinations')}
              className="group inline-flex items-center gap-3 font-body text-xs tracking-[0.22em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              {ht.exploreBtn[lang]}
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 grid grid-cols-2 gap-3"
          >
            {[
              { src: '/images/china-bg.jpg',   label: t.destinations.countries.china.tagline[lang].split(',')[0],   alt: 'Ancient Chinese landscape with pagoda' },
              { src: '/images/italy-bg.jpg',   label: t.destinations.countries.italy.tagline[lang].split(',')[0],   alt: 'Amalfi Coast dramatic cliffs' },
              { src: '/images/turkey-bg.jpg',  label: t.destinations.countries.turkey.tagline[lang].split(',')[0],  alt: 'Cappadocia hot air balloons at sunrise' },
              { src: '/images/malaysia-bg.jpg',label: t.destinations.countries.malaysia.tagline[lang].split(',')[0],alt: 'Langkawi overwater bungalows and jungle' },
            ].map(({ src, label, alt }) => (
              <motion.button
                key={src}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                onClick={() => onNavigate('destinations')}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                <span className="absolute bottom-4 left-4 font-serif text-base font-light text-foreground tracking-widest">
                  {label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-36 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury travel background"
            fill
            className="object-cover object-center opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-white/75" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {ht.ctaEyebrow[lang]}
          </p>
          <h2 className="font-serif text-5xl md:text-7xl font-light text-foreground mb-8 text-balance">
            {ht.ctaTitle1[lang]}
            <br />
            {ht.ctaTitle2[lang]}
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed mb-12 font-light">
            {ht.ctaBody[lang]}
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center gap-3 font-body text-xs tracking-[0.22em] uppercase bg-primary text-primary-foreground px-12 py-5 hover:bg-primary/90 transition-all duration-300"
          >
            {ht.consultBtn[lang]}
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </motion.div>
      </section>
    </main>
  )
}
