const webpack = require('webpack')
module.exports = {
  publicPath: './',
  // outputDir: 'dist',
  // assetsDir: 'static',
  lintOnSave: false,
  devServer: {
    proxy: {
        '/api': {
            target: 'http://121.36.165.217:8080',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
},
chainWebpack: config => {
  config.plugin('provide').use(webpack.ProvidePlugin, [{
    $: 'jquery',
    jquery: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  }])},
    css: {
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 74.9
              })
            ]
          }
        }
    }
}