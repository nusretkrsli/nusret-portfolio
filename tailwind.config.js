export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-40px)' },
      },
      floatX: {
        '0%, 100%': { transform: 'translateX(0px)' },
        '50%': { transform: 'translateX(40px)' },
      },
      floatXY: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '25%': { transform: 'translate(20px, -20px)' },
        '50%': { transform: 'translate(-20px, -40px)' },
        '75%': { transform: 'translate(-40px, 20px)' },
      },
      scalePulse: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.15)' },
      },
    },
    animation: {
      'float': 'float 3s ease-in-out infinite',
      'float-x': 'floatX 4s ease-in-out infinite',
      'float-xy': 'floatXY 5s ease-in-out infinite',
      'scale-pulse': 'scalePulse 3.5s ease-in-out infinite',
    },
    
  },
  plugins: [],
};

