
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


// 商品模块的类型声明
export type GoodsInfo = {
specs: any;
skus: any;
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number
  inventory: number
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: any[]
  videoScale: number
  mainPictures: string[]
  isPreSale: boolean
  isCollect?: any
  recommends?: any
  userAddresses?: any
  evaluationInfo?: any
  categories: {
    id: string
    name: string
  }[]
}

// 商品的规格的值的类型
export type SpecValue = {
  desc: string
  name: string
  picture: string
  selected: boolean
  disabled: boolean
}
// 商品的规格类型
export type Spec = {
  name: string
  values: SpecValue[]
}

export type Sku = {
  id: string
  inventory: number
  oldPrice: string
  price: string
  skuCode: string
  specs: {
    name: string
    valueName: string
  }[]
}