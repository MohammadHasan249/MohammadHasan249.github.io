/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Custom colors matching the design
        'portfolio-bg': '#333C46',
        'portfolio-text': '#ffffff',
        'portfolio-text-muted': '#d1d5db',
        'portfolio-text-secondary': '#9ca3af',
        'portfolio-teal': '#52B2CF',
        'portfolio-teal-light': '#5DE5DB',
      }
    },
  },
  plugins: [],
} 