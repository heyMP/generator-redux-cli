const path =  require('path');

module.exports = {
  entry: "./redux/app.js",
  output: {
      path: path.join(__dirname, '/<%= output %>'),
      filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};