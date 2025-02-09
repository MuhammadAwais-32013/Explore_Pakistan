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
        // Core Brand Colors
        primary: "#2E7D32",         // Deep green that reflects Pakistan’s rich landscapes and heritage.
        secondary: "#FFEB3B",       // Vivid yellow exuding energy and optimism.
        
        // Supporting Accent Color
        accent: "#009688",          // A modern teal accent that adds vibrancy and balances the palette.
        
        // Background & Neutral Elements
        background: "#F9F9F9",      // A clean, crisp background that enhances content focus.
        text: "#212121",            // Dark, legible text to ensure excellent readability and accessibility.
        
        // Interaction Variants for better user feedback
        "primary-dark": "#1B5E20",   // A richer green for hover/active states on primary elements.
        "secondary-light": "#FFF59D",// A softer yellow for subtle hover effects.
        "accent-light": "#4DB6AC",   // A lighter teal for gentle interactive cues.
      },
    },
  },
  plugins: [],
}

export default config
