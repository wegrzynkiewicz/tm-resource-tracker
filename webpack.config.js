const {resolve} = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const {createShortcut} = require('./src/scripts/helpers/createShortcut');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

async function minifyCSS(data, inputMap) {

    const cleanCSSOptions = {
        sourceMap: false,
        level: {
            1: {
                all: true,
            },
            2: {
                all: true,
            }
        },
    };

    const CleanCSS = require('clean-css');
    const [[filename, input]] = Object.entries(data);
    const minifiedCss = await new CleanCSS(cleanCSSOptions).minify({
        [filename]: {
            styles: input,
            sourceMap: inputMap,
        },
    });

    return {
        css: minifiedCss.styles,
        warnings: minifiedCss.warnings,
    };
}

module.exports = function (env, options = {}) {

    const mode = options.mode || 'development';
    const isProd = mode === 'production';
    const shortcut = createShortcut();

    const cssLoaderOptionsProd = {
        getLocalIdent({resourcePath, resourceQuery}, localIdentName, localName) {
            return shortcut(`${resourcePath}${resourceQuery}--${localName}`);
        },
    };

    const cssLoaderOptionsDev = {
        localIdentName: "[name]__[local]__[hash:4]",
    };

    const cssLoaderOptions = isProd ? cssLoaderOptionsProd : cssLoaderOptionsDev;

    return {
        entry: {
            scripts: [
                './src/scripts/tracker/index.js',
            ],
            prerender: [
                './src/scripts/helpers/prerender.js',
            ],
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: [
                        {
                            loader: 'vue-loader',
                        }
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /\.inline\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    ...cssLoaderOptions,
                                },
                            }
                        },
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name(resourcePath, resourceQuery) {
                                    const query = new URLSearchParams(resourceQuery);
                                    const suffix = query.has('webp') ? '.webp' : '';
                                    return `[name].[contenthash:6].[ext]${suffix}`;
                                },
                                outputPath: 'i',
                            },
                        },
                    ],
                },
                {
                    test: /\.inline.svg$/,
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
                    test: /\.sprite.svg$/,
                    use: [
                        {
                            loader: 'svg-sprite-loader',
                            options: {
                                extract: true,
                                spriteFilename: 'sprite.[contenthash:6].svg',
                            }
                        },
                        {
                            loader: 'svgo-loader',
                        },
                    ],
                },
                {
                    test: /\.js$/,
                    exclude: [
                        /node_modules/,
                        /helpers/,
                    ],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {targets: "defaults"}],
                            ],
                        }
                    }
                }
            ],
        },
        output: {
            path: resolve(__dirname, 'dist'),
            filename: '[name].[contenthash:6].js',
        },
        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin({
                    sourceMap: false,
                    minify: minifyCSS,
                }),
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
        plugins: [
            new CleanWebpackPlugin({}),
            new FaviconsWebpackPlugin({
                cache: true,
                logo: resolve(__dirname, 'src/icons/logo_512.png'),
                publicPath: '',
                prefix: '/tm-resource-tracker/f',
                favicons: {
                    appName: 'TM Resource Tracker',
                    appDescription: 'TM Resource Tracker',
                    appShortName: 'TM Resource Tracker',
                    background: '#000000',
                    developerName: 'Unnamed',
                    developerURL: null,
                    display: 'fullscreen',
                    icons: {
                        android: true,
                        appleIcon: false,
                        appleStartup: false,
                        coast: false,
                        favicons: true,
                        firefox: false,
                        windows: false,
                        yandex: false
                    },
                    loadManifestWithCredentials: false,
                    orientation: 'any',
                    theme_color: '#000000',
                    start_url: '/tm-resource-tracker/index.html',
                }
            }),
            new HtmlWebpackPlugin({
                cache: false,
                inject: 'head',
                publicPath: '',
                scriptLoading: 'defer',
                template: 'src/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:6].css',
            }),
            new PrerenderSPAPlugin({
                staticDir: resolve(__dirname, 'dist'),
                routes: ['/'],
                renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
                    renderAfterDocumentEvent: 'prerender-ready',
                })
            }),
            new SpriteLoaderPlugin({
                extract: true,
            }),
            new VueLoaderPlugin(),
            new ImageminWebpWebpackPlugin({
                config: [{
                    test: /\.conv\.(jpe?g|png)$/,
                    options: {
                        quality: 75,
                        method: 6,
                    }
                }],
                overrideExtension: false,
            }),
        ],
        resolve: {
            extensions: ['.js', '.vue'],
        },
        watchOptions: {
            ignored: ['node_modules/**']
        }
    };
}

