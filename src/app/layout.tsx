import './globals.css'
import Navigation from '@/components/Navigation'
import LayoutClient from './layout-client'
import { metadata } from './metadata'

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}