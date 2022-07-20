import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 这里使用nodejs的模块，可能会报错，需要安装node的类型声明文件
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  // 配置开发服务器
  server: {
    // QQ三方登录的回调uri为：http://www.corho.com:8080/#/login/callback
    // vite 中配置： www.corho.com:8080
    host: "www.corho.com",
    port: 8080,
    // 其他有价值的配置项
    open: true, // 帮我们打开浏览器
    cors: true, // 允许开发时 ajax 跨域
  },
  plugins: [vue({
    reactivityTransform: true
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})
