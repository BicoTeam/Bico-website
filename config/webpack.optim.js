const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;
const path = require('path');

module.exports = {
  entry: './config/optimization-fix/do-not-delete.js',
  output: {
    filename: 'optimization-fix-this-file-is-ignored.js'
  },
  plugins: [
    new CriticalPlugin({
      base: path.resolve('_layouts'),
      src: 'default.html',
      inline: true,
      minify: true,
      dest: '_layouts/default.html',
      css: ['_site/assets/app.css']
    })
  ]
}