// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fef7ff',
          100: '#fdf2ff',
          200: '#fbc9ff',
          300: '#f9a8ff',
          400: '#f569ff',
          500: '#e935ea',
          600: '#d318d6',
          700: '#b012b5',
          800: '#901494',
          900: '#751677',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        dark: {
          900: '#0d0d0d',
          800: '#1a1a1a',
          700: '#2e2e2e',
        },
        light: {
          100: '#f5f5f5',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('green', '.green &')
    }
  ],
};
