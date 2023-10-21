/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    backgroundImage:{
      'vkluchit':"url('/src/assets/Group.png')"
    }
    },
  },
  plugins: [],
}