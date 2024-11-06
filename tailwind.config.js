/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#da1111',
        secondary: '#dfdec7',
        tertiary: '#a6a191'
      },
      fontFamily: {
        primaryfont: ['primaryfont']
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #1a0000 5%,black 95%)',
        'capabilities-gradient': 'linear-gradient(to bottom, #290202 5%,black 95%)'
      },
      keyframes: {
        slowPing: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1'
          },

          '100%': {
            transform: 'scale(1.5)',
            opacity: '0',
          }
        }
      },
      animation: {
        'ping-slow': 'slowPing 3s cubic-bezier(0.5, 0, 1, 1) infinite',
      }
    },
  },
  plugins: [],
}

