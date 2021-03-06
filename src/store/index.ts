import useCategoryStore from './modules/category'
import useHome from './modules/home'
import usegoods from './modules/goods'
import user from './modules/user'
import cart from './modules/cart'

export default function useStore() {
  return {
    category: useCategoryStore(),
    home:useHome(),
    goods:usegoods(),
    user:user(),
    cart:cart()
  }
}