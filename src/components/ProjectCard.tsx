'use client'

import { Project } from '@/data/projects'
import { useRouter } from 'next/navigation'

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const router = useRouter()

  return (
    <div 
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard