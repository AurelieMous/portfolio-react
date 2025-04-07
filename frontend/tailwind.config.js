import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
      }
    },
  },
  safelist: [
    "bg-orange-500",
    "bg-blue-500",
    "bg-blue-600",
    "bg-yellow-500",
    "bg-blue-400",
    "bg-purple-500",
    "bg-pink-500",
    "bg-teal-500",
    "bg-black",
    "text-white",
    "bg-green-500",
    "bg-blue-300",
    "bg-blue-950",
    "bg-yellow-400"
  ],
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: true,
    }),
  ],
}
