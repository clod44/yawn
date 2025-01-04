/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // This allows you to toggle dark mode by adding a 'dark' class
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
        },
    },
    plugins: [
        require("tailwindcss-animate"),
    ],
}

