import { defaultTheme } from "tailwindcss/defaultTheme";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        periwinkle: "#ABB0F2",
        cornflowerBlue: "#9196F2",
        gunmetal: "#3F3D73",
        steelBlue: "#5671A6",
        midnightBlue: "#131722",
      },
      fontFamily: {
        ...fontFamily,
        karma: ["'Karma', sans-serif"],
      },
    },
  },
  plugins: [],
};
