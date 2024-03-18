export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',
        secondary: '#94A3B8',
        blue: '#306BFF',
        lightgray: '#F8FAFC',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
