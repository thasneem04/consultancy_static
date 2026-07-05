/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0A0A0A',
        card: '#111111',
        skybrand: '#1EA7F2',
        cobalt: '#2D5AA6',
        gold: '#F9C500',
        ember: '#F05A28',
        magenta: '#D92E8A',
        muted: '#CFCFCF'
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 18px 70px rgba(30, 167, 242, 0.18)',
        warm: '0 18px 60px rgba(217, 46, 138, 0.16)'
      }
    }
  },
  plugins: []
};
