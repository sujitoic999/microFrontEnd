const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [

    new ModuleFederationPlugin({
     name: 'products',
     filename: 'remoteEntry.js',
     exposes: {
      './ProductsIndex': './src/index.js'
     }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // whatever js file is coming out of our webpack process that will be secretly injected into index.html to show on browser without adding script tag this is handled by html webpack plugin
    }),
  ],
};
