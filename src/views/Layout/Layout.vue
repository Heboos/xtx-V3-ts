<script setup lang="ts">
import AppTopnav from './components/AppTopnav.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppHeaderSticky from './components/AppHeaderSticky.vue'
import useStore from '@/store/index'
import XtxMore from '@/components/XtxMore/XtxMore.vue'
const { category } = useStore()
category.getAllCategory()
</script>

<template>
  <!-- 1. 顶部通栏 -->
    <app-topnav></app-topnav>
  <!-- 2. 头部导航 -->
    <app-header></app-header>
  <!-- 3. 主体部分 -->
  <!-- 吸顶 -->
  <app-header-sticky></app-header-sticky>
  <!-- 路由出口 -->
  <router-view></router-view>
  <!-- 4. 底部部分 -->
  <AppFooter></AppFooter>
</template>

<style lang='less' scoped>
.app-body {
  min-height: 600px;
}
</style>