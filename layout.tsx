import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'ZagranEasy — Elite Travel & Visa Concierge',
  description:
    'ZagranEasy is your exclusive travel and visa concierge service. Curated journeys to China, Italy, Turkey, and Malaysia with flawless visa arrangements.',
  generator: 'v0.app',
  keywords: ['luxury travel', 'visa concierge', 'elite travel', 'China tour', 'Italy tour', 'Turkey travel', 'Malaysia travel'],
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
