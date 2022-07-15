
export interface ApiRes<T> {
  code: string
  msg: string
  result: T
}
// 单个分类的类型
export type CategoryItem = {
  id: string;
  name: string;
  picture: string;
  children: {
    id: string;
    name: string;
    picture: string;
    children: null;
    goods: null;
  }[];
  goods: {
    id: string;
    name: string;
    desc: string;
    price: string;
    picture: string;
    discount: null;
    orderNum: null;
  }[];
}
// 轮播图类型
export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}
// 新鲜好物
export interface GoodItem {
  desc: string
  id: string
  name: string
  picture: string
  price: string
}
// 人气推荐
export interface HotGoods {
  id: string
  picture: string
  title: string
  alt: string
}

// 顶级分类类型
export type TopCategory = {
  id: string
  name: string
  picture: string
  children: CategoryItem[]
}