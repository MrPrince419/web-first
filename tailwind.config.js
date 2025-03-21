/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        text: 'var(--text)',
        'text-light': 'var(--text-light)',
        // Update color scheme
        gold: '#3498db', // Changed from gold to blue
        orange: '#2980b9', // Changed from orange to darker blue
        navy: '#2c3e50' // Changed from navy to dark slate
      },
      fontFamily: {
        forum: ['Forum', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-overlay': 'var(--gradient-overlay)',
      },
      letterSpacing: {
        tighter: 'var(--spacing-tight)',
        widest: 'var(--spacing-wide)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.gold'),
              '&:hover': {
                color: theme('colors.orange'),
              },
            },
          },
        },
      }),
      screens: {
        'xs': '360px',
        // ...existing screens
      },
      maxWidth: {
        'screen': '100vw',
      },
      width: {
        'screen': '100vw',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};