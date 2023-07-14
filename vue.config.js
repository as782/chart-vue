const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //配置代理服务器解决跨域问题
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://192.168.31.168:9898',
        target: 'http://114.132.124.179:9898',
        changeOrigin: true,
        secure: false, //http ==> false 
        pathRewrite: {
          '^/api': ''   //请求的时候使用这个api就可以
        }
      }
    }
  },
})
