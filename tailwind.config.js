/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: '#000000',
        surface: '#1e293b',
        surfaceHover: '#334155',
        border: 'rgba(255,255,255,0.05)',
        borderHover: 'rgba(255,255,255,0.1)',
        brand: {
          light: '#818cf8', 
          DEFAULT: '#6366f1', 
          dark: '#4f46e5', 
          gradientStart: '#6366f1', 
          gradientEnd: '#f43f5e', 
        }
      },
      boxShadow: {
        'glow': '0 10px 40px -10px rgba(99, 102, 241, 0.4)',
        'glow-rose': '0 10px 40px -10px rgba(244, 63, 94, 0.4)',
        'subtle': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'card': '0 20px 40px -10px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.05)',
      },
      animation: {
        'blob': 'blob 15s infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(50px, -50px) scale(1.2)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.8)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          from: { transform: 'translateX(-100%) skewX(-12deg)' },
          to: { transform: 'translateX(200%) skewX(-12deg)' },
        }
      }
    },
  },
  plugins: [],
}
