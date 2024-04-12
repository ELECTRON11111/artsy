import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: {
          100: '#FFFFFF',
        }
      },
      fontFamily: {
        body: ["Plus Jakarta Sans", "sans-serif"],
        artsy: ["STIX Two Text", "serif"],
        clash_display: ["Clash Display", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
        baskervville: ["Baskervville", "serif"],
      },
    },
    plugins: [],
  }
};
export default config;
