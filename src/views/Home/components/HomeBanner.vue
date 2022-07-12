
<script lang="ts" setup>
import useStore from '@/store'
const { home } = useStore()
home.getBannerList()
</script>
<template>
  <div class="home-banner">
    <!-- 轮播图 -->
    <p style="text-align: center;">我是轮播图</p>
  </div>
</template>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 450px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  background-color: #ccc;
}
</style>
