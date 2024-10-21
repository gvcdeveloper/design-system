/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        background: 'rgba(var(--background))',
        primary: {
          DEFAULT: 'rgba(var(--primary-default))',
          hover: 'rgba(var(--primary-hover))',
          text: 'rgba(var(--primary-text))',
          disabled: 'rgba(var(--primary-disabled))',
        },
        secondary: {
          DEFAULT: 'rgba(var(--secondary-default))',
          hover: 'rgba(var(--secondary-hover))',
          text: 'rgba(var(--secondary-text))',
          disabled: 'rgba(var(--secondary-disabled))',
        },
        outlined: {
          DEFAULT: 'rgba(var(--outlined-default))',
          hover: 'rgba(var(--outlined-hover))',
          text: 'rgba(var(--outlined-text))',
          border: 'rgba(var(--outlined-border))',
          'text-hover': 'rgba(var(--outlined-text-hover))',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
};
