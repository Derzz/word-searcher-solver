module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{js,jsx,ts,tsx}",
        "./src/public/index.html"],
    safelist: [
        {pattern: /^grid-cols-/},
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}