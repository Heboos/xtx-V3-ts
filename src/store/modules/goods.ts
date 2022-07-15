import { defineStore } from "pinia";
import { ApiRes, GoodsInfo } from '@/types/data'
import request from '@/utils/request'
export default defineStore('goods', {
  state: () => {
    return {
    // 商品详细信息
    info: {} as GoodsInfo
    }
  },
  actions: {
    async getGoodsInfo (id: string) {
      const res = await request.get<ApiRes<GoodsInfo>>('/goods', {
        params: {
          id
        }
      })
      this.info = res.data.result
    }
  }
})