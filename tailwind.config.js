/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        himalaya: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Himalayan Gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        crimson: {
          500: '#dc2626', // Nepal Flag Crimson
          600: '#b91c1c',
          700: '#991b1b',
        },
        prayerBlue: {
          500: '#2563eb', // Prayer Flag Blue
          600: '#1d4ed8',
        },
        prayerGreen: {
          500: '#16a34a', // Prayer Flag Green
        },
        darkBg: '#090d16',
        darkCard: '#131b2e',
        darkBorder: '#232f48'
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
        malayalam: ['"Noto Sans Malayalam"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
