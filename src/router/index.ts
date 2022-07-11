import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
export default createRouter({
  history: createWebHashHistory() , 
  routes:[
    {
      path: '/',
      component: Layout
    },
    {
      path: '/login',
      component: () => import('@/views/Login/Login.vue')
    }
  ]
})