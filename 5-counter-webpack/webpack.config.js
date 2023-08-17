const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devServer = {
      static: {
        directory: path.join(__dirname, 'public')
      },
      compress: false,
      port: 3000,
      open: true,
      client: {
        overlay: false
      }
    }

    config.optimization.minimize = false
  }

  return config
}
