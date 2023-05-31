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
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          background: 'hsl(var(--muted-background))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        button: {
          primary: {
            background: 'hsl(var(--button-primary-background))',
            foreground: 'hsl(var(--button-primary-foreground))',
            border: 'hsl(var(--button-primary-border))',
            hover: {
              background: 'hsl(var(--button-primary-hover-background))',
              border: 'hsl(var(--button-primary-hover-border))',
            },
          },
          secondary: {
            background: 'hsl(var(--button-secondary-background))',
            foreground: 'hsl(var(--button-secondary-foreground))',
            border: 'hsl(var(--button-secondary-border))',
            hover: {
              background: 'hsl(var(--button-secondary-hover-background))',
              border: 'hsl(var(--button-secondary-hover-border))',
            },
          },
        },
        link: {
          foreground: 'hsl(var(--link-foreground))',
          decoration: 'hsl(var(--link-decoration))',
          hover: {
            foreground: 'hsl(var(--link-hover-foreground))',
            decoration: 'hsl(var(--link-hover-decoration))',
          },
        },
        border: 'hsl(var(--border))',
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
              fontWeight: '600',
            },
            p: {
              hangingPunctuation: 'allow-end',
            },
            a: {
              color: theme('colors.link.foreground'),
              fontWeight: 'normal',
              textDecorationColor: theme('colors.link.decoration'),
              textDecorationThickness: 2,
              textUnderlineOffset: 4,
              '&:hover': {
                color: theme('colors.link.hover.foreground'),
                textDecorationColor: theme('colors.link.hover.decoration'),
              },
            },
            code: {
              backgroundColor: theme('colors.muted.background'),
              borderColor: theme('colors.border'),
              borderWidth: 1,
              borderRadius: theme('borderRadius.DEFAULT'),
              paddingTop: theme('spacing.[0.5]'),
              paddingBottom: theme('spacing.[0.5]'),
              paddingLeft: theme('spacing.[1]'),
              paddingRight: theme('spacing.[1]'),
              fontWeight: 'inherit',
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
