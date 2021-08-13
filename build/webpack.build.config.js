const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WebpackBar = require('webpackbar');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../packages/star-ui/index.ts'),
  plugins: [
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
    }),
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: '🚚  Star UI Vue Tools',
      color: '#5680F9',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.min.js',
    library: 'StarUI',
    libraryTarget: 'umd',
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.js', '.jsx', '.vue', '.md', '.json', '.ts', '.tsx'],
    alias: {
      '@': process.cwd(),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
}