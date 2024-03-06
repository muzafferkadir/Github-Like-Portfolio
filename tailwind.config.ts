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
        primary: "rgb(13, 17, 23)",
        white: {
          DEFAULT: "rgb(230, 237, 243)",
          1: "rgb(230, 237, 243)",
          2: "rgb(201 209 217)",
        },
        light: {
          1: "rgb(132, 141, 151)",
          2: "rgb(139, 148, 158)",
        },
        blue: "rgb(47, 129, 247)",
        dark: {
          DEFAULT: "rgb(48, 54, 61)",
          1: "rgb(48, 54, 61)",
          2: "rgb(22, 27, 34)",
        },
      },
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        DEFAULT: "6px",
      },
      borderColor: {
        DEFAULT: "rgb(48, 54, 61)"
      }
    },
    plugins: [],
  }
};
export default config;
