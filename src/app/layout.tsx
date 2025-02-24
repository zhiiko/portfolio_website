import './globals.css'
import Navigation from '@/components/Navigation'
import LayoutClient from './layout-client'
import { metadata } from './metadata'
import { Inter, Outfit, Fira_Code } from 'next/font/google'

export { metadata }

// Configure fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${firaCode.variable}`}>
      <body className="min-h-screen antialiased">
        <Navigation />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}