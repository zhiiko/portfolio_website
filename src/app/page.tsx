'use client'

import { useState } from 'react'
import Terminal from '@/components/Terminal'
import { Code, Brain, User, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
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
      url: 'https://github.com/zhiiko',
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

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-light-gradient-1 via-light-gradient-2 to-light-gradient-3 dark:from-dark-300/50 dark:via-dark-400/50 dark:to-dark-500/70 z-0" />
        
        {/* Animated background circles/blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <Terminal onComplete={handleTerminalComplete} />
          
          {contentVisible && (
            <motion.div
              className="w-full max-w-5xl mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <motion.div 
                className="text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <motion.h1 
                  className="font-heading text-5xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  <span className="text-gradient">Building the Future</span> <br />
                  <span className="text-foreground">with Code</span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                >
                  Combining full-stack development expertise with machine learning innovation
                  to create impactful solutions.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Link href="/projects" className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full transition-all duration-300 shadow-glow hover:shadow-glow-lg">
                    View Projects <ExternalLink size={16} className="ml-2" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Navigation Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                {navItems.map(({ name, icon: Icon, path, description }, index) => (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
                    className="relative"
                  >
                    <Link href={path} className="block group">
                      <div className="glass-card p-8 h-full flex flex-col items-center text-center group-hover:border-primary-500/30 transition-all duration-300">
                        <motion.div
                          animate={{
                            y: [0, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3,
                          }}
                          className="relative mb-6"
                        >
                          <div className="absolute inset-0 bg-primary-500/20 rounded-full filter blur-md transform scale-110 group-hover:scale-150 group-hover:bg-primary-500/30 transition-all duration-300" />
                          <Icon 
                            className="w-16 h-16 text-primary-500 relative z-10" 
                          />
                        </motion.div>
                        <h2 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary-500 transition-colors duration-300 mb-2">{name}</h2>
                        <p className="text-foreground/70 mb-4">{description}</p>
                        <div className="mt-auto">
                          <span className="inline-flex items-center text-primary-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                            Explore <ArrowRight size={16} className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Links with labels */}
              <motion.div
                className="flex flex-col items-center mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.p 
                  className="text-foreground/70 mb-4 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  Connect with me
                </motion.p>
                <div className="flex space-x-6">
                  {socialLinks.map(({ name, icon: Icon, url }, index) => (
                    <motion.a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.3 }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    >
                      <motion.div 
                        className="p-3 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 transition-colors duration-300"
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <span className="mt-2 text-xs text-foreground/70 group-hover:text-primary-500 transition-colors duration-300">{name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  )
}

interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

function ArrowRight(props: ArrowRightProps) {
  const { size, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      {...rest}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
