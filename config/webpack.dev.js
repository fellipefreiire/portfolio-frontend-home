// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    hot: true,
    port: 8080,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './HomePage': './src/pages/Home/index.tsx',
      },
      remotes: {
        about: 'about@http://localhost:8081/remoteEntry.js',
        study: 'study@http://localhost:8082/remoteEntry.js',
        projects: 'projects@http://localhost:8083/remoteEntry.js',
        blog: 'blog@http://localhost:8084/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    // new ReactRefreshWebpackPlugin(),
  ],
}
