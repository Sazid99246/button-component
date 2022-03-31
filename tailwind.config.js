module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'head': ['Poppins'],
        'button': ['Noto Sans JP']
      },
      fontSize: {
        'head': ['24px', '36px']
      },
      colors: {
        'gray-150': 'rgb(224, 224, 224)',
        'gray-450': 'rgb(174, 174, 174)',
        'blue-450': 'rgb(61, 90, 254)',
        'blue-550': 'rgb(41, 98, 255)',
        'zinc-750': 'rgb(63, 63, 63)',
        'slate-550': 'rgb(0, 57, 203)',
        'stone-950': 'rgb(69, 90, 100)',
        'stone-975': 'rgba(28, 49, 58)',
        'cyan-150': 'rgb(211, 47, 47)',
        'cyan-175': 'rgb(154, 0, 7)'
      },
      dropShadow:{
        '3xl': '0 2px 3px rgba(51, 51, 51, 0.2)',
        '4xl': '0 2px 3px 0 rgba(41, 98, 255, 0.2)',
        '5xl': '0 2px 3px 0 rgba(69, 90, 100, 0.2)',
        '6xl': '0 2px 3px 0 rgba(211, 47, 47, 0.2)'
      },
      margin: {
        '53': '53px',
        '320': '320px'
      },
      width: {
        '81': '81px',
        '88': '88px',
        '105': '105px',
        '18': '73px',
        '93': '93px',
        '104': '104px'
      },
      height:{
        '42': '42px'
      }
    }
  },
  plugins: [],
}
