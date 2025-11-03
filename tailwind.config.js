/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          darker: '#020c1b',
          dark: '#0a192f',
          medium: '#112240',
          light: '#1d3557',
        },
        secondary: {
          dark: '#0d1b2a',
          medium: '#1b263b',
        },
        accent: {
          cyan: '#64ffda',
          blue: '#00d9ff',
          purple: '#c770f0',
        },
        text: {
          primary: '#ccd6f6',
          secondary: '#8892b0',
          light: '#a8b2d1',
        }
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': {
            'box-shadow': '0 0 20px #64ffda, 0 0 30px #64ffda, 0 0 40px #64ffda',
          },
          'to': {
            'box-shadow': '0 0 30px #64ffda, 0 0 40px #64ffda, 0 0 50px #64ffda',
          },
        },
      },
    },
  },
  plugins: [],
}
