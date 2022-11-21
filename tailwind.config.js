/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    maxWidth: {
      '0': '0px',
      'none': 'none',
      'xs': '20rem',
      'sm': '24rem',
      'md': '28rem',
      'lg': '32rem',
      'xl': '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      'full': '100%',
      'min': 'min-content',
      'max': 'max-content',
      'prose': '65ch',
      'screen-sm': '640px',
      'screen-md': '768px',
      'screen-lg': '1024px',
      'screen-xl': '1280px',
      'screen-2xl': '1536px;',
      '8xl': '2300px',

    },
    screens: {
      'xxxsm': '315px',
      // => @media (min-width: 315px) { ... }

      'xxsm': '355px',
      // => @media (min-width: 355px) { ... }

      'xsm': '375px',
      // => @media (min-width: 375px) { ... }

      'semixsm': '408px',
      // => @media (min-width: 408px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'md-blog-img': '791px',
      // => @media (min-width: 791px) { ... }

      'burgernav': '833px',
      // => @media (min-width: 831px) { ... }

      'lg-blog-img': '839px',
      // => @media (min-width: 839px) { ... }

      'navchange': '859px',
      // => @media (min-width: 859px) { ... }

      'md-lg': '878px',
      // => @media (min-width: 878px) { ... }

      'md-lg-bigger': '915px',
      // => @media (min-width: 915px) { ... }

      'sm-lg': '696px',
      // => @media (min-width: 696px) { ... }

      'md-lg': '1029px',
      // => @media (min-width: 1029px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'biggerlg': '1039px',
      // => @media (min-width: 1039px) { ... }

      'smallxl': '1100px',
      // => @media (min-width: 1100px) { ... }

      'mednav': '1148px',
      // => @media (min-width: 1148px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1439px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      
      '3xl': '1979px',
      // => @media (min-width: 1536px) { ... }


    },
    extend: {
      colors: {
        // colors
        'blue-hover': '#00ddff',
        'white-button': '#D8D8D8',
        'primary-fw': '#264347',
        'secondary-fw': '#EFEDE6',
      }
    },
  },
  plugins: [],
};