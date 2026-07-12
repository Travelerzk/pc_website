/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2d3435",
        paper: "#f9f9f9",
        soft: "#f2f4f4",
        quiet: "#71717A",
        gold: "#735b37",
        graphite: "#5f5e5e",
        night: "#05030a",
        violet: "#8b5cf6",
        orchid: "#c084fc",
        mist: "#a7a3b8",
        panel: "#11101a",
        panelSoft: "#19172a"
      },
      fontFamily: {
        signature: ["Great Vibes", "Manrope", "cursive"],
        display: ["Manrope", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        ambient: "0 24px 60px rgba(45, 52, 53, 0.06)"
      }
    }
  },
  plugins: []
};
