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
          50: "#f0f5ff",
          100: "#d6e0ff",
          200: "#adc2ff",
          300: "#85a3ff",
          400: "#5c85ff",
          500: "#3366ff",
          600: "#294dcc",
          700: "#1f3399",
          800: "#142066",
          900: "#0a1033"
        },
        accent: {
          400: "#a366ff",
          500: "#8533ff",
          600: "#661acc"
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #5c85ff 0%, #a366ff 100%)'
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
      },
    },
  },
  plugins: [],
};
