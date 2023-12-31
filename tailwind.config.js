module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{js,jsx,ts,tsx}",
        "./src/public/index.html"],
    safelist: [
        'h-full',
        'w-full',
        'pb-full',
        'gap-0',
        'auto-cols-auto',
        {pattern: /^grid-cols-/},
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                'full': '100%',
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}