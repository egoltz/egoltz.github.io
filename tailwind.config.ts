import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        text: '#000000',
        'text-secondary': '#555555',
        border: '#E5E5E5',
        'tag-bg': '#F0F0F0',
        'tag-active': '#000000',
        'tag-active-text': '#FFFFFF',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
      maxWidth: {
        content: '900px',
      },
    },
  },
  plugins: [],
}

export default config
