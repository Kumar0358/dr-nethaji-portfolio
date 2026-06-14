/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f8fafb',
          100: '#f0f4f8',
          200: '#d9e1ed',
          300: '#c3cde3',
          400: '#8fa3c6',
          500: '#5b79aa',
          600: '#3d5a8d',
          700: '#1a2f4a',
          800: '#0f1f2e',
          900: '#0a1419',
        },
        teal: {
          50: '#f0fffe',
          100: '#ccfff9',
          200: '#99fff4',
          300: '#66ffed',
          400: '#33ffee',
          500: '#00a99d',
          600: '#008a7e',
          700: '#006b65',
          800: '#004c4b',
          900: '#002e2d',
        },
        medical: {
          light: '#ffffff',
          dark: '#0a1419',
        }
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-md': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'headline': ['1.875rem', { lineHeight: '1.4' }],
        'title': ['1.25rem', { lineHeight: '1.5' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'pulse-soft': 'pulseSoft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 169, 157, 0.5)' },
          '50%': { 'box-shadow': '0 0 30px rgba(0, 169, 157, 0.8)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      },
      backdropFilter: {
        'glass': 'blur(10px) brightness(1.1)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'elevation-3': '0 8px 16px rgba(0, 0, 0, 0.15)',
        'elevation-4': '0 16px 32px rgba(0, 0, 0, 0.18)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      }
    },
  },
  plugins: [],
};
