'use client'

import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'
import PageTransition from '@/components/PageTransition'

export default function MachineLearning() {
  const mlProjects = Object.values(projects).filter(
    project => project.category === 'Machine Learning'
  )

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Machine Learning</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {mlProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}