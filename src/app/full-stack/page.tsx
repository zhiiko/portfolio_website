'use client'

import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function FullStack() {
  const fullStackProjects = Object.values(projects).filter(
    project => project.category === 'Full-Stack Development'
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Full-Stack Development</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {fullStackProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}