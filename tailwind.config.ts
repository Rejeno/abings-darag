import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      translate: {
        // Add custom translate values here
        '1': '0.25rem', // Example
        '20': '5rem',   // Example
        '36': '9rem',   // Example
        '56': '14rem',  // Example
        '72': '18rem',  // Example
      },
    },
  },
  plugins: [],
};

export default config;
