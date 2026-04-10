import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-[900px] mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-roboto font-bold text-2xl text-black hover:opacity-80 transition-opacity"
        >
          Elizabeth Goltz
        </Link>
        <p className="font-inter italic text-sm text-black">
          data & development projects
        </p>
        <nav>
          <Link
            href="/about"
            className="font-inter text-sm text-black hover:opacity-60 transition-opacity"
          >
            About / Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
