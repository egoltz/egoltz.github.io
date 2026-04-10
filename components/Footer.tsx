export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#E5E5E5] mt-auto">
      <div className="max-w-[900px] mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
        <span className="font-inter text-sm text-gray-400">
          {/* Designed by{' '}
          <a
            href="https://xomatic.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-70 transition-opacity 
"
          >
            xomatic.studio
          </a>
          {' '}·{' '} */}
          <span>© {year} Elizabeth Goltz</span>
        </span>

        <a
          href="https://www.linkedin.com/in/egoltz/"
          aria-label="LinkedIn profile"
          className="text-black hover:opacity-60 transition-opacity"
        >
          {/* LinkedIn SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
