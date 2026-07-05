/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#07111F",
        "secondary-bg": "#0D1B2A",
        "card-bg": "#132238",
        night: "#07111F",
        card: "#132238",
        skybrand: "#1EA7F2",
        cobalt: "#2D5AA6",
        gold: "#F9C500",
        ember: "#F05A28",
        magenta: "#D92E8A",
        "text-primary": "#FFFFFF",
        "text-secondary": "#C7D2E0",
        muted: "#C7D2E0",
        "border-default": "rgba(255,255,255,0.08)",
        navbar: "rgba(7,17,31,0.85)",
      },
      fontFamily: {
        heading: ["Poppins", "Inter", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 70px rgba(30, 167, 242, 0.18)",
        warm: "0 18px 60px rgba(217, 46, 138, 0.16)",
      },
    },
  },
  plugins: [],
};
