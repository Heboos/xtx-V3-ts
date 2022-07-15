<script lang="ts" setup>
import HomePanel from './HomePanel.vue'
import useStore from '@/store'
import { useLazyData } from '@/utils/hooks'
const { home } = useStore()
// 数据懒加载
const target = useLazyData(() => {
  home.getNewList()
})
</script>
<template>
  <div class="home-new">
    <HomePanel ref="target" title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right><XtxMore path="/" /></template>
      <!-- 面板内容 -->
      <Transition name="fade">
        <ul class="goods-list" v-if="home.newGoodList.length > 0">
        <li v-for="item in home.newGoodList" :key="item.id">
          <RouterLink :to="'/goods/' + item.id">
            <img
              v-lazy="item.picture"
              alt=""
            />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
        </ul>
        <div class="home-skeleton" v-else>
          <div
            class="item"
            v-for="i in 4"
            :key="i"
            :style="{ backgroundColor: '#f0f9f4' }"
          >
            <XtxSkeleton bg="#e4e4e4" fade animated :width="306" :height="306" />
            <XtxSkeleton bg="#e4e4e4" fade animated :width="160" :height="24" />
            <XtxSkeleton bg="#e4e4e4" fade animated :width="120" :height="24" />
          </div>
        </div>
      </Transition>
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
    background: #f0f9f4;
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
      color: @priceColor;
    }
  }
}
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .xtx-skeleton ~ .xtx-skeleton {
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>