const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    context: path.resolve("./src"),
    entry: {
        vendor: [ "react", "react-dom", "react-router", "react-tap-event-plugin", "material-ui", "mockjs", "nuka-carousel" ],
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
             },
             {
                 test: /\.jpg|png$/i,
                 loader: "file"
             },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity
        }),
        new ExtractTextPlugin("./res/[name].css")
    ]
};
