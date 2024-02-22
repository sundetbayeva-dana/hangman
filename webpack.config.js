const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
    const isDev = env.mode === 'development'
    return {
        mode: env.mode ?? 'development',
        entry: {
            index: path.resolve(__dirname, "src", "scripts", "index.js")
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            clean: true,
            filename: "[name].[contenthash].js"
        },
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(?:js|mjs|cjs)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: "defaults" }]
                            ]
                        }
                    }
                },
                {
                    test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                    type: 'asset/resource'
                },
            ]
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })],
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            static: {
                directory: path.join(__dirname, 'public'),
            },
            compress: true,
            port: 3000,
        } : undefined,
    }
};
