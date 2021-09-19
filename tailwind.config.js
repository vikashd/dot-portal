module.exports = {
    purge: ["./_includes/**/*.html", "./_layouts/**/*.html", "./_posts/*.md", "./*.html"],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ["Roboto", "san-serif"],
            serif: ["Roboto Slab", "serif"],
        },
        colors: {
            gray: {
                light: "#f6f6f6",
                medium: "#e4e3e5",
                mid: "#6b6b6b",
                dark: "#4a4552",
            },
            yellow: {
                DEFAULT: "#ffde00",
            },
        },
        container: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
            },
        },
        extend: {},
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
};
