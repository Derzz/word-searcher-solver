import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'h-full',
    'w-full',
    'pb-full',
    'gap-0',
    'auto-cols-auto',
    {pattern: /^grid-cols-/},
  ],
  theme: {
    extend: {
      spacing: {
        'full': '100%',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
