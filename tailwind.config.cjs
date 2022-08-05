/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        aurora: {
          mauve: '#B48EAD',
          green: '#A3BE8C',
          yellow: '#EBCB8B',
          orange: '#D08770',
          red: '#BF616A'
        },
        frost: {
          blue: '#5E81AC',
          sky: '#81A1C1',
          ice: '#88C0D0',
          green: '#8FBCBB'
        },
        "snow-storm": {
          light: '#ECEFF4',
          DEFAULT: '#ecf2fd',
          dark: '#D8DEE9'
        },
        "polar-night": {
          50: '#4C566A',
          light: '#434C5E',
          DEFAULT: '#3B4252',
          dark: '#2E3440'
        }
      }
    },
  },
  plugins: [],
}
