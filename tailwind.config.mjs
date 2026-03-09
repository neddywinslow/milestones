/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1F3A68',
          red: '#B4372A',
          sky: '#4D7FBF',
        },
        surface: {
          sand: '#F5F1EA',
          mist: '#E5E7EB',
        },
        text: {
          ink: '#111827',
          slate: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
