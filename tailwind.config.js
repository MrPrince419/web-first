/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        forum: ['Forum', 'serif'],
      },
      colors: {
        navy: '#0a192f',
        gold: '#fca311',
        orange: '#ff8c00'
      },
      boxShadow: {
        'glow': '0 0 15px rgba(252, 163, 17, 0.5)',
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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // Line clamp functionality is now included in Tailwind by default
  ],
};