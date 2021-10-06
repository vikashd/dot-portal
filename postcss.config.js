module.exports = {
    plugins: [
        // require("postcss-import"),
        require("autoprefixer"),
        ...(process.env.JEKYLL_ENV == "production" ? [require("cssnano")({ preset: "default" })] : []),
    ],
};
