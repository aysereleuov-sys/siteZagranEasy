'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { t, type Lang } from '@/lib/translations'

type View = 'home' | 'destinations' | 'contact'

interface DestinationsViewProps {
  onNavigate: (view: View) => void
  lang: Lang
}

const DEST_KEYS = ['china', 'italy', 'turkey', 'malaysia'] as const
type DestKey = typeof DEST_KEYS[number]

const DEST_IMAGES: Record<DestKey, { src: string; alt: string }> = {
  china:    { src: '/images/china-bg.jpg',    alt: 'Ancient Chinese landscape with misty mountains and pagoda at sunrise' },
  italy:    { src: '/images/italy-bg.jpg',    alt: 'Amalfi Coast dramatic colorful cliffside villages over turquoise Mediterranean sea' },
  turkey:   { src: '/images/turkey-bg.jpg',   alt: 'Cappadocia Turkey hot air balloons floating above dramatic rock formations at golden hour' },
  malaysia: { src: '/images/malaysia-bg.jpg', alt: 'Langkawi Malaysia overwater bungalows over crystal clear sea with jungle islands at sunset' },
}

const COUNTRY_LABELS: Record<DestKey, Record<Lang, string>> = {
  china:    { RU: 'Китай',    KZ: 'Қытай',   EN: 'China' },
  italy:    { RU: 'Италия',   KZ: 'Италия',  EN: 'Italy' },
  turkey:   { RU: 'Турция',   KZ: 'Түркия',  EN: 'Turkey' },
  malaysia: { RU: 'Малайзия', KZ: 'Малайзия',EN: 'Malaysia' },
}

export function DestinationsView({ onNavigate, lang }: DestinationsViewProps) {
  const dt = t.destinations
  const countries = dt.countries

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-28 px-6 text-center bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-5">
            {dt.eyebrow[lang]}
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-foreground leading-tight mb-8 text-balance">
            {dt.title1[lang]}
            <br />
            <em className="not-italic text-primary">{dt.title2[lang]}</em>
          </h1>
          <p className="font-body text-muted-foreground text-base max-w-xl mx-auto leading-relaxed font-light">
            {dt.subtitle[lang]}
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-px h-20 bg-gradient-to-b from-primary/40 to-transparent mx-auto" />

      {/* Destinations */}
      {DEST_KEYS.map((key, i) => {
        const isEven = i % 2 === 0
        const dest = countries[key]
        const img = DEST_IMAGES[key]
        return (
          <section
            key={key}
            className={`py-24 px-6 ${isEven ? 'bg-background' : 'bg-card'}`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 w-full"
                >
                  <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[3/2] group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-white/10" />
                    {/* Country tag */}
                    <div className="absolute top-6 left-6 backdrop-blur-md bg-background/60 border border-border px-4 py-2 flex items-center gap-2">
                      <MapPin size={12} strokeWidth={1.5} className="text-primary" />
                      <span className="font-body text-[10px] tracking-[0.25em] uppercase text-foreground">
                        {COUNTRY_LABELS[key][lang]}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="flex-1 w-full"
                >
                  {/* Counter */}
                  <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary/50 mb-3">
                    0{i + 1} / 04
                  </p>

                  <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-3 leading-tight">
                    {COUNTRY_LABELS[key][lang]}
                  </h2>

                  <p className="font-serif text-lg text-primary italic font-light mb-8">
                    {dest.tagline[lang]}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {dest.highlights[lang].map((h) => (
                      <span
                        key={h}
                        className="font-body text-[10px] tracking-[0.18em] uppercase border border-border text-muted-foreground px-3 py-1.5"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed font-light mb-6">
                    {dest.description[lang]}
                  </p>

                  <div className="w-12 h-px bg-primary/30 my-6" />

                  <p className="font-serif text-base text-foreground/80 italic leading-relaxed mb-10 font-light">
                    &ldquo;{dest.experience[lang]}&rdquo;
                  </p>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="group inline-flex items-center gap-3 font-body text-xs tracking-[0.22em] uppercase border border-primary text-primary px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {dt.itineraryBtn[lang]}
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Bottom CTA */}
      <section className="py-28 px-6 text-center bg-background border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-5">
            {dt.readyEyebrow[lang]}
          </p>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-foreground mb-8 text-balance">
            {dt.readyTitle1[lang]}
            <br />
            {dt.readyTitle2[lang]}
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center gap-3 font-body text-xs tracking-[0.22em] uppercase bg-primary text-primary-foreground px-12 py-5 hover:bg-primary/90 transition-all duration-300"
          >
            {dt.conciergeBtn[lang]}
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
