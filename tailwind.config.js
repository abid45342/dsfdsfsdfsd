/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
    },
  },
  daisyui: {
    themes: ['light'], // Force light theme only
    darkTheme: false, // Disable the dark theme completely
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};




// /* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: false, // Disable Tailwind's dark mode
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'), // DaisyUI plugin for UI components
//   ],
//   daisyui: {
//     themes: ['light'], // Force light theme only
//     darkTheme: false, // Disable the dark theme completely
//   },
// };



