import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Montserrat: "Montserrat",
    },
    extend: {
      backgroundImage: {
        "action-background": "url(/images/background.svg)",
        heroImage1: "url(/images/heroImage1.svg)",
        heroImage2: "url(/images/heroImage2.svg)",
        heroImage3: "url(/images/heroImage3.svg)",
        heroImage4: "url(/images/heroImage4.svg)",
        madison1: "url(/images/madison1.svg)",
        madison2: "url(/images/madison2.svg)",
        madison3: "url(/images/madison3.svg)",
      },
    },
  },
  plugins: [],
};
export default config;
