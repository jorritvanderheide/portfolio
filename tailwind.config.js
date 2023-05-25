/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Open Sans", "sans-serif"],
      display: ["Space Grotesk", "sans-serif"],
      headings: ["Sora", "sans-serif"],
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
    screens: {},
    spacing: {
      header: "5em",
      prose: "clamp(100%, 66ch, 90ch)",
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
  },
  plugins: [],
};
