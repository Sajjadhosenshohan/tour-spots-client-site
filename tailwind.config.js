// /** @type {import('tailwindcss').Config} */
// export default {
//   // darkMode: "class",
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       // animation color for text
//       keyframes: {
//         animatedgradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       backgroundSize: {
//         '300%': '300%',
//       },
//       animation: {
//         gradient: 'animatedgradient 6s ease infinite alternate',
//       },
//     // 
//     colors: {
//       primary: "#f85559",
//       secondary: "#ffeceb",
//     }
//   },
// },
// plugins: [require("daisyui")],
//   daisyui: {
//   themes: [
//     'light',
//     'dark',
//     'cupcake',
//     'bumblebee',
//     'emerald',
//     'corporate',
//     'synthwave',
//     'retro',
//     'cyberpunk',
//     'valentine',
//     'halloween',
//     'garden',
//     'forest',
//     'aqua',
//     'lofi',
//     'pastel',
//     'fantasy',
//     'wireframe',
//     'black',
//     'luxury',
//     'dracula',
//     'cmyk',
//     'autumn',
//     'business',
//     'acid',
//     'lemonade',
//     'night',
//     'coffee',
//     'winter',
//     'dim',
//     'nord',
//     'sunset',
//   ],
//   },
// }

/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  // darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation color for text
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      colors: {
        primary: "#f85559",
        secondary: "#ffeceb",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],
  },
}


