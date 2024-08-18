import { Config } from 'tailwindcss'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./screens/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'Work_Sans': ['Work_Sans', 'sans-serif'],
        'Satoshi': ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config

