import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "foliage-hero":
          "url('/assets/layered-leaves-flipped-gradient.jpeg'), linear-gradient(90deg, rgba(255,255,255,0) 5%, rgba(0,0,0,1) 80%)",
      },
    },
  },
  plugins: [],
};
export default config;
