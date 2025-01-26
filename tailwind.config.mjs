/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        15: 15,
      },
      colors: {
        main: "#5e3ad4",
        secondary: "#1e1e1e",
      },
    },
  },
  plugins: [],
};

export default config;
