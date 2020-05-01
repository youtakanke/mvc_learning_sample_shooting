const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // alias: {
    //   'vue$': 'vue/dist/vue.common.js'
    // },
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3333
  }
};