const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: ["@babel/polyfill", "./src/entry-js.js"],
    devtool: "source-map",
    mode: 'production',
    output: {
        path: path.join(__dirname, "/public/enviroweather/"),
        publicPath: "/public/enviroweather/",
        filename: "bundle.js",
        chunkFilename: '[name].chunk.js',
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: ["react-html-attrs", "transform-class-properties"],
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                exclude: [
                    path.join(__dirname, "node_modules/"),
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    'resolve-url-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        limit: 500,
                        name: "/images/[name].[ext]"
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        limit: 500,
                        name: "/fonts/[name].[ext]"
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "bower_components",
            "node_modules",
        ],
        extensions: [
            ".js",
            ".jsx",
            ".style"
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/bundle.css"
        }),
        new CopyWebpackPlugin([
            { from: "./src/meta", to: "./meta" },
            { from: "./Views/index.html", to: "./" },
        ])
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};