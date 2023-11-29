// import withMT from "@material-tailwind/react/utils/withMT";

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        khula: ["Khula", "sans-serif"],
        exo: ["Exo", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        fatface: ["Abril Fatface", "cursive"],
      },
      colors: {
        nav: "#f3f7f0",
        amBlue: "#093f68", // Changed from am-blue to amBlue
        amYellow: "#ffd020",
        amCard: "#DFEAEF",
        amGray: "#415473",
        bg: "#f8fafc",
      }, 
      boxShadow: {
        button: ["0 2px 8px rgba(0, 0, 0, 0.4)"],
      },
    },
  },
  plugins: [require("@material-tailwind/react/utils/withMT")],
};
