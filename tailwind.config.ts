/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        brand: '#8B5CF6',
        'brand-dark': '#6D28D9',
        'brand-light': '#C084FC',
        success: '#22C55E',
        'text-heading': '#0F172A',
        'text-body': '#475569',
        'bg-main': '#F8FAFC',
        'bg-card': '#FFFFFF',
        'border-subtle': '#F1F5F9',
      },
    },
  },
  plugins: [],
}
