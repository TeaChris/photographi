/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff7b02',
        primaryVariant: '#e5a55d',
        bg1: '#140021',
        bg2: '#1e0032',
        bg3: '#25003e',
        bg4: '#36005a',
        light: '#d0b8e0',
        white: 'hsl(0, 0%, 90%)',
      },
    },
  },
  plugins: [],
}
