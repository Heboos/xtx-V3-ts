<script setup lang="ts">
  import useStore from '@/store'
  import { useLazyData } from '@/utils/hooks';
  import HomePanel from './HomePanel.vue'
  const { home } = useStore()
  const target = useLazyData(() => {
    home.getHotList()
  })
</script>
<template>
<div class="home-new">
  <HomePanel ref="target" title="人气推荐" sub-title="人气爆款 不容错过">
    <template #right></template>
<!-- 面板内容 -->
<ul class="goods-list">
  <li v-for="i in home.hotGoodList" :key="i.id">
    <RouterLink to="/">
      <img v-lazy="i.picture" alt="">
      <p class="name ellipsis">{{i.title}}</p>
      <p class="price">{{i.alt}}</p>
    </RouterLink>
  </li>
</ul>
</HomePanel>
</div>
</template>
<style scoped lang="less">
  .goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;
    li {
      width: 306px;
      height: 406px;
      .hoverShadow();
      img {
        width: 306px;
        height: 306px;
      }
      p {
        font-size: 22px;
        padding: 12px 30px 0 30px;
        text-align: center;
      }
      .price {
        color: #999;
        font-size: 18px;
      }
    }
  }
</style>