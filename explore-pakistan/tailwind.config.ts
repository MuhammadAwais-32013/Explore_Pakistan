// src/tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/types/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",    // Dark green
        secondary: "#FFEB3B",  // Bright yellow
        accent: "#66BB6A",     // Lighter green
        neutral: "#FAFAFA",    // Light neutral background
        text: "#333333",       // Dark gray for text
      },
    },
  },
  plugins: [],
}

export default config
