<script lang="ts" setup name="AppHeaderSticky">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppHeaderNav from './AppHeaderNav.vue'
import { useWindowScroll } from '@vueuse/core'
const { y } = useWindowScroll()
// const topY = ref(0)
// const onScroll = () => {
//   topY.value = document.documentElement.scrollTop
// }
// // 监听滚动事件
// window.addEventListener('scroll', onScroll)
// // 添加事件监听
// onMounted(() => {
//   window.addEventListener('scroll', onScroll)
// })
// // 移除事件监听
// onBeforeUnmount(() => {
//   window.removeEventListener('scroll', onScroll)
// })

</script>

<template>
  <div class="app-header-sticky" :class="{show: y>78}">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <AppHeaderNav />
      <div class="right">
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 默认是不可见的  移出了可视区域之外
  transform: translateY(-100%);
  transition: all 0.3s linear;
  // 如果有了show这个类，就是可见了啦
  &.show {
    transform: translateY(0%);
  }
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(@/assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>