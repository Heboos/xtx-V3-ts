import Message from "@/components/XtxMessage";
import { ApiRes, CartItem } from "@/types/data";
import request from "@/utils/request";
import { defineStore } from "pinia";
import user from "./user";

const useCartStore = defineStore('cart', {

  // 开启持久化，采用默认设置
  // persist: true,  
  persist: {
    key: 'rabbit-cart-76'
  },
  // 状态
  state() {
    return {
    // 购物车列表
    list: [] as CartItem[]
    }
  },
  // 计算
  getters: {
  // 是否登录
  isLogin(): boolean {
    const userInfo = user()
    return Boolean(userInfo.profile.token)
  },
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
      if(this.isLogin){
        await request.put('/member/cart/selected', {
          selected: isSelected,
        })
        // 获取购物车列表
        this.getCartList()
      } else {
        // 没有登录的情况下
        this.effectiveList.forEach(it => it.selected = isSelected)
      }
    },
    // 修改购物车商品
    async updateCart(
      skuId: string,
      data: { selected?: boolean; count?: number }
    ) {
      if(this.isLogin) {
        await request.put(`/member/cart/${skuId}`, data)
        // 重新获取最新购物车列表
        this.getCartList()
      } else {
        const g = this.effectiveList.find(it => it.skuId === skuId)
        if(!g){return}
        // 如果当前改的是 是否选中
        if(data.selected !== undefined){
          g.selected = data.selected
        }
        if(data.count !== undefined) {
          g.count = data.count
        }
      }
    },
    // 删除购物车商品
    async delCart(skuIds: string[]) {
      if(this.isLogin) {
        await request.delete('/member/cart', {
          data: { ids: skuIds }
        })
        // 重新获取最新购物车列表
        this.getCartList()
      } else {
        this.list = this.list.filter(it => !skuIds.includes(it.skuId))
      }
    },
    // 获取购物车列表
    async getCartList() {
      if(this.isLogin) {
        const res = await request.get<ApiRes<CartItem[]>>('/member/cart')
        this.list = res.data.result
      } else {
        console.log('没有登录，从本地取数据, 更新库存，价格')
        this.effectiveList.forEach(async (cartItem) => {
          // 根据每一件商品的skuID去服务器查询
          const skuId = cartItem.skuId;
          // 根据 skuId 获取最新商品信息
          const res = await request.get<ApiRes<CartItem>>(
            `/goods/stock/${skuId}`
          )
          console.log('根据每一件商品的skuID', res)
          // 保存最新商品信息
          const lastCartInfo = res.data.result
          // 更新商品现价
          cartItem.nowPrice = lastCartInfo.nowPrice
          // 更新商品库存
          cartItem.stock = lastCartInfo.stock
          // 更新商品是否有效
          cartItem.isEffective = lastCartInfo.isEffective
        })
        
      }
    },
    async addCart(data: CartItem) {
      if(this.isLogin) {
        const res = await request.post<ApiRes<{msg:string}>>('/member/cart', data)
        // console.log(res.data.msg)
        this.getCartList()
        Message.success(res.data.msg)
      } else {
        const num = this.list.find(it => it.skuId === data.skuId)
        if(num) {
          num.count += data.count
        } else {
          this.list.push(data)
        }
      }
    }
  },
});

export default useCartStore;