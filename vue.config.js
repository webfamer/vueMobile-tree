module.exports = {
  publicPath: './',
  // outputDir: 'dist',
  // assetsDir: 'static',
  lintOnSave: false,
  devServer: {
    proxy: {
        '/api': {
            target: 'http://47.106.181.101:8080',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
},
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