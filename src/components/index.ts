// 统一的注册所有的全局组件
import XtxSkeleton from '@/components/XtxSkeleton/XtxSkeleton.vue'
import carousel from './Carousel/index.vue'
// App 是在vue库中定义好的类型
import { App } from 'vue'
export default {
  install (app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('carousel', carousel)
  }
}