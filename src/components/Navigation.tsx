'use client'

import { useState, useEffect } from 'react'
import { Home, Code, Brain, User, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Full-Stack', icon: Code, path: '/full-stack' },
    { name: 'Machine Learning', icon: Brain, path: '/machine-learning' },
    { name: 'About', icon: User, path: '/about' }
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2 glass shadow-lg' : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="font-heading text-xl md:text-2xl font-bold transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-gradient">Zakaria Sisalem</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ name, icon: Icon, path }) => (
              <Link
                key={name}
                href={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === path 
                    ? 'bg-primary-500/20 text-primary-500' 
                    : 'hover:bg-primary-500/10 text-foreground/80 hover:text-primary-500'
                }`}
              >
                <Icon size={16} className="shrink-0" />
                <span>{name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-primary-500/10 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? 'open' : 'closed'}
                  initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} className="text-primary-500" /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
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
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="md:hidden fixed inset-0 bg-background"
                style={{ top: '0px', zIndex: 40 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Content */}
              <motion.div 
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
                className="md:hidden fixed inset-0 glass-card border-l border-border shadow-xl"
                style={{ top: scrolled ? '52px' : '68px', left: 'auto', width: '280px', zIndex: 50 }}
              >
                <motion.div 
                  className="flex flex-col p-4 h-full"
                  initial="closed"
                  animate="open"
                  variants={{
                    closed: { opacity: 0 },
                    open: { opacity: 1, transition: { staggerChildren: 0.07 } }
                  }}
                >
                  {/* Navigation header */}
                  <div className="mb-4 px-2 py-2 border-b border-border/40">
                    <h3 className="text-lg font-heading font-medium text-foreground/80">Navigation</h3>
                  </div>

                  {/* Navigation items with consistent spacing */}
                  <div className="space-y-1">
                    {navItems.map(({ name, icon: Icon, path }) => (
                      <motion.div
                        key={path}
                        variants={{
                          closed: { x: 20, opacity: 0 },
                          open: { x: 0, opacity: 1 }
                        }}
                        className="w-full"
                      >
                        <Link
                          href={path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center w-full px-3 py-3 rounded-lg transition-all duration-300 ${
                            pathname === path 
                              ? 'bg-primary-500/20 text-primary-500' 
                              : 'text-foreground/80 hover:bg-primary-500/10 hover:text-primary-500'
                          }`}
                        >
                          <Icon size={18} className="shrink-0" />
                          <span className="ml-3 font-medium">{name}</span>
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