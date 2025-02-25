'use client'

import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import PageTransition from '@/components/PageTransition'
import { motion } from 'framer-motion'

export default function MachineLearning() {
  const mlProjects = Object.values(projects).filter(
    project => project.category === 'Machine Learning'
  )

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-light-gradient-1 to-background dark:from-dark-300/30 dark:to-background z-0" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl" />
        
        <div className="relative z-10 container mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Machine Learning
            </motion.h1>
            
            <motion.p
              className="max-w-3xl text-lg text-muted mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Discover my machine learning projects that demonstrate expertise in AI, 
              data science, and advanced algorithms for solving complex problems.
            </motion.p>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {mlProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}