import { App } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import defaultImg from '@/assets/images/200.png'
export default {
  install(app: App) {
    // 自定义指令
    // <img :src="item.src" alt="" />
    // <img v-lazy="item.src" alt="" />
    app.directive('lazy', {
      mounted(el, { value }) {
        el.src = defaultImg
        // console.log(el.src)
        
        // 如果图片加载失败，显示默认的图片
            el.onerror = function () {
              el.src =  defaultImg
            }

        // 图片的懒加载逻辑
        // 参数1：回调函数
        // 参数2：可选的配置
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
        // console.log(isIntersecting, el.src)

          if (isIntersecting) {
            // 停止监听
            stop()
            // 给el元素设置src属性
            // value = '123.jpg'
            el.src = value
            
          }
        })
      }
    })
  }
}