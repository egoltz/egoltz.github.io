'use client'

import { useState } from 'react'
import type { ProjectFrontmatter } from '@/lib/projects'
import TagFilterBar from './TagFilterBar'
import ProjectCard from './ProjectCard'

interface ProjectListProps {
  projects: ProjectFrontmatter[]
  tags: string[]
}

export default function ProjectList({ projects, tags }: ProjectListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered =
    activeTag === null ? projects : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <div className="flex flex-col gap-8">
      {/* <TagFilterBar tags={tags} activeTag={activeTag} onTagChange={setActiveTag} /> */}

      {filtered.length === 0 ? (
        <p className="font-inter text-sm text-[#555555]">No projects found for this tag.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
