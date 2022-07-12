import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 这里使用nodejs的模块，可能会报错，需要安装node的类型声明文件
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
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
