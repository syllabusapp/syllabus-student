module.exports = {
  entry: './source/assets/javascripts/application.js',
  output: {
    path: '/build',
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
