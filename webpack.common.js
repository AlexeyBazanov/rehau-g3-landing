const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin, } = require("clean-webpack-plugin");

const config = {
    entry: {
        index: "./scripts/index.js",
        passport: "./scripts/passport.js",
    },
    output: {
        filename: "[name].[fullhash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        // publicPath: "/rehau-g3-landing/",
    },
    plugins: [
        new CleanWebpackPlugin(),
        // Главная страница
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/html/index.ejs"),
            filename: "./index.html",
            chunks: ["index",],
            inject: true,
        }),
        // Страница паспорта окна
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/html/passport.ejs"),
            filename: "./passport.html",
            chunks: ["passport",],
            inject: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
            },
            { 
                test: /\.ejs$/i, 
                use: [ 
                    { 
                        loader: "ejs-easy-loader",
                    }, 
                ], 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Support old browsers
                    "postcss-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name() {
                        if (process.env.NODE_ENV === "development") {
                            return "[path][name].[ext]";
                        }
                        return "[contenthash].[ext]";
                    },
                    outputPath: "images/",
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/",
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = config;