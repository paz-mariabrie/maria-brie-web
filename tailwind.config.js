/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#8FA8BF',
        'brand-soft': '#A8B8C8',
        'brand-pale': '#EDF1F5',
        'brand-deep': '#6B8AA8',
        'ink': '#2C3844',
        'ink-soft': '#6B7A8A',
        'ink-ghost': '#B5BFC9',
        'cream': '#FAF8F5',
        'warm': '#D4A574',
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
