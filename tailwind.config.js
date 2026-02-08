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
            animation: {
                'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
