import { getAllProjects, getAllTags } from '@/lib/projects'
import ProjectList from '@/components/ProjectList'

export default function Home() {
  const projects = getAllProjects()
  const tags = getAllTags()

  return (
    <div className="max-w-[900px] mx-auto px-6 md:px-8 py-12">
      <ProjectList projects={projects} tags={tags} />
    </div>
  )
}
