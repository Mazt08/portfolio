/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0e",
        surface: "#111118",
        lime: "#c4f030",
        text: "#f0f0f5",
        dim: "#9898a8",
        border: "#1f1f28",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

