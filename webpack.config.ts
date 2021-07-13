import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
    entry: "./src/index.tsx",
    mode: "development",
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(ts|js)x?$/,
                use: {
                    loader: "babel-loader",
                    options: { babelrc: true }
                }
            },
            {
                exclude: /node_modules/,
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index.js"
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
            eslint: {
                files: "./src/**/*",
            },
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: false,
        hot: true,
        inline: true,
        overlay: true,
        port: 9999
    }
};

export default config;
