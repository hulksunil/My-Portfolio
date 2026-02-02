/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    important: true,
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#0ea5e9",
                "background-light": "#f8fafc",
                "background-dark": "#020617",
            },
            fontFamily: {
                display: ["Space Grotesk", "sans-serif"],
                sans: ["Plus Jakarta Sans", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
                '2xl': '1.5rem',
            },
        },
    },
    plugins: [],
}
