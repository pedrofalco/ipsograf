/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mabry: ['Mabry', 'sans-serif'],
      },
    }
  },
  plugins: [require('daisyui')]
};