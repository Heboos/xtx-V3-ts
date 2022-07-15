import useCategoryStore from './modules/category'
import useHome from './modules/home'
import usegoods from './modules/goods'

export default function useStore() {
  return {
    category: useCategoryStore(),
    home:useHome(),
    goods:usegoods()
  }
}