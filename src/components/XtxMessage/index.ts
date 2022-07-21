import { h, render } from 'vue'
import XtxMessage from './XtxMessage.vue'
type Props = {
  type: 'success' | 'error' | 'warning'
  text: string
}
let timer =-1
const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-container')
document.body.appendChild(div)
export default function Message({ type, text }: Props) {
  const vNode = h(XtxMessage, { type, text })
  // 把虚拟dom放入上面自定义的容器里面
  render(vNode, div)
  clearTimeout(timer)
  timer = window.setTimeout(() => {
    // 从dom上删除
    render(null,div)
  },2000)
}
Message.error = function (text: string) {
  Message({
    type: 'error',
    text,
  })
}
Message.success = function (text: string) {
  Message({
    type: 'success',
    text,
  })
}
Message.warning = function (text: string) {
  Message({
    type: 'warning',
    text,
  })
}