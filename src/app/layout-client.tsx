'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  return (
    <AnimatePresence mode="wait">
      <main key={pathname} className="pt-16">
        {children}
      </main>
    </AnimatePresence>
  )
}
