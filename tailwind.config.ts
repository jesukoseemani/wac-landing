import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: {
          55: '#CA8A04',
          60: '#B45309',
          70: '#EAB308',
          80: '#FACC15',
          90: '#FEF9C3',
          95: '#FEFCE8',
          97: '#FFFBEB',
          99: '#FFFBEB'
        },
        dark: {
          3: '#070708',
          6: '#0E0E10',
          8: '#131316',
          12: '#1C1C21',
          15: '#232329',
          20: '#2F2F37',
          25: '#3B3B45',
          30: '#474752',
        },
        grey: {
          40: '#62646C',
          50: '#797C86',
          70: '#AFB0B6',
          80: '#CACACE',
          90: '#E4E4E6',
          95: '#F2F2F3',
          97: '#F7F7F8',
          99: '#FCFCFD'
        },
        purple: {
          90: '#FEF9C3',
          55: '#CA8A04'
        }
      },
    },
  },
  plugins: [addVariablesForColors, require('@tailwindcss/forms')],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
