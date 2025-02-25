'use client'

import { useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import PageTransition from '@/components/PageTransition'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ProjectsPage() {
  const router = useRouter()
  const [filter, setFilter] = useState<string>('all')
  
  // Convert projects object to array for filtering
  const projectsArray = Object.values(projects)
  
  // Get unique categories
  const categories = ['all', ...new Set(projectsArray.map(project => project.category))]
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projectsArray 
    : projectsArray.filter(project => project.category === filter)

  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-light-gradient-1 to-background dark:from-dark-300/30 dark:to-background z-0" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-500/10 rounded-full filter blur-3xl" />
        
        <div className="relative z-10 container mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => router.push('/')}
              className="mb-8 flex items-center text-muted hover:text-primary-500 transition-colors group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ x: -3 }}
            >
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:transform group-hover:-translate-x-1 transition-transform" />
              <span>Back to home</span>
            </motion.button>

            <motion.h1
              className="text-4xl font-heading font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              My Projects
            </motion.h1>
            
            <motion.p
              className="text-muted text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore my portfolio of projects across different domains
            </motion.p>
            
            {/* Category filters */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-dark-500/50 text-muted hover:bg-dark-400'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </motion.div>
            
            {/* Projects grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </motion.div>
            
            {filteredProjects.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-muted">No projects found in this category.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
} 