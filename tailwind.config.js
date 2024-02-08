
module.exports = { 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  variants: {
    extend: {
      colors: {
        customRed: '#490917',
        customYellow: '#fec200',
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
  
};