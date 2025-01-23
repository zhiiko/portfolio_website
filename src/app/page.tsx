'use client'

import { useState } from 'react'
import Terminal from '@/components/Terminal'

export default function Home() {
  const [terminalComplete, setTerminalComplete] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <Terminal onComplete={() => setTerminalComplete(true)} />
      {terminalComplete && (
        <div className="mt-8 text-center text-white animate-fade-in">
          <p className="text-lg">Scroll down or use navigation to explore my work</p>
          <div className="mt-4 animate-bounce">↓</div>
        </div>
      )}
    </div>
  )
}