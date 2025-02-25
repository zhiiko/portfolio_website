'use client'

import PageTransition from '@/components/PageTransition'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-300/30 to-background z-0" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-500/5 rounded-full filter blur-3xl" />
        
        <div className="relative z-10 container mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-heading font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              About Me
            </motion.h1>
            
            <motion.div 
              className="glass-card p-8 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="mb-6 text-lg leading-relaxed">
                I&apos;m a Computer Science and Mathematics student at The University of Texas at Austin, 
                passionate about solving complex problems at the intersection of technology and innovation. 
                With experience in both full-stack development and machine learning, I bring a unique 
                perspective to software engineering challenges.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                During my internships at companies like Vantashala and Vatson, I&apos;ve had the opportunity 
                to work on impactful projects that improved system performance and user experience. I&apos;m 
                particularly interested in distributed systems, machine learning applications, and building 
                scalable web applications.
              </p>
            </motion.div>
            
            <motion.div 
              className="glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading font-semibold mb-4">What I&apos;m Looking For</h2>
              <p className="text-lg leading-relaxed">
                I&apos;m seeking opportunities where I can apply my dual background in Computer Science 
                and Mathematics to solve challenging problems. I&apos;m particularly interested in roles 
                that involve machine learning, distributed systems, or full-stack development, where 
                I can continue to grow while making meaningful contributions to innovative projects.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-12 glass-card p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading font-semibold mb-6">Skills & Expertise</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary-500 mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-secondary-500 mb-3">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node.js', 'Express', 'TensorFlow', 'PyTorch'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-secondary-500/10 text-secondary-500 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-accent-500 mb-3">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Linux'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-accent-500/10 text-accent-500 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary-500 mb-3">Areas of Interest</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Full-Stack Development', 'Distributed Systems', 'Data Science', 'Cloud Architecture'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}