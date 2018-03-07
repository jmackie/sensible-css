module.exports = {
    syntax: 'postcss-scss',
    plugins: {
        'postcss-import': {
            root: 'src',
        },
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
        cssnano: {
            autoprefixer: false, // handled by cssnext
        },
    },
};
