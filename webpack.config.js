const path = require('path');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(njk|nunjucks)$/,
        loader: 'nunjucks-loader'
      }
    ]
  },
  plugins: [
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: './src/views/index.njk',
          to: 'index.html'
        }
      ]
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
