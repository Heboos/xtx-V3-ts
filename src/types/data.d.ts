
export interface ApiRes<T> {
  code: string
  msg: string
  result: T
}
// 单个分类的类型
export type CategoryItem = {
  id: string
  name: string
  picture: string
}