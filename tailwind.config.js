/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--text))",
        muted: "hsl(var(--text-light))",
      },
      fontFamily: {
        sans: ['var(--font-os)'],
        mono: ['var(--font-os)'],
      },
      boxShadow:{
        bal: ['rgba(17,17,26,0.1) 0px 0px 16px']
      }
    },
  },
  plugins: [],
};

// box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
