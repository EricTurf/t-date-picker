const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            presets: [
              [
                'env',
                {
                  modules: false,
                  targets: {
                    browsers: ['last 2 versions', 'ie >= 11']
                  }
                }
              ],
              'stage-2',
              'react'
            ]
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};
