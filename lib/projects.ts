import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import sizeOf from 'image-size'

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects')

export interface ProjectFrontmatter {
  title: string
  description: string
  thumbnail: string
  thumbnailWidth: number
  thumbnailHeight: number
  tags: string[]
  tools: string[]
  date: string
  featured: boolean
  slug: string
}

function getThumbnailDimensions(thumbnailPath: string): { width: number; height: number } {
  try {
    const absPath = path.join(process.cwd(), 'public', thumbnailPath)
    const buffer = fs.readFileSync(absPath)
    const { width, height } = sizeOf(buffer)
    return { width: width ?? 0, height: height ?? 0 }
  } catch {
    return { width: 0, height: 0 }
  }
}

function readProjectFiles(): ProjectFrontmatter[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '')
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), 'utf-8')
    const { data } = matter(raw)

    const thumbnail = data.thumbnail ?? ''
    const { width: thumbnailWidth, height: thumbnailHeight } = getThumbnailDimensions(thumbnail)

    return {
      title: data.title ?? '',
      description: data.description ?? '',
      thumbnail,
      thumbnailWidth,
      thumbnailHeight,
      tags: data.tags ?? [],
      tools: data.tools ?? [],
      date: data.date ?? '',
      featured: data.featured ?? false,
      slug,
    }
  })
}

/** All projects sorted: featured first, then by date descending. */
export function getAllProjects(): ProjectFrontmatter[] {
  return readProjectFiles().sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

/** Single project by slug. Returns undefined if not found. */
export function getProjectBySlug(slug: string): ProjectFrontmatter | undefined {
  return getAllProjects().find((p) => p.slug === slug)
}

/** Frontmatter + raw MDX body for a single project. */
export function getProjectContent(slug: string): { frontmatter: ProjectFrontmatter; source: string } | undefined {
  const filename = [`${slug}.mdx`, `${slug}.md`].find((f) =>
    fs.existsSync(path.join(PROJECTS_DIR, f))
  )
  if (!filename) return undefined

  const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), 'utf-8')
  const { data, content } = matter(raw)

  const thumbnail = data.thumbnail ?? ''
  const { width: thumbnailWidth, height: thumbnailHeight } = getThumbnailDimensions(thumbnail)

  const frontmatter: ProjectFrontmatter = {
    title: data.title ?? '',
    description: data.description ?? '',
    thumbnail,
    thumbnailWidth,
    thumbnailHeight,
    tags: data.tags ?? [],
    tools: data.tools ?? [],
    date: data.date ?? '',
    featured: data.featured ?? false,
    slug,
  }

  return { frontmatter, source: content }
}

/** All unique tags across all projects, sorted alphabetically. */
export function getAllTags(): string[] {
  const projects = getAllProjects()
  const tagSet = new Set<string>()
  for (const p of projects) {
    for (const tag of p.tags) tagSet.add(tag)
  }
  return Array.from(tagSet).sort()
}
