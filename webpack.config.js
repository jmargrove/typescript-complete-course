module.exports = {
    entry: "./library/app.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.ts/,
            loader: "ts-loader"
        }]
    }
}