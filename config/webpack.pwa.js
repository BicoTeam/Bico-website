const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'Bico',
      short_name: 'Bico',
      description: 'Everything you need for a successful ICO in the first ICO funded book',
      orientation: "portrait",
      display: "standalone",
      start_url: ".",
      background_color: '#4848B4',
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        },
      ]
    })
  ]
});
