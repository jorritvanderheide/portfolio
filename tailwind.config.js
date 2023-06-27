// Tailwind CSS configuration file
// https://tailwindcss.com/docs/configuration

/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "!./node_modules",
];
export const theme = {
  fontFamily: {
    body: "var(--font-body)",
    display: "var(--font-display)",
    headings: "var(--font-headings)",
  },
  fontSize: {
    body: [
      "clamp(1.5rem, 1.3571428571428572rem + 0.7142857142857143vw, 2.5rem)",
      1.5,
    ],
    display: [
      "clamp(1.5rem, 1.3571428571428572rem + 0.7142857142857143vw, 2.5rem)",
      1.25,
    ],
    headings: [
      "clamp(2rem, 0.5714285714285716rem + 7.142857142857142vw, 12rem)",
      1.25,
    ],
  },
  spacing: {
    header: "5em",
    "header-mobile": "7.5em",
    prose: "min(66ch, 100%)",
    0: "0",
    1: "1em",
    2: "2em",
    3: "3em",
    4: "4em",
    5: "5em",
    6: "6em",
    7: "7em",
    8: "8em",
    9: "9em",
    10: "10em",
  },
};
