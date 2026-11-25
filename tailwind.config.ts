/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070B14",
        midnight: "#0B1220",
        royal: "#1D4ED8",
        sky: "#60A5FA",
        steel: "#94A3B8",
      },
      boxShadow: {
        panel: "0 24px 80px rgba(2, 6, 23, 0.12)",
      },
    },
  },
  plugins: [],
};
