const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public/dist')
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      }
    ],
  },
};
