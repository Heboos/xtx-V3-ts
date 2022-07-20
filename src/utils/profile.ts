import { Profile } from '@/types/data'
const PROFILE_KEY = 'rabbit-profile-76'
// 封装和localstorage相关的api

/**
 * 设置个人信息：保存到本地
 * @param profile
 */
export function setProfile(profile: Profile): void {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))
}

/**
 * 获取个人信息：从本地取出
 * @returns
 */
export function getProfile(): Profile {
  return JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}')
}

/**
 * 移除个人信息： 删除信息，用户退出系统时可以调用
 */
export function removeProfile(): void {
  localStorage.removeItem(PROFILE_KEY)
}