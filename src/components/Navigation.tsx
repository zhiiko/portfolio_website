'use client'

import { useState } from 'react'
import { Home, Code, Brain, User, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Full-Stack', icon: Code, path: '/full-stack' },
    { name: 'Machine Learning', icon: Brain, path: '/machine-learning' },
    { name: 'About', icon: User, path: '/about' }
  ]

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Zakaria Sisalem
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ name, icon: Icon, path }) => (
              <Link
                key={name}
                href={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                  pathname === path ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
              >
                <Icon size={18} />
                <span>{name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map(({ name, icon: Icon, path }) => (
                <Link
                  key={name}
                  href={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md ${
                    pathname === path ? 'bg-gray-700' : 'hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span>{name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation