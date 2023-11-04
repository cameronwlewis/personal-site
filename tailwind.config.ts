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
          "linear-gradient(90deg, rgba(255,255,255,0) 15%, rgba(0,0,0,1) 90%), url('../assets/layered-leaves-flipped-gradient3.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
