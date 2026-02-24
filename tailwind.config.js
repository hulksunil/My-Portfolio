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
                primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
                "primary-hover": "rgb(var(--color-primary-hover-rgb) / <alpha-value>)",
                accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
                background: "rgb(var(--color-bg-rgb) / <alpha-value>)",
                surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
                text: "rgb(var(--color-text-rgb) / <alpha-value>)",
                muted: "rgb(var(--color-text-muted-rgb) / <alpha-value>)",
                "background-light": "rgb(var(--color-bg-light-rgb) / <alpha-value>)",
                "background-dark": "rgb(var(--color-bg-dark-rgb) / <alpha-value>)",
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
