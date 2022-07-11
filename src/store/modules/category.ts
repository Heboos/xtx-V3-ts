import { ApiRes, CategoryItem } from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'
export default defineStore('category', {
  state: () => ({
    list: [] as CategoryItem[]
  }),
  actions: {
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      // console.log(res)
      this.list = res.data.result
    },
  }
})