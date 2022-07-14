import { defineStore } from "pinia"
import request from '@/utils/request'
import { ApiRes, BannerItem, GoodItem } from "@/types/data"

export default defineStore('home', {
  state: () => ({
    bannerList: [] as BannerItem[] ,
    newGoodList: [] as GoodItem[]
  }),
  actions: {
    async getBannerList() {
      const res = await request.get< ApiRes< BannerItem[] > >('/home/banner')
      // console.log(res.data.result)
      this.bannerList = res.data.result
    },
    async getNewList() {
      const res = await request.get<ApiRes<GoodItem[]>>('/home/new')
      this.newGoodList = res.data.result
    },
  },
})