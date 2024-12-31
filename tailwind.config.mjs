/** @type {import('tailwindcss').Config} */
const cfg = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FF6363",
      },
      fontFamily: {
        music: ["Noto+Music"],
      },
    },
  },
  plugins: [],
};

export default cfg;
