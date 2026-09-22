/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF7F2',
        paper: '#FFFFFF',
        ink: '#2A211D',
        muted: '#8A7A72',
        wine: {
          DEFAULT: '#5C1220',
          dark: '#3C0A14',
          light: '#7A1B2C',
        },
        blush: {
          DEFAULT: '#E7B6BA',
          light: '#F5DEE0',
        },
        teal: {
          DEFAULT: '#6EA9A4',
          dark: '#4F8580',
        },
        brass: {
          DEFAULT: '#B98A4E',
          light: '#D9B77E',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        'marquee-slow': 'marquee 55s linear infinite',
        twinkle: 'twinkle 3.2s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
