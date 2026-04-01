'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Send, ChevronDown, MessageCircle, CheckCircle } from 'lucide-react'
import { t, type Lang } from '@/lib/translations'

interface ContactViewProps {
  lang: Lang
}

type DestinationValue = '' | 'China' | 'Italy' | 'Turkey' | 'Malaysia' | 'Китай' | 'Италия' | 'Турция' | 'Малайзия' | 'Қытай' | 'Түркия' | 'Малайзия (KZ)'

interface AmoCRMPayload {
  name: string
  phone: string
  destination: string
  language: Lang
  submittedAt: string
  source: 'zagraneasy-website'
}

export function ContactView({ lang }: ContactViewProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [destination, setDestination] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string; destination?: string }>({})

  const ct = t.contact

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!name.trim())   newErrors.name        = ct.errorName[lang]
    if (!phone.trim())  newErrors.phone       = ct.errorPhone[lang]
    if (!destination)   newErrors.destination = ct.errorDest[lang]
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const payload: AmoCRMPayload = {
      name: name.trim(),
      phone: phone.trim(),
      destination,
      language: lang,
      submittedAt: new Date().toISOString(),
      source: 'zagraneasy-website',
    }

    // Structured for AmoCRM API integration
    console.log('[ZagranEasy] AmoCRM payload:', JSON.stringify(payload, null, 2))

    setSubmitted(true)
  }

  const inputBase =
    'w-full bg-transparent border-b border-border text-foreground placeholder-muted-foreground font-body text-sm font-light tracking-wide py-4 outline-none transition-colors duration-300 focus:border-primary'

  return (
    <main className="pt-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">

        {/* Left — Image Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block lg:w-[45%] relative overflow-hidden"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury travel background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/30 to-white/90" />
          <div className="absolute inset-0 flex flex-col justify-end p-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              {ct.panelEyebrow[lang]}
            </p>
            <h2 className="font-serif text-5xl font-light text-foreground leading-tight">
              {ct.panelTitle1[lang]}
              <br />
              <em className="not-italic text-primary">{ct.panelTitle2[lang]}</em>
            </h2>
            <div className="w-12 h-px bg-primary/50 my-6" />
            <p className="font-body text-sm text-muted-foreground leading-relaxed font-light max-w-xs">
              {ct.panelBody[lang]}
            </p>
          </div>
        </motion.div>

        {/* Right — Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20"
        >
          <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-5">
            {ct.eyebrow[lang]}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-light text-foreground leading-tight mb-4 text-balance">
            {ct.title1[lang]}
            <br />
            <em className="not-italic text-primary">{ct.title2[lang]}</em>
          </h1>
          <p className="font-body text-sm text-muted-foreground leading-relaxed font-light mb-14 max-w-sm">
            {ct.subtitle[lang]}
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="border border-primary/30 p-10 flex flex-col items-start gap-4"
            >
              <CheckCircle size={28} strokeWidth={1.2} className="text-primary" />
              <h3 className="font-serif text-3xl font-light text-foreground">
                {ct.successTitle[lang]}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed font-light">
                {ct.successBody[lang]}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10 max-w-md">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
                >
                  {ct.labelName[lang]}
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={ct.placeholderName[lang]}
                  className={inputBase}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="font-body text-[11px] text-destructive mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
                >
                  {ct.labelPhone[lang]}
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className={inputBase}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="font-body text-[11px] text-destructive mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Destination */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="destination"
                  className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
                >
                  {ct.labelDest[lang]}
                </label>
                <div className="relative">
                  <select
                    id="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className={`${inputBase} appearance-none cursor-pointer pr-8 bg-background`}
                    aria-invalid={!!errors.destination}
                    aria-describedby={errors.destination ? 'dest-error' : undefined}
                  >
                    <option value="" disabled className="bg-card text-muted-foreground">
                      {ct.placeholderDest[lang]}
                    </option>
                    {ct.destinations[lang].map((d) => (
                      <option key={d} value={d} className="bg-card text-foreground">
                        {d}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    strokeWidth={1.5}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                  />
                </div>
                {errors.destination && (
                  <p id="dest-error" className="font-body text-[11px] text-destructive mt-1">
                    {errors.destination}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group self-start inline-flex items-center gap-3 font-body text-xs tracking-[0.22em] uppercase bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/90 transition-all duration-300 mt-2"
              >
                {ct.submitBtn[lang]}
                <Send
                  size={13}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 my-14 max-w-md">
            <div className="flex-1 h-px bg-border" />
            <span className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
              {ct.orReach[lang]}
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Messaging Links */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            {/* WhatsApp */}
            <a
              href="https://wa.me/77479112606"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex items-center gap-4 border border-border px-6 py-5 hover:border-primary transition-colors duration-300"
            >
              <span className="w-9 h-9 border border-border group-hover:border-primary flex items-center justify-center transition-colors duration-300 shrink-0">
                <MessageCircle size={15} strokeWidth={1.3} className="text-primary" />
              </span>
              <div>
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  WhatsApp
                </p>
                <p className="font-body text-sm text-foreground font-light mt-0.5">
                  8 (747) 911-26-06
                </p>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/zagraneasy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 flex items-center gap-4 border border-border px-6 py-5 hover:border-primary transition-colors duration-300"
            >
              <span className="w-9 h-9 border border-border group-hover:border-primary flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                  aria-hidden="true"
                >
                  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.948 1.317 1.533 4.6a2.25 2.25 0 0 0 3.838.683l1.775-2.226 4.15 2.07a2.25 2.25 0 0 0 3.093-1.837l1.5-14.25a2.25 2.25 0 0 0-2.441-2.242z" />
                </svg>
              </span>
              <div>
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  Telegram
                </p>
                <p className="font-body text-sm text-foreground font-light mt-0.5">
                  @zagraneasy
                </p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
