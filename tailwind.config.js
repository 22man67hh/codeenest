/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0b132b',
          950: '#050914',
          900: '#070d1e',
          800: '#0b132b',
          700: '#0e1a38',
          600: '#14254f',
          card: '#0d1836',
          border: 'rgba(0, 180, 216, 0.2)',
          borderHover: 'rgba(0, 180, 216, 0.6)',
        },
        electric: {
          DEFAULT: '#00b4d8',
          glow: '#48cae4',
          light: '#90e0ef',
          dark: '#0077b6',
          deep: '#03045e',
        },
        neon: {
          blue: '#00f0ff',
          cyan: '#38bdf8',
          glow: '#00c3ff',
        },
        meta: {
          blue: '#0081fb',
          gradientStart: '#0064e0',
          gradientEnd: '#00b4d8',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0, 180, 216, 0.3)',
        'glow-md': '0 0 25px rgba(0, 180, 216, 0.45)',
        'glow-lg': '0 0 45px rgba(0, 180, 216, 0.65)',
        'glow-neon': '0 0 35px rgba(0, 240, 255, 0.55)',
        'card-glow': '0 10px 30px -10px rgba(0, 180, 216, 0.25)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(20px)' },
          '50%': { opacity: '0.9', filter: 'blur(28px)' },
        }
      }
    },
  },
  plugins: [],
}
