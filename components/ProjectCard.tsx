import Link from 'next/link'
import Image from 'next/image'
import type { ProjectFrontmatter } from '@/lib/projects'

interface ProjectCardProps {
  project: ProjectFrontmatter
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, thumbnail, tags, tools, slug } = project

  return (
        <Link
          className="flex gap-4 items-start"
          href={`/projects/${project.slug}`}
        >
          <Image
            src={project.thumbnail}
            loading="lazy"
            alt={project.title}
            className="p-2 flex-none"
            width={200}
            height={200}
          />
          <div className="justify-items-start p-3">
            <h2 className="font-roboto font-600 text-base text-black group-hover:underline duration-150">
            {/* <h2 className="text-xl text-black duration-150 group-hover:text-gray-800 font-semibold"> */}
              {project.title}
            </h2>
            <p className="font-inter text-sm text-black leading-relaxed line-clamp-2">

              {project.description}
            </p>
          </div>
        </Link>
  )
}
