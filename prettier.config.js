// prettier.config.js
export default {
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  experimentalUseClient: true, // щоб 'use client' лишався зверху
  plugins: ['prettier-plugin-tailwindcss'],
};