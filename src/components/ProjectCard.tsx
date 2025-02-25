'use client'

import { Project } from '@/data/projects'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const router = useRouter()

  const handleProjectClick = () => {
    router.push(`/projects/${project.id}`)
  }

  return (
    <motion.div 
      className="glass-card group overflow-hidden cursor-pointer relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] 
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onClick={handleProjectClick}
    >
      {/* Category badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
          project.category === "Machine Learning" 
            ? "bg-secondary-500/20 text-secondary-500" 
            : "bg-accent-500/20 text-accent-500"
        }`}>
          {project.category}
        </span>
      </div>

      <div className="p-6 relative">
        <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="mb-6 text-muted line-clamp-2">{project.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-secondary-500/10 text-secondary-500 rounded-full text-xs font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center text-primary-500 text-sm font-medium opacity-70 group-hover:opacity-100 transition-all">
          View project details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard