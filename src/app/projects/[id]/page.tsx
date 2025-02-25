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

// In Next.js 15, params are passed as a Promise
export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  // Use await to resolve the params Promise
  const { id } = await props.params;
  
  // Pass the project ID to the client component
  return <ProjectClientPage id={id} />;
} 