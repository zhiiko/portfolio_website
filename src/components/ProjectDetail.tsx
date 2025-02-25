// src/components/ProjectDetail.tsx
'use client'

import { Project } from '@/data/projects'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-gradient-1 to-background dark:from-dark-300/30 dark:to-background z-0" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl" />
      
      <div className="relative z-10 container mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={onBack}
            className="mb-8 flex items-center text-muted hover:text-primary-500 transition-colors group"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ x: -3 }}
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to projects</span>
          </motion.button>

          <motion.div
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Header Section */}
            <div className="p-8 border-b border-border/30">
              <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">{project.title}</h1>
              <p className="text-muted text-lg">{project.category}</p>
            </div>
            
            <div className="p-8 space-y-12">
              {/* Overview Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-heading font-semibold mb-4">Overview</h2>
                <p className="leading-relaxed">{project.description}</p>
              </motion.section>

              {/* Challenge & Solution Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-heading font-semibold mb-6">Challenge & Solution</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-6 bg-primary-500/5">
                    <h3 className="font-medium text-primary-500 mb-3">Challenge:</h3>
                    <p>{project.challenge}</p>
                  </div>
                  <div className="glass-card p-6 bg-secondary-500/5">
                    <h3 className="font-medium text-secondary-500 mb-3">Solution:</h3>
                    <p>{project.solution}</p>
                  </div>
                </div>
              </motion.section>

              {/* Architecture Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-heading font-semibold mb-4">Technical Architecture</h2>
                <div className="glass-card p-6 bg-accent-500/5">
                  <p className="leading-relaxed">{project.architecture}</p>
                </div>
              </motion.section>

              {/* Implementation Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-2xl font-heading font-semibold mb-6">Key Implementation Details</h2>
                <div className="space-y-3">
                  {project.implementation.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
                        <div className="h-2 w-2 bg-primary-500 rounded-full"></div>
                      </div>
                      <p>{detail}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Technologies Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl font-heading font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-500/10 text-primary-500 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.section>

              {/* Impact Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h2 className="text-2xl font-heading font-semibold mb-4">Impact</h2>
                <div className="glass-card p-6 bg-secondary-500/5">
                  <p className="leading-relaxed">{project.impact}</p>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail