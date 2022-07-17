// 统一的注册所有的全局组件
import XtxSkeleton from '@/components/XtxSkeleton/XtxSkeleton.vue'
import XtxCarousel from './Carousel/XtxCarousel.vue'
import XtxMore from './XtxMore/XtxMore.vue'
import XtxBread from './XtxBread/XtxBread.vue'
import XtxBreadItem from './XtxBread/XtxBreadItem.vue'
import XtxNumber from './XtxNumber/XtxNumber.vue'
import XtxButton from './XtxButton/XtxButton.vue'
// App 是在vue库中定义好的类型
import { App } from 'vue'
export default {
  install (app: App) {
    app.component('XtxSkeleton', XtxSkeleton)
    app.component('XtxCarousel', XtxCarousel)
    app.component('XtxMore', XtxMore)
    app.component('XtxBread', XtxBread)
    app.component('XtxBreadItem', XtxBreadItem)
    app.component('XtxNumber', XtxNumber)
    app.component('XtxButton', XtxButton)
  }

  
}