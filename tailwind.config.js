
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
        ],
        headings: "Montserrat",
      },

      colors: {
        primary: "#47209A",
        
        dark: "#111111",
        SecondaryColor: "#6B4EDB",//(A darker purple for accents)
        Background: "#F8F4FF",//(A very light purple / white)
        TextColor: "#2E2A3B",//(A deep, almost black purple for text)
        CardBackground: "#373157" //(Dark purple for product cards)
      },
      animation: {
        "opacity-pulse": "opacity-pulse .8s ease-in-out infinite alternate-reverse",
        marquee: "marquee 10s linear infinite backwards",
      },
      keyframes: {
        "opacity-pulse": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },


      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      }
    },
  },
  plugins: [],
}