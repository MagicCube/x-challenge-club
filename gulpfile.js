"use strict";

const gulp = require("gulp");
const gutil = require("gulp-util");
const rimraf = require("rimraf");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

gulp.task("default", [ "dist" ]);


gulp.task("clean", cb => {
    rimraf("./assets", cb);
});


gulp.task("dist", [ "clean" ], cb => {
    const config = require("./webpack.config.js");
    config.output.publicPath = "/x-challenge-club/assets/";
    config.plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    );
    webpack(config, (err, stats) => {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString());
    });
});


gulp.task("dev", [ "clean" ], cb => {
    const config = require("./webpack.config.js");
    const compiler = webpack(Object.assign({
        devtool: "cheap-module-source-map"
    }, config));

    new WebpackDevServer(compiler, {
        publicPath: config.output.publicPath
    }).listen(8080, "0.0.0.0", err => {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        const uri = "http://localhost:8080/";
        gutil.log("[webpack-dev-server]", uri);
    });
});

gulp.task("run", [ "clean" ], cb => {
    const config = require("./webpack.config.js");
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    );
    const compiler = webpack(config);
    new WebpackDevServer(compiler, {
        publicPath: config.output.publicPath
    }).listen(8080, "0.0.0.0", err => {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        const uri = "http://localhost:8080/";
        gutil.log("[webpack-dev-server]", uri);
    });
});
