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
        'top-window-color': 'linear-gradient(rgb(0, 88, 238) 0%, rgb(53, 147, 255) 4%, rgb(40, 142, 255) 6%, rgb(18, 125, 255) 8%, rgb(3, 111, 252) 10%, rgb(2, 98, 238) 14%, rgb(0, 87, 229) 20%, rgb(0, 84, 227) 24%, rgb(0, 85, 235) 56%, rgb(0, 91, 245) 66%, rgb(2, 106, 254) 76%, rgb(0, 98, 239) 86%, rgb(0, 82, 214) 92%, rgb(0, 64, 171) 94%, rgb(0, 48, 146) 100%)',
        'start-button-norm': "url('assets/start-button/xp_btn_norm.png')",
        'start-button-hover': "url('assets/start-button/xp_btn_hover.png')",
        'start-button-click': "url('assets/start-button/xp_btn_click.png')",
        'maximize-icon': "url('assets/window/Resize/maximise.png')",
        'maximize-hover-icon': "url('assets/window/Resize/maximise_hover.png')",
      },
      colors: {
        'selected': 'rgb(11, 97, 255)',
        'radius-app': 'rgb(8, 49, 217)'
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
      fontFamily: {
        'window-title-sans': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

