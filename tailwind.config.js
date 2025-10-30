/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32', // Deep Green
          light: '#4CAF50',
          dark: '#1B5E20',
        },
        accent: {
          DEFAULT: '#FFA726', // Sunrise Orange
          light: '#FFB74D',
          dark: '#F57C00',
        },
        neutral: {
          light: '#FAFAFA', // Off-white
          dark: '#1F2937', // Charcoal
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'grow': 'grow 2s infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        grow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}