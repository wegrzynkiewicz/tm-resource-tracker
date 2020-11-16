const {resolve} = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    entry: {
        main: [
            './src/index.js',
            './src/styles/main.scss',
        ]
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/',
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash:6].[ext]',
                            outputPath: 'i',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            encoding: false,
                            generator: (content) => svgToMiniDataURI(content.toString()),
                        },
                    },
                    {
                        loader: 'svgo-loader',
                    },
                ],
            },
            {
                test: /\.ejs$/,
                use: [
                    {
                        loader: 'render-template-loader',
                        options: {
                            engine: 'ejs',
                            locals: {
                                resources: {
                                    gold: {},
                                    steel: {},
                                    titan: {},
                                    plant: {},
                                    energy: {},
                                    warm: {},
                                }
                            },
                            engineOptions: function (info) {
                                return {
                                    filename: info.filename
                                }
                            }
                        }
                    }
                ]
            }
        ],
    },
    output: {
        path: resolve(__dirname, 'docs'),
    },
    plugins: [
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({
            cache: false,
            inject: 'body',
            publicPath: '/',
            scriptLoading: 'defer',
            template: 'src/index.ejs',
        }),
        new MiniCssExtractPlugin(),
        new WebpackPwaManifest({
            background_color: '#000000',
            publicPath: '/',
            short_name: 'TM Resource Tracker',
            name: 'TM Resource Tracker',
            start_url: '/index.html',
            crossorigin: 'anonymous',
            fingerprints: true,
            icons: [
                // {
                //     src: resolve(__dirname, 'src/icons/512.png'),
                //     sizes: [32, 96, 128, 192, 256, 384, 512],
                //     destination: '/i'
                // }
            ],
            display: 'fullscreen',
            orientation: 'portrait-primary'
        }),
    ],
    watchOptions: {
        ignored: ['node_modules/**']
    }
};
