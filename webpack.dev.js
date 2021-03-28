const { merge, } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: "./dist",
        overlay: true,
        open: true,
        compress: true,
    },
});