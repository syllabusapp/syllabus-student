module.exports = {
  entry: './source/assets/javascripts/application.js',
  output: {
    path: __dirname,
    filename: 'application.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
