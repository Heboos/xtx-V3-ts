import { createApp } from 'vue'
import App from './App.vue'
// 重置样式:  让html标签在浏览器中有相同的样式
import 'normalize.css'
// 导入全局样式
import '@/assets/styles/common.less'
createApp(App).mount('#app')
