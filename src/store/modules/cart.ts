import Message from "@/components/XtxMessage";
import { ApiRes, CartItem } from "@/types/data";
import request from "@/utils/request";
import { defineStore } from "pinia";

const useCartStore = defineStore('cart', {
  // 状态
  state() {
    return {
    // 购物车列表
    list: [] as CartItem[]
    }
  },
  // 计算
  getters: {},
  // 方法
  actions: {
        // 获取购物车列表
    async getCartList() {
      const res = await request.get<ApiRes<CartItem[]>>('/member/cart')
      this.list = res.data.result
    },
    async addCart(data: { skuId: string; count: number }) {
      const res = await request.post<ApiRes<{msg:string}>>('/member/cart', data)
      // console.log(res.data.msg)
      Message.success(res.data.msg)
    }
  },
});

export default useCartStore;