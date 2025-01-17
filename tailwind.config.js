/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink-custom": "rgba(248, 47, 160, 0.99)",
        "purple-custom": "rgba(214, 54, 208, 0.99)",
        "violet-custom": "rgba(180, 61, 255, 0.99)",
      },
      backgroundImage: {
        "blue-custom-gradient":
          "-webkit-linear-gradient(-48deg, #24e2fe 0%, #24b0fe 54%, #237efd 100%)",
        "purple-custom-gradient":
          "-webkit-linear-gradient(-48deg, rgba(248, 47, 160, 0.99) 0%, rgba(214, 54, 208, 0.99) 54%, rgba(180, 61, 255, 0.99) 100%)",
        "yellow-custom-gradient":
          "-webkit-linear-gradient(-48deg, rgba(255, 211, 36, 0.99) 0%, rgba(254, 187, 36, 0.99) 54%, rgba(253, 163, 35, 0.99) 100%)",
        "green-custom-gradient":
          "-webkit-linear-gradient(-48deg, rgba(0, 188, 128, 0.99) 0%, rgba(2, 204, 71, 0.99) 54%, rgba(3, 220, 13, 0.99) 100%)",
      },
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
