/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'xxs' : '340px',
      },
      fontSize: {
        'xxs' : '10px',
      },
      fontFamily: {
        Anton: ['Anton', 'sans-serif'],
        DM_Mono: ['DM-Mono', 'serif'],
        DM_Mono_medium: ['DM-Mono-medium', 'serif'],
        DM_Mono_medium_italic: ['DM-Mono-medium-italic', 'serif'],
      },
      backgroundImage:{
        'noise':"url('../images/noise.png')"
      },
      colors: {
        primary: '#1B1919',
        background:'#F1ECDA'
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

