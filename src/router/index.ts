import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
import Home from '@/views/Home/Home.vue'
export default createRouter({
  history: createWebHashHistory() , 
  routes:[
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', // 默认显示的应用
          component: Home 
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/Login.vue')
    }
  ]
})