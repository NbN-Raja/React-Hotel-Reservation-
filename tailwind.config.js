// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =withMT({

  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx}',
      'src/components/**/*.{js,jsx}',
    ],
    theme: {
      colors:{
      'green':'#534E4E', 
      'navname':'#FFFFFF', 
      'loginbg':'#3AE460', 
      'gray':'#1a202c', 
      },
      extend: {
        backgroundImage: {
          'hero-pattern': "url('/public/hotels/home.jpg')",
      },
      fontFamily:{
        dashboard:['Roboto', 'sans-serif'],
          text:['Rubik', 'sans-serif'],
          nav:['Inter', 'sans-serif'],
      },
      
    },
  },
    plugins: [],
})

