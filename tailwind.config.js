/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E28F11',
        primaryDark: '#c67e10',
        backgroundStart: '#C96C0C',
        backgroundEnd: '#E5A73D',
        textMain: '#1F1F1F',
        textMuted: '#666666',
        surface: '#FFFFFF',
        border: '#E0E0E0',
      },
    },
  },
  plugins: [],
};
