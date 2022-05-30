const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://152.136.125.67:8888',
              // 允许跨域
              changeOrigin: true,
              ws: true,
              pathRewrite: {
                  '^/api': '/api'
              }
          }
      }
  }
}