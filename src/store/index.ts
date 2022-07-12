import useCategoryStore from './modules/category'
import useHome from './modules/home'

export default function useStore() {
  return {
    category: useCategoryStore(),
    home:useHome()
  }
}