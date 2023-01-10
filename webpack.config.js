const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
        library: pkg.name,
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"]
            }
        ]
    },
    target: 'node'
};