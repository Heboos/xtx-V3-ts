<script setup lang='ts'>
import { inject } from 'vue';

  defineProps<{ to?: string }>()
  const separtor = inject('separtor')
</script>

<template>

  <slot></slot>
  <!-- 分隔符 -->
  {{ separtor }}
</template>

<style lang='less' scoped>

</style>