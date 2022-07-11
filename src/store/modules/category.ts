import request from '@/utils/request'
import { defineStore } from 'pinia'
export default defineStore('category', {
  state: () => ({
    money: 100, // 测试数据，等会删掉
  }),
  actions: {
    async getAllCategory() {
      const res = await request.get('/home/category/head')
      console.log(res)
    },
  }
})