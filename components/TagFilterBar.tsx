'use client'

interface TagFilterBarProps {
  tags: string[]
  activeTag: string | null
  onTagChange: (tag: string | null) => void
}

export default function TagFilterBar({ tags, activeTag, onTagChange }: TagFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by tag">
      <button
        onClick={() => onTagChange(null)}
        className={`px-3 py-1 rounded-full text-sm font-inter transition-colors ${
          activeTag === null
            ? 'bg-black text-white'
            : 'bg-[#F0F0F0] text-black hover:bg-[#E0E0E0]'
        }`}
        aria-pressed={activeTag === null}
      >
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`px-3 py-1 rounded-full text-sm font-inter transition-colors ${
            activeTag === tag
              ? 'bg-black text-white'
              : 'bg-[#F0F0F0] text-black hover:bg-[#E0E0E0]'
          }`}
          aria-pressed={activeTag === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
