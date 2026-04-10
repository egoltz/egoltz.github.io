import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import rehypeHighlight from 'rehype-highlight'
import { getAllProjects, getProjectContent } from '@/lib/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const result = getProjectContent(slug)
  if (!result) return {}
  return {
    title: result.frontmatter.title,
    description: result.frontmatter.description,
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const result = getProjectContent(slug)

  if (!result) notFound()

  const { frontmatter, source } = result

  const { default: MDXContent } = await evaluate(source, {
    ...runtime,
    baseUrl: import.meta.url,
    rehypePlugins: [rehypeHighlight],
  } as Parameters<typeof evaluate>[1])

  return (
    <div className="max-w-[900px] mx-auto px-6 md:px-8 py-10">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 font-inter text-sm text-[#555555] hover:text-black transition-colors mb-8"
      >
        <span aria-hidden="true">←</span> Projects
      </Link>

      {/* Hero image */}
      {/* {frontmatter.hero && (
        <div className="relative w-full aspect-video bg-[#F0F0F0] rounded-lg overflow-hidden mb-8">
          <Image
            src={frontmatter.thumbnail}
            alt={`${frontmatter.title} hero image`}
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
            priority
          />
        </div>
      )} */}

      {/* Title */}
      <h1 className="font-roboto font-bold text-3xl text-black mb-4 leading-tight">
        {frontmatter.title}
      </h1>

      {/* Tag + tool pills */}
      {(frontmatter.tags.length > 0 || frontmatter.tools.length > 0) && (
        <div className="flex flex-wrap gap-2 mb-3">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-inter bg-[#F0F0F0] text-black"
            >
              {tag}
            </span>
          ))}
          {frontmatter.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-full text-xs font-inter bg-[#F0F0F0] text-[#555555]"
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      {/* Date */}
      {frontmatter.date && (
        <p className="font-inter text-sm text-[#555555] mb-6">
          {formatDate(frontmatter.date)}
        </p>
      )}

      {/* Divider */}
      <hr className="border-t border-[#E5E5E5] mb-8" />

      {/* MDX body */}
      <div className="mdx-prose">
        <MDXContent />
      </div>
    </div>
  )
}
