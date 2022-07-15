import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
import Home from '@/views/Home/Home.vue'
export default createRouter({
  history: createWebHashHistory() , 
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
  routes:[
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', // 默认显示的应用
          component: Home 
        },
        {
          path:'category/:id',
          component: () => import('@/views/Category/Category.vue')
        },
        { 
          path: '/goods/:id', 
          component: () => import('@/views/Goods/Goods.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/Login.vue')
    }
  ]
})