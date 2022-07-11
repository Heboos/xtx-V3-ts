<script setup lang="ts">
import AppTopnav from '@/views/Layout/components/AppTopnav.vue'
import AppHeader from '@/views/Layout/components/AppHeader.vue'
import AppFooter from './views/Layout/components/AppFooter.vue';
</script>

<template>
  <!-- 1. 顶部通栏 -->
    <app-topnav></app-topnav>
  <!-- 2. 头部导航 -->
    <app-header></app-header>
  <!-- 3. 主体部分 -->
    <main class="app-body">
      <!-- 路由出口 -->
      <router-view></router-view>
    </main>

  <!-- 4. 底部部分 -->
  <AppFooter></AppFooter>
</template>
<style lang="less" scoped>
.app-body {
min-height: 600px;
}
</style>
