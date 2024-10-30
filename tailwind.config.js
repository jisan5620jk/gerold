/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Sora: ['Sora', 'sans-serif'],
        Russo: ['Russo One', 'sans-serif'],
      },
      colors: {
        PrimaryColor: ['#8750f7'],
        PrimaryColor2: ['#9b8dff'],
        Secondarycolor: ['#2a1454'],
        HeadingColor: ['#8750f7'],
        TextDark: ['#050709'],
        TextColor: ['#dddddd'],
        TextLight: ['#140c1c'],
        TextGrey: ['#747779'],
        TextGrey2: ['#636363'],
        BodyBg: ['#0f0715'],
        BodyBlack: ['#0b0410'],
        BodyBlack2: ['#050709'],
        BodyBgLight: ['#f6f3fc'],
        BodyBg2: ['#050709'],
        BodyBg3: ['#140c1c'],
        BodyBg4: ['#10171c'],
        BodyBg5: ['#15091d'],
        BorderColor: ['#22272c'],
        BorderGrey: ['#d9d9d9'],
        BorderGrey2: ['#dddddd'],
        BorderGrey3: ['#636363'],
        BorderGrey4: ['#747779'],
        BorderColor2: ['#ffffff33'],
        BorderColor3: ['#1c20491a'],
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1600px ',
        '4xl': '1700px',
        // 1400-1600, 1300-1399,1200-1299,992-1199(1170),768-991,600-767,480-599,320-479
      },
      keyframes: {
        movebtn: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        dance7: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(320px)' },
        },
        dance3: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(-35px)' },
        },
        shrink: {
          '0%': { transform: 'translateY(20px) translateX(-50%)' },
          '50%': { transform: 'translateY(-20px) translateX(-50%)' },
          '100%': { transform: 'translateY(0px) translateX(-50%)' },
        },
        Dance: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(35px)' },
        },
        dance4: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(570px)' },
        },
        dance5: {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(330px)' },
        },
        rotateme: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        dance2: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': {
            transform: 'translate3d(25px, -25px, 0)',
          },
          '100%': { transform: 'translate3d(0, -25px, 25px)' },
        },
        headerSlideDown: {
          '0%': { margin: '-150px 0 0' },
          '100%': { margin: '0' },
        },
        zoomInOut: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'scale(1.2)' },
        },
        zoomInOut2: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.3)' },
        },
        swing: {
          '0%': { transform: 'rotate(-25deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'translateY(-50px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotational: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rotateX: {
          '0%': { transform: 'rotate3d(0, 0, 0)' },
          '50%': { transform: 'rotate3d(0, 1, 0, 180deg)' },
          '100%': { transform: 'rotate3d(0, 1, 0, 360deg)' },
        },
        Pulse: {
          '0%': {
            boxShadow:
              '0 0 0 0 rgba(255, 255, 255, 0.7), 0 0 0 0 rgba(255, 255, 255, 0.7)',
          },
          '40%': {
            boxShadow:
              '0 0 0 50px rgba(255, 255, 255, 0), 0 0 0 0 rgba(255, 255, 255, 0.7)',
          },
          '80%': {
            boxShadow:
              '0 0 0 50px rgba(255, 255, 255, 0), 0 0 0 30px rgba(255, 255, 255, 0)',
          },
          '100%': {
            boxShadow:
              '0 0 0 0 rgba(255, 255, 255, 0), 0 0 0 30px rgba(255, 255, 255, 0)',
          },
        },
        bounceInDown: {
          '0%': { opacity: '0', transform: 'translateY(-2000px)' },
          '60%': { opacity: '1', transform: 'translateY(0px)' },
          '80%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceInUp: {
          '0%, 10%, 35%, 50%, to': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0px, 0)',
          },
          '10%': {
            transform: 'translate3d(0, 0px, 0)',
          },
          '35%': {
            transform: 'translate3d(0, -10px, 0)',
          },
          '50%': {
            transform: 'translate3d(0, 2px, 0)',
          },
          '80%': {
            transform: 'translate3d(0, -90px, 0)',
          },
          to: {
            transform: 'translate3d(0, -3000px, 0)',
          },
        },
      },
      animation: {
        movebtn: 'movebtn 3s linear infinite',
        wiggle: 'wiggle 5s ease-in-out infinite',
        rotational: 'rotational 10s linear infinite',
        rotate: 'rotate 20s linear infinite',
        rotateX: 'rotateX 5s linear infinite',
        zoomInOut: 'zoomInOut 2s alternate infinite',
        zoomInOut2: 'zoomInOut2 2s alternate infinite',
        dance2: 'dance2 3s alternate infinite',
        dance3: 'dance3 2s alternate infinite',
        dance4: 'dance4 10s alternate infinite',
        dance5: 'dance5 10s alternate infinite',
        dance7: 'dance7 4s alternate infinite',
        Pulse: 'Pulse 3s linear infinite',
        swing: 'swing 1s ease-in-out 1s forwards infinite alternate',
        headerSlideDown:
          '500ms ease-in-out 0s normal none 1 running headerSlideDown',
        bounceInDown: 'bounceInDown 1s both',
        bounceInUp: 'bounceInUp 1s forwards',
      },
      boxShadow: {
        cases: '0px 10px 15px rgba(187, 187, 187, 0.2)',
        shade: '0px 0px 20px rgba(187, 187, 187, 0.2)',
        shades: '0 0 30px rgba(135, 80, 247, 0.2)',
        shadow: '0px 30px 50px rgba(152,178,240,0.5)',
      },
      mixBlendMode: {
        difference: 'difference',
      },
      letterSpacing: {
        custom: '1px',
        custom2: '1',
      },
      textDecorationThickness: {
        1: '1px',
      },
      lineHeight: {},
    },
  },
  plugins: [],
};
