
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "other-sm": { 'min': '340px' },
          "other-md": { 'min': '1200px' },
        },
        colors: {
          darkbg: "#1e293b",
        }
      },
    },
    plugins: [],
  }