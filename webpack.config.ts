import dotenv from "dotenv";
import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
dotenv.config();

const config = {
  entry: "./src/client/index.tsx",
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
      {
        exclude: /node_modules/,
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "./images/"
            }
          },
        ],
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
        files: "./src/client/**/*.{ts,tsx}",
      },
    }),
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, "src", "client", "favicon.ico"),
      template: path.join(__dirname, "src", "client", "index.html"),
      title: "Template app"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: false,
    hot: true,
    inline: true,
    overlay: true,
    port: process.env.CLIENT_PORT,
    proxy: {
      "/api": {
        target: `http://localhost:${process.env.SERVER_PORT}`
      }
    }
  }
};

export default config;
