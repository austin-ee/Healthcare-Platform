/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,css}'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge:{
    enabled: true,
    content: ['./src/**/*.{html,js,css}']
  }
}
