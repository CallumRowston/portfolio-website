/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(180deg, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      }),
      colors: {
        "custom-green": "#A1EEBD",
        "custom-blue": "#7BD3EA",
        "custom-purple": "#DCBFFF",
        "custom-dark-green": "#538E6E",
        "custom-dark-blue": "#676394",
        "custom-dark-purple": "#946263",
      },
      animation: {
        "gradient-waves": "gradient-waves 5s ease infinite",
      },
      keyframes: {
        "gradient-waves": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["responsive", "hover", "focus"],
      backgroundSize: ["responsive", "hover", "focus"],
      animation: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
  darkMode: "class",
};
