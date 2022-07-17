<script setup lang="ts">
import { GoodItem, ApiRes } from '@/types/data';
import GoodsItem from '@/views/Category/components/GoodsItem.vue'
import { onMounted, ref } from 'vue';
import request from '@/utils/request'
import { useRoute } from 'vue-router';
const { type = '1'} = defineProps<{type: '1' | '2' | '3'}>()

// 标题对象
const titleObj = {
  '1': '24小时热销榜',
  '2': '周热销榜',
  '3': '总热销榜',
}
const route = useRoute()
const list = ref<GoodItem[]>([])
onMounted(async () => {
  const res = await request.get<ApiRes<GoodItem[]>>('/goods/hot', {
    params: {
      id: route.params.id,
      type: type
    }
  })
  list.value = res.data.result
})
</script>

<template>
  <div class="goods-hot">
    <h3>{{ titleObj[type] }}</h3>
    <div class="goods-list">
      <!-- 商品区块 -->
      <GoodsItem  :goods="item" v-for="(item, index) in list" :key="item.id" />
    </div>
  </div>
</template>

<style scoped lang="less">
.goods-hot {
  background-color: #fff;
  margin-bottom: 20px;
  h3 {
    height: 70px;
    background: @helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  .goods-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
