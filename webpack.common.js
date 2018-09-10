const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            { 
                                loader: 'css-loader',
                                options: {
                                    minimize: true
                                }
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    }
                )
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        }
                    }
                ]
            },
            // {
            //     test: /\.(eot|svg|ttf|woff|otf?)(\?[a-z0-9]+)?$/,
            //     exclude: [/assets/],
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 name: "[name].[ext]",
            //                 output: 'fonts/',
            //                 publicPath: '../'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.(mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        }  
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/style.css', {
            filename: 'style-[hash].css',
            disable: false,
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: "public/favicon.ico"
        })
    ],
};