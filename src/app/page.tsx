'use client'

import { useState } from 'react'
import Terminal from '@/components/Terminal'
import { Code, Brain, User, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { useAnimationState } from '@/store/animationState'

export default function Home() {
  // Use a global flag so that once loaded, the main content remains persistent.
  const { hasAnimatedOnce, setHasAnimatedOnce } = useAnimationState();
  const [contentVisible, setContentVisible] = useState(hasAnimatedOnce);

  // Called after the terminal completes its loading sequence.
  const handleTerminalComplete = () => {
    if (!hasAnimatedOnce) {
      setHasAnimatedOnce(true);
      setContentVisible(true);
    } else {
      setContentVisible(true);
    }
  };

  const navItems = [
    {
      name: 'Full-Stack',
      icon: Code,
      path: '/full-stack',
      description: 'Web & Mobile Development',
    },
    {
      name: 'Machine Learning',
      icon: Brain,
      path: '/machine-learning',
      description: 'AI & Data Science',
    },
    {
      name: 'About Me',
      icon: User,
      path: '/about',
      description: 'Background & Experience',
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/zakaria-sisalem',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sisalemzakaria@gmail.com',
    }
  ];

  const floatVariants = [
    {
      animate: {
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    {
      animate: {
        y: [-5, -15, -5],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }
      }
    },
    {
      animate: {
        y: [-10, -20, -10],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }
      }
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <Terminal onComplete={handleTerminalComplete} />
        
        {contentVisible && (
          <motion.div
            className="w-full max-w-4xl mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Quick Intro Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-white mb-4">
                Building the Future with Code
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Combining full-stack development expertise with machine learning innovation
                to create impactful solutions.
              </p>
            </div>

            {/* Floating Navigation Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {navItems.map(({ name, icon: Icon, path, description }, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <Link href={path} className="group flex flex-col items-center">
                    <motion.div
                      animate={floatVariants[index].animate}
                      className="relative"
                    >
                      <Icon 
                        className="w-16 h-16 text-blue-400 group-hover:text-blue-300 transition-colors duration-200
                          group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]" 
                      />
                    </motion.div>
                    <div className="mt-4 text-center">
                      <h2 className="text-xl font-semibold text-white mb-2">{name}</h2>
                      <p className="text-gray-400">{description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  title={name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </PageTransition>
  )
}
