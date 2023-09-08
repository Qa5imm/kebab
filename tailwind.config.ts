import type { Config } from 'tailwindcss'


export default <Partial<Config>>{
  theme: {
  extend: {
    colors: {
      bred:{
        '100':'#FF1717',
        '200':'#F43939',
      },
      bgray:{
        '100':'#F6F6F6',
        '200':'#F5F5F5',
        '300':'#F2F2F2',
        '400':'#4b5563'
      }
    },

    boxShadow: {
      'bbs': '14px 14px 14px 0px #C7C5C5',
    },
  },
  fontFamily: {
    'roboto': ['Roboto', 'sans-serif'],
  }
}
}
