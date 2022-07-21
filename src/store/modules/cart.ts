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
  getters: {
  // 有效商品列表 
  // 背景业务：有效商品对应的isEffective = true  filter
  effectiveList(): CartItem[] {
    return this.list.filter((item) => item.stock > 0 && item.isEffective)
  },
    // 有效商品总数量
  // 把effctiveList中的每一项的count叠加起来
  effectiveListCounts(): number {
    return this.effectiveList.reduce((sum, item) => sum + item.count, 0)
  },
  // 总钱数  = 所有单项的钱数累加  单项的钱数 = 数量 * 单价
  effectiveListPrice(): string {
    return this.effectiveList
      .reduce((sum, item) => sum + item.count * Number(item.nowPrice), 0)
      .toFixed(2)
  },
  // 是否全选
  isAllSelected(): boolean {
    return (
      this.effectiveList.length !== 0 &&
      this.effectiveList.every((item) => item.selected)
    )
  },
  // 已选择的列表
  selectedList(): CartItem[] {
    return this.effectiveList.filter((item) => item.selected)
  },
  // 已选择的商品总数
  selectedListCounts(): number {
    return this.selectedList.reduce((sum, item) => sum + item.count, 0)
  },
  // 已选择的列表总价
  selectedListPrice(): string {
    return this.selectedList
      .reduce((sum, item) => sum + item.count * Number(item.nowPrice), 0)
      .toFixed(2)
  }
  },
  // 方法
  actions: {
    clearCart() {
      // 退出登录需清空购物车
      this.list = [] as CartItem[];
    },
    // 修改全选或者全不选
    async updateCartAllSelected(isSelected: boolean) {
      await request.put('/member/cart/selected', {
        selected: isSelected,
      })
      // 获取购物车列表
      this.getCartList()
    },
    // 修改购物车商品
    async updateCart(
      skuId: string,
      data: { selected?: boolean; count?: number }
    ) {
      await request.put(`/member/cart/${skuId}`, data)
      // 重新获取最新购物车列表
      this.getCartList()
    },
    // 删除购物车商品
    async delCart(skuIds: string[]) {
      await request.delete('/member/cart', {
        data: { ids: skuIds }
      })
      // 重新获取最新购物车列表
      this.getCartList()
    },
    // 获取购物车列表
    async getCartList() {
      const res = await request.get<ApiRes<CartItem[]>>('/member/cart')
      this.list = res.data.result
    },
    async addCart(data: { skuId: string; count: number }) {
      const res = await request.post<ApiRes<{msg:string}>>('/member/cart', data)
      // console.log(res.data.msg)
      this.getCartList()
      Message.success(res.data.msg)
    }
  },
});

export default useCartStore;