import { ApiRes } from '@/types/data'
import { Profile } from '@/types/data'
import request from '@/utils/request'
import { defineStore } from 'pinia'

export default defineStore({
  id: 'user',
  // 状态
  state: () => ({
    // 用户信息
    profile: {} as Profile,
  }),
  // 方法
  actions: {
    // 用户名和密码登录
    async login(data:{account: string, password: string}) {
      const res = await request.post<ApiRes<Profile>>('/login', data)
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
    },
  },
})