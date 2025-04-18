/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#5f6FFF',
        // 'primary':'#6DE1D2',
        // 'secondary':"#FFFFFF ",
        'secondary':"#bfdbfe",
        'secondary1':"#dbeafe",
        'Accent': "#F0F0F0",
        // 'bg-light':'#6DE1D2'
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}