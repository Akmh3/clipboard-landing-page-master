/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        StrongCyan: "hsl(171, 66%, 44%)",
        LightBlue: "hsl(233, 100%, 69%)",
        DarkGrayishBlue: "hsl(210, 10%, 33%)",
        GrayishBlue: "hsl(201, 11%, 66%)",
      },
      backgroundImage: {
        desktop: "url('/images/bg-header-desktop.png')",
        mobile: "url('/images/bg-header-mobile.png')",
      },
      fontFamily: {
        Body: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [],
};



