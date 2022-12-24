module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    container: {
      center: true,
      padding: "2.4rem",
    },
    debugScreens: {
      position: ['bottom', 'left'],
      selector: '.debug-screens',
      style: {
        backgroundColor: 'black',
        color: 'white',
      },
    },
    screens: {
      xsm: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens: {
        'mobile': '425px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens"),
  require("tailwindcss-brand-colors")],

}
