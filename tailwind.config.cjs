module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/core/components/**/*.{js,ts,jsx,tsx}',
    './src/app/main/components/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '568px',
      },
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
