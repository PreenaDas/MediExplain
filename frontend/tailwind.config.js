/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6", // default purple
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        accent: {
          400: "#60a5fa", // sky blue
          500: "#3b82f6",
          600: "#2563eb",
        },
        glass: "rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(139, 92, 246, 0.6)", // purple glow
        soft: "0 4px 20px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "gradient-animated":
          "linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
