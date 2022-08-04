const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/home/latest/',
  },
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      remotes: {
        about: `about@${domain}/about/latest/remoteEntry.js`,
        study: `study@${domain}/study/latest/remoteEntry.js`,
        projects: `projects@${domain}/projects/latest/remoteEntry.js`,
        blog: `blog@${domain}/blog/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}
