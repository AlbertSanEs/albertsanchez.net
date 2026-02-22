import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Albert Sanchez Escobar | IT Infrastructure & Cybersecurity',
  description: 'Profesional de infraestructura IT y ciberseguridad con +5 anos de experiencia en operaciones de sistemas, monitorizacion SIEM y gestion de entornos criticos. Disponible para nuevos retos.',
  keywords: ['IT Infrastructure', 'Sysadmin', 'SOC Analyst', 'Cybersecurity', 'SysOps', 'SIEM', 'Barcelona'],
  authors: [{ name: 'Albert Sanchez Escobar' }],
  openGraph: {
    title: 'Albert Sanchez Escobar | IT Infrastructure & Cybersecurity',
    description: 'Profesional de infraestructura IT y ciberseguridad con +5 anos de experiencia.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2332',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
