import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["var(--font-space-mono)", "monospace"],
        "playfair": ["var(--font-playfair)", "serif"],
        "inter": ["var(--font-inter)", "sans-serif"],
        "share-tech": ["var(--font-share-tech)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
