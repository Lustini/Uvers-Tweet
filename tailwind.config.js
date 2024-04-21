/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
    "screens": {
      'xs': '270px',
      'sm': '700px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'pink' : '#FF2E63',
      'green' : '#00A09E',
      'white' : '#FFFFFF',
      'grey': '#252A34',
      'greyHomeBackground': '#D9D9D9',
      'lightGrey': '#F0F0F0',
      'neutral' : '#F5F5F5',
      'darkGrey' : '#222222',
    },
    fontFamily: {
      'plusJakarta': ['Plus Jakarta Sans', 'sans-serif'],
    },
    fontSize: {
      'xxs': '0.5rem',
      'xs': '0.7rem',
    },
    height: {
      '110': '27.5rem', 
    
    },
    width: {
      '110': '27.5rem',
       
    },
  },
  plugins: [],
}
