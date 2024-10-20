/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgBase: 'var(--color-white-shade)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        secondarytint: 'var(--color-secondary-tint)',
      },
      fontFamily: {
        sans: ['Montserrat Alternates', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

