const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    devtool: isProduction ? 'source-map' : null,
    entry: {
        index: path.join(__dirname, 'src', 'js', 'index'),
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        publicPath: isProduction ? '../' : '/dot-portal/assets/',
        filename: 'js/[name].js',
    },
    resolve: {
        extensions: ['.json', '.js'],
        modules: ['node_modules'],
    },
    plugins: [
        isProduction &&
            new MiniCssExtractPlugin({
                filename: 'css/styles.css',
            }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/img',
                    to: 'img',
                },
            ],
        }),
    ].filter(Boolean),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'entry',
                                    corejs: '3',
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions',
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                includePaths: ['src/scss'],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|ico|xml)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    optimization: isProduction
        ? {
              minimize: true,
              minimizer: [
                  new TerserPlugin({
                      terserOptions: {
                          format: {
                              comments: false,
                          },
                      },
                  }),
              ],
          }
        : {},
};
