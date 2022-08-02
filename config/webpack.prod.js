const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      remotes: {
        about: `about@${domain}/about/remoteEntry.js`,
        study: `study@${domain}/study/remoteEntry.js`,
        projects: `projects@${domain}/projects/remoteEntry.js`,
        blog: `blog@${domain}/blog/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}
