const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve("./src"),
    entry: {
        app: [ "./app.jsx", "./res/index.less" ]
    },
    output: {
        path: path.resolve("./assets"),
        publicPath: "/assets",
        filename: "[name].js",
    },
    devServer: {
        contentBase: path.resolve("./")
    },
    devtool: "cheap-module-source-map",
    module: {
        loaders: [
             {
                 test: /\.js|jsx$/,
                 exclude: /(node_modules|bower_components)/,
                 loader: "babel"
             },
             {
                 test: /\.less$/,
                 loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
             }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./res/[name].css")
    ]
};
