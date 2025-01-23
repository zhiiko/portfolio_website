// src/components/ProjectDetail.tsx
'use client'

import { Project } from '@/data/projects'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}
const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
    return (
      <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="mb-6 flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to projects
          </button>
  
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            {/* Header Section */}
            <div className="bg-gray-900 text-white p-6 border-b border-gray-700">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <p className="mt-2 text-gray-300">{project.category}</p>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Overview Section */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
                <p className="text-gray-300">{project.description}</p>
              </section>
  
              {/* Challenge & Solution Section */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Challenge & Solution</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Challenge:</h3>
                    <p className="text-gray-300">{project.challenge}</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-semibold text-white mb-2">Solution:</h3>
                    <p className="text-gray-300">{project.solution}</p>
                  </div>
                </div>
              </section>
  
              {/* Architecture Section */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Technical Architecture</h2>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300">{project.architecture}</p>
                </div>
              </section>
  
              {/* Implementation Section */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Key Implementation Details</h2>
                <div className="space-y-3">
                  {project.implementation.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </section>
  
              {/* Technologies Section */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
  
              {/* Impact Section */}
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Impact</h2>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-300">{project.impact}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default ProjectDetail