/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      gray: '#808080',
      'dark-gray':'#A9A9A9',
      'gray-light': '#d3dce6',
      'steel-gray':'#71797E',
      'bright-blue':'#0096FF',
      'sky-blue':'#87CEEB',
      'royal-blue':'#4169E1',
      'indigo':'#3F00FF',
      'kelly-green':'	#4CBB17',
      'lime-green':'#32CD32',
      dark:'#333333',
      light:'#ffffff',
      cart:'#ff9900',
      signin:'#0099ff',
      danger:'#FF0000'
    },
    screens:{
      'searchbar':{'min':'800px'},
      'tablet':{'max':'800px'},
      'mobile':{'max':'500px'},
      'laptop':{'min':'800px'},
      'monitor':{'min':'1100px'},
      'thousand':{'min':'1000px'}
    }
  },
  plugins: [],
}

