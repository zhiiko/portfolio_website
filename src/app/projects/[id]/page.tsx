// src/app/projects/[id]/page.tsx
import { projects } from '@/data/projects'
import ProjectClientPage from './ProjectClientPage'

// This function tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
  // Return an array of params to generate static pages for
  return Object.keys(projects).map(projectId => ({
    id: projectId,
  }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Pass the project ID to the client component
  return <ProjectClientPage id={params.id} />;
}