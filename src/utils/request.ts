import user from '@/store/modules/user'
import axios from 'axios'

// 备用接口地址: http://pcapi-xiaotuxian-front-devtest.itheima.net/
const instance = axios.create({
  // 请求基地址
  baseURL: 'http://pcapi-xiaotuxian-front.itheima.net/',
  // 最长等待时间，如果超过了这个时间，就报错
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 补充token
    const userInfo = user()
    const token = userInfo.profile.token
    if(token) {
      // 添加到请求头
      // console.log(token)
      // config.headers!  : 告诉ts，config中一定有headers
      config.headers!.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance