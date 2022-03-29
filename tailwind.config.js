module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            black: "#121616",
            yellow: "#f99c39",
            white: "#f5f5f5",
            teal: "#2ab7ab",
            darkTeal: "#3f8d8d"
        },
        fontFamily: {
            title: ['Fira Sans Extra Condensed', 'sans-serif'],
            subTitle: ['Podkova', 'serif'],
            text: ['Hind Madurai', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
