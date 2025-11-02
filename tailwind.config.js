/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js}",  // Scan all HTML & JS files in src/
      "./*.html"               // ✅ Also scan root-level HTML files like 1-index.html
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  