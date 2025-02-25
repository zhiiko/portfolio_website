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
      <div className="p-6 relative">
        {/* Title and category in a flex container with space between */}
        <div className="flex flex-col mb-3 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="font-heading text-xl font-semibold group-hover:text-primary-500 transition-colors mb-2 sm:mb-0">
            {project.title}
          </h3>
          
          {/* Category badge moved from absolute positioning to flex layout */}
          <div className="flex-shrink-0 mt-1 sm:mt-0 sm:ml-2">
            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
              project.category === "Machine Learning" 
                ? "bg-secondary-500/20 text-secondary-500" 
                : project.category === "Systems Programming"
                  ? "bg-orange-500/20 text-orange-500"
                : "bg-accent-500/20 text-accent-500"
            }`}>
              {project.category}
            </span>
          </div>
        </div>
        
        <p className="mb-6 text-muted line-clamp-2">{project.shortDescription}</p>
        
        {/* Technology tags - revised to match the image */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-sm text-primary-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <button
              className="text-sm text-primary-500 hover:text-primary-400"
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/projects/${project.id}`);
              }}
            >
              +{project.technologies.length - 3} more
            </button>
          )}
        </div>
        
        <div className="flex items-center text-primary-500 text-sm font-medium group-hover:text-primary-400 transition-all">
          View project details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard