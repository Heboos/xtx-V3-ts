<script setup lang='ts'>
import { provide } from 'vue';

const { separtor = '/' } =  defineProps<{ separtor: string }>()
provide('separtor', separtor)
</script>

<template>
    <slot></slot>

</template>

<style lang='less' scoped>

</style>