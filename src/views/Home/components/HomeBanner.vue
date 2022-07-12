
<script lang="ts" setup>
import useStore from '@/store'
import Carousel from '@/components/Carousel/index.vue';
const { home } = useStore()
home.getBannerList()
</script>
<template>
  <div class="home-banner">
    <Carousel></Carousel>
  </div>
</template>

<style scoped lang="less">
:deep(.carousel-btn.prev) {
  left: 270px!important;
}
:deep(.carousel-indicator) {
  padding-left: 250px;
}
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
