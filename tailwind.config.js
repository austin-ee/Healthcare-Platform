/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{jsx,ts,tsx,html,js,css}'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge:{
    enabled: true,
    content: ['./src/**/*.{jsx,ts,tsx,html,js,css}']
  }
}
