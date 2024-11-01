/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-lilac": "#F8F8F9",
        "dark-blue": "#111439",
        "bright-coral": "#FF6F61",
        "electric-purple": "#6A0DAD",
        "light-lavender": "#EDE7F6",
      },
      backgroundImage: {
        "gradient-purple-coral": "linear-gradient(90deg, #6A0DAD, #FF6F61)",
      },
    },
  },
  plugins: [],
}
