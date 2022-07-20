import { ApiRes } from '@/types/data'
import { Profile } from '@/types/data'
import { getProfile, removeProfile, setProfile } from '@/utils/profile'
import request from '@/utils/request'
import { defineStore } from 'pinia'

export default defineStore({
  id: 'user',
  // 状态
  state: () => ({
    // 用户信息
    profile: getProfile() || {} as Profile,
  }),
  // 方法
  actions: {
    // 用户名和密码登录
    async login(data:{account: string, password: string}) {
      const res = await request.post<ApiRes<Profile>>('/login', data)
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
      setProfile(res.data.result)
    },
    async sendMobileMsg(mobile: string) {
      const res = await request.get('/login/code', {
        params: {
          mobile
        }
      })
      console.log(res.data)
      
    },
    async mobileLogin(mobile: string, code: string) {
      const res = await request.post<ApiRes<Profile>>('/login/code', {
        mobile,
        code
      })
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
      setProfile(res.data.result)
    },
    logout() {
      this.profile = {} as Profile
      removeProfile()
    }
  }
})