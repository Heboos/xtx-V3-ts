import { createApp } from 'vue'
import App from './App.vue'
// 重置样式:  让html标签在浏览器中有相同的样式
import 'normalize.css'
// 导入全局样式
import '@/assets/styles/common.less'
import router from '@/router/index'
// 导入pinia
import { createPinia } from 'pinia'
import XtxUI from './components/index'
const app = createApp(App)
// 路由
app.use(router)
// 全局组件
app.use(XtxUI)
// pinia
app.use(createPinia())
app.mount('#app')
