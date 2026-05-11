module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '2560px'
    },
    extend: {
      colors: {
        midnight: '#2f2a24',
        slateglass: '#5a4b2f',
        sand: '#fcf8f1',
        gold: '#b88a2e',
        bronze: '#7a6b43',
        cloud: '#f2e4c8'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(93, 73, 35, 0.16)',
        glass: '0 16px 50px rgba(93, 73, 35, 0.18)'
      },
      backgroundImage: {
        aurora: 'radial-gradient(circle at top, rgba(198, 154, 58, 0.22), transparent 36%), radial-gradient(circle at 85% 12%, rgba(191, 195, 164, 0.18), transparent 24%), linear-gradient(145deg, rgba(47, 42, 36, 0.96), rgba(90, 75, 47, 0.9))'
      }
    }
  },
  plugins: []
}
