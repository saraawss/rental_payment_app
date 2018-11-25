const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
	    historyApiFallback: true,
  },
  plugins: [htmlWebpackPlugin],
  entry: [
	  "babel-polyfill",
	  "./src/index.js"
  ],
  output: {
      publicPath: '/'
  }
};