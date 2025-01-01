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
        background: {
          100: "hsl(0, 0%, 93%)",
          200: "hsl(0, 0%, 83%)",
          300: "hsl(0, 0%, 73%)",
          400: "hsl(0, 0%, 63%)",
          500: "hsl(0, 0%, 53%)",
        },
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
