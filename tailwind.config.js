/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
