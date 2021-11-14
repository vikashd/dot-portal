const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
    parser: "postcss-scss",
    plugins: [
        require("autoprefixer"),
        purgecss({
            content: ["./docs/**/*.html"],
        }),
        ...(process.env.JEKYLL_ENV == "production" ? [require("cssnano")({ preset: "default" })] : []),
    ],
};
