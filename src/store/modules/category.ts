import { ApiRes, CategoryItem, TopCategory } from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'

import { top } from '../constants'
const topCategoryList = top.map( item => ( { id: item, name: item } ) )
export default defineStore('category', {
  state: () => ({
    list: topCategoryList as CategoryItem[],
    topCategory: {} as TopCategory,
  }),
  actions: {
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      // console.log(res)
      this.list = res.data.result
    },
      // 省略其他...
    async getTopCategory(id: string) {
      const res = await request.get<ApiRes<TopCategory>>('/category', {
        params: {
          id,
        },
      })
      this.topCategory = res.data.result
    },
  }
})