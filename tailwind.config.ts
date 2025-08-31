import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        infinity: {
          navy: {
            50: "#0C47E9",
            100: "#0B41D5",
            200: "#0A3BC2",
            300: "#0935AE",
            400: "#082F9B",
            500: "#072988",
            600: "#051F64", //
            700: "#051E61",
            800: "#04184E",
            900: "#03123A",
            950: "#020C27",
          },
          teal: {
            50: "#05F0DC",
            100: "#04DCCA",
            200: "#04C8B8",
            300: "#04B2A4", //
            400: "#03A093",
            500: "#038C81",
            600: "#02786E",
            700: "#02645C",
            800: "#025049",
            900: "#013C37",
            950: "#012825",
          },
          // lightSeaGreen: "#04B2A4",
          seaGreen: "#05A09C",
          cyan: "#059798",
          darkCyan: "#058E94",
          teal2: "#057C8C",
          cerulean: "#056984",
          lapisLazuli: "#05577C",
          indigoDye: "#054474",
          yaleBlue: "#05326C",
          // royalBlue: "#051F64",
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
