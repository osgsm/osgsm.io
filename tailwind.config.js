/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        'misty-slate': {
          50: '#F9F9FB',
          100: '#EDEDF2',
          200: '#E2E2E9',
          300: '#C4C4D4',
          400: '#A7A7BE',
          500: '#8A8AA8',
          600: '#6C6C93',
          700: '#575775',
          800: '#414158',
          900: '#2B2B3B',
          950: '#16161D',
        },
        'twilight-indigo': {
          50: '#F5F5FE',
          100: '#E3E3FD',
          200: '#D1D1FA',
          300: '#A8A8F0',
          400: '#8585E0',
          500: '#6666CC',
          600: '#4D4DB2',
          700: '#42428A',
          800: '#323267',
          900: '#2D2D53',
          950: '#1F1F2E',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: 'normal',
            },
            p: {
              hangingPunctuation: 'allow-end',
            },
            a: {
              color: theme('colors.blue.500'),
              fontWeight: 'normal',
              textDecorationColor: theme('colors.blue.200'),
              textDecorationThickness: theme('spacing.[0.5]'),
              textUnderlineOffset: theme('spacing.1'),
              '&:hover': {
                color: theme('colors.blue.600'),
                textDecorationColor: theme('colors.blue.300'),
              },
            },
            code: {
              backgroundColor: theme('colors.gray.200/90'),
              borderRadius: theme('borderRadius.DEFAULT'),
              paddingTop: theme('spacing.[0.5]'),
              paddingBottom: theme('spacing.[0.5]'),
              paddingLeft: theme('spacing.[1.5]'),
              paddingRight: theme('spacing.[1.5]'),
              fontWeight: 'normal',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
