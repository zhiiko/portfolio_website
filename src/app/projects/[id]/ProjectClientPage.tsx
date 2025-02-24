'use client'

import { useRouter } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectDetail from '@/components/ProjectDetail'
import { useEffect, useState } from 'react'
import PageTransition from '@/components/PageTransition'

interface ProjectClientPageProps {
  id: string;
}

export default function ProjectClientPage({ id }: ProjectClientPageProps) {
  const router = useRouter()
  const [project, setProject] = useState(projects[id])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Validate if the project exists
    if (id && projects[id]) {
      setProject(projects[id])
      setLoading(false)
    } else {
      // Redirect to home if project not found
      router.push('/')
    }
  }, [id, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
          <button
            onClick={() => router.push('/')}
            className="mt-4 text-primary-500 hover:text-primary-600 transition-colors"
          >
            Return to home
          </button>
        </div>
      </div>
    )
  }

  return (
    <PageTransition>
      <ProjectDetail 
        project={project} 
        onBack={() => router.back()} 
      />
    </PageTransition>
  )
} 