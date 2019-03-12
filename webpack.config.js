const path = require ('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        // Handle Css and Sass files
        test: /\.(sa|sc|c)ss$/,
        use: [
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}