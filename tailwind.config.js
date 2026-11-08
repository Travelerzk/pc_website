/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: "#2d3435",
        paper: "#f9f9f9",
        soft: "#f2f4f4",
        quiet: "rgb(var(--c-quiet) / <alpha-value>)",
        gold: "#735b37",
        graphite: "#5f5e5e",
        night: "rgb(var(--c-bg) / <alpha-value>)",
        dusk: "rgb(var(--c-bg-alt) / <alpha-value>)",
        deep: "rgb(var(--c-bg-deep) / <alpha-value>)",
        violet: "rgb(var(--c-accent-strong) / <alpha-value>)",
        orchid: "rgb(var(--c-accent) / <alpha-value>)",
        mist: "rgb(var(--c-muted) / <alpha-value>)",
        panel: "rgb(var(--c-surface) / <alpha-value>)",
        panelSoft: "rgb(var(--c-card) / <alpha-value>)",
        white: "rgb(var(--c-fg) / <alpha-value>)",
        sky: {
          300: "rgb(var(--c-info) / <alpha-value>)"
        }
      },
      fontFamily: {
        signature: ["Great Vibes", "Manrope", "cursive"],
        display: ["Century Gothic", "Avenir Next", "Avenir", "Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        ambient: "0 24px 60px rgba(45, 52, 53, 0.06)"
      }
    }
  },
  plugins: []
};
