// src/app/projects/[id]/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectDetail from '@/components/ProjectDetail'
import { use } from 'react'

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const resolvedParams = use(params)
  const project = projects[resolvedParams.id]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
          <button
            onClick={() => router.push('/')}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            Return to home
          </button>
        </div>
      </div>
    )
  }

  return (
    <ProjectDetail 
      project={project} 
      onBack={() => router.back()} 
    />
  )
}