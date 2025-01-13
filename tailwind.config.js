/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'taskbar-colour': 'linear-gradient(#1f2f86, #3165c4 3%, #3682e5 6%, #4490e6 10%, #3883e5 12%, #2b71e0 15%, #2663da 18%, #235bd6 20%, #2258d5 23%, #2157d6 38%, #245ddb 54%, #2562df 86%, #245fdc 89%, #2158d4 92%, #1d4ec0 95%, #1941a5 98%)',
        'trays-colour': 'linear-gradient(#0c59b9 1%, #139ee9 6%, #18b5f2 10%, #139beb 14%, #1290e8 19%, #0d8dea 63%, #0d9ff1 81%, #0f9eed 88%, #119be9 91%, #1392e2 94%, #137ed7 97%, #095bc9)',
        'start-button-norm': "url('assets/start-button/xp_btn_norm.png')",
        'start-button-hover': "url('assets/start-button/xp_btn_hover.png')",
        'start-button-click': "url('assets/start-button/xp_btn_click.png')",
      },
      colors: {
        'selected': 'rgb(11, 97, 255)'
      },
      boxShadow: {
        'tray-inset': 'inset 1px 0 1px #18bbff'
      },
      textShadow: {
        'shortcut': '0px 1px 1px black'
      },
      dropShadow: {
        'selected': 'blue 0px 0px'
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

