/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2',
        secondary: '#9c27b0',
        background: '#f5f5f5',
        text: '#333',
        error: '#d32f2f',
        success: '#2e7d32',
      },
    },
  },
  plugins: [],
} 