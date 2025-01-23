'use client'

import { useState } from 'react'
import Terminal from '@/components/Terminal'
import { Code, Brain, User } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [terminalComplete, setTerminalComplete] = useState(false)

  const navItems = [
    {
      name: 'Full-Stack',
      icon: Code,
      path: '/full-stack',
    },
    {
      name: 'Machine Learning',
      icon: Brain,
      path: '/machine-learning',
    },
    {
      name: 'About Me',
      icon: User,
      path: '/about',
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <Terminal onComplete={() => setTerminalComplete(true)} />
      {terminalComplete && (
        <>
          <div 
            className="mt-8 text-center text-white"
            style={{ animation: 'fadeSlideUp 0.6s ease-out forwards' }}
          >
            <p className="text-lg">Explore my work</p>
            <div className="mt-4 animate-bounce">↓</div>
          </div>
          <div 
            className="mt-12 flex justify-center gap-24 md:gap-32 w-full"
            style={{ animation: 'fadeSlideUp 0.8s ease-out forwards' }}
          >
            {navItems.map(({ name, icon: Icon, path }, index) => (
              <Link key={path} href={path}>
                <div className="relative group">
                  <Icon 
                    size={48} 
                    className="text-gray-400 transition-all duration-300 transform group-hover:scale-125 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    style={{
                      animation: `float 3s ease-in-out infinite ${index * 0.2}s`
                    }}
                  />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-blue-500 text-sm">
                    {name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}