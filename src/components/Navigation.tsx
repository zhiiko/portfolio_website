'use client'

import { useState } from 'react'
import { Home, Code, Brain, User, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

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
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
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
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-black"
                style={{ top: '0px', zIndex: 40 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="md:hidden fixed inset-0 bg-gray-900 border-l border-gray-800 shadow-xl"
                style={{ top: '64px', left: 'auto', width: '300px', zIndex: 50 }}
              >
                <motion.div 
                  className="flex flex-col p-4"
                  initial="closed"
                  animate="open"
                  variants={{
                    closed: { opacity: 0 },
                    open: { opacity: 1, transition: { staggerChildren: 0.05 } }
                  }}
                >
                  {/* Navigation header */}
                  <div className="mb-4 px-4 py-2 border-b border-gray-800">
                    <h3 className="text-lg font-medium text-gray-400">Navigation</h3>
                  </div>

                  {/* Navigation items with consistent spacing */}
                  <div className="space-y-2">
                    {navItems.map(({ name, icon: Icon, path }) => (
                      <motion.div
                        key={path} // Changed to path instead of name
                        variants={{
                          closed: { x: 20, opacity: 0 },
                          open: { x: 0, opacity: 1 }
                        }}
                        className="w-full"
                      >
                        <Link
                          href={path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                            pathname === path 
                              ? 'bg-blue-500/30 text-blue-300' 
                              : 'text-gray-100 hover:bg-gray-800 hover:text-gray-300'
                          }`}
                        >
                          <Icon size={20} className="shrink-0" />
                          <span className="ml-4 font-medium">{name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation