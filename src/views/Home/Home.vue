<script lang="ts" setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeNew from './components/HomeNew.vue';
import HomeHot from './components/HomeHot.vue';
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
      <!-- <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
        <template #right>
          <XtxMore path="/"></XtxMore>
        </template>
      </HomePanel> -->
      <HomeNew></HomeNew>
      <HomeHot></HomeHot>
      <!-- <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
        1111
      </HomePanel> -->
    </div>
  </div>
</template>

<style lang="less" scoped></style>