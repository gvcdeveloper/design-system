/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
        primary: {
          DEFAULT: '#28A745',
          hover: '#218838',
          disabled: '#A9D8A6',
          text: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#DC3545',
          hover: '#C82333',
          disabled: '#F5B1B5',
          text: '#FFFFFF',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'], // Para manejar el color de fondo de botones deshabilitados
      textColor: ['disabled'], // Para manejar el color de texto de botones deshabilitados
    },
  },
  plugins: [],
};
