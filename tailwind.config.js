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
        'start-button-norm': "url('assets/start-button/xp_btn_norm.png')",
        'start-button-hover': "url('assets/start-button/xp_btn_hover.png')",
        'start-button-click': "url('assets/start-button/xp_btn_click.png')",
      },
    },
  },
  plugins: [],
}

