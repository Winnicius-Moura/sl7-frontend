/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        galaxy: "url('./src/assets/background-galaxy.png')",
        logoImg: "url('./src/assets/sl7Logo.png')",
        'sl7-gradient': "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #22D66D 44.57%)",
      },
    },
  },
  plugins: [],
}
