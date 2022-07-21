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
    //  source: 1为pc，2为webapp，3为微信小程序, 4为Android, 5为ios, 6为qq, 7为微信
    async qqLogin(openId: string) {
      const res = await request.post<ApiRes<Profile>>('/login/social', {
        unionId: openId,
        source: 6
      })
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
      setProfile(res.data.result)
    },
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
    // 绑定当前的QQ和账号
    async qqBindLogin(openId: string, mobile: string, code: string) {
      const res = await request.post<ApiRes<Profile>>('/login/social/bind', {
        mobile,
        code,
        unionId: openId
      })
      // 1. 保存用户信息到 state 中
      this.profile = res.data.result
      // 2. 持久化
      setProfile(res.data.result)
    },
    // 绑定qq的短信验证码
    async sendQQBindMsg(mobile: string) {
      await request.get('/login/social/code', {
        params: {
          mobile
        }
      })
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