/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-3%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(3%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 3s ease-out", // Adjust duration and easing
        fadeInRight: "fadeInRight 3s ease-out", // Adjust duration and easing
      },
    },
  },
  plugins: [],
};
