<script lang="ts" setup>
import useStore from '@/store'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import GoodsImage from './components/GoodsImage.vue';
import GoodsSales from './components/GoodsSales.vue';
import GoodsName from './components/GoodsName.vue';
import GoodsSku from './components/GoodsSku.vue';
const { goods } = useStore()
const route = useRoute()
watchEffect(() => {
  const id = route.params.id as string
  if(route.fullPath === `/goods/${id}`) {
    goods.getGoodsInfo(id)
  }
})
const num = ref(1)
</script>

<template>
  <div class='xtx-goods-page' >
    <div class="container">
      <!-- 面包屑 -->
    <XtxBread>
      <XtxBreadItem to="/">首页</XtxBreadItem>
    <XtxBreadItem :to="`/category/${goods.info.categories && goods.info.categories[1].id}`">
      {{ goods.info.categories && goods.info.categories[1].name }}
        </XtxBreadItem>
    <XtxBreadItem :to="`/category/sub/${ goods.info.categories && goods.info.categories[0].id}`">
      {{ goods.info.categories && goods.info.categories[0].name }}
        </XtxBreadItem>
    <XtxBreadItem>{{ goods.info.name }}</XtxBreadItem>
    </XtxBread>

      <!-- 商品信息 -->
      <div class="goods-info">
        <!--左边-->
        <div class="media">
          <!-- 区域1 商品图片组件 -->
          <GoodsImage :images="goods.info.mainPictures"></GoodsImage>
          <!-- 区域2 商品销售信息组件 -->
          <GoodsSales></GoodsSales>
        </div>
        <!--右边-->
        <div class="spec">
          <!-- 区域3 商品介绍组件 -->
          <GoodsName :goods="goods.info"></GoodsName>
          <!-- 区域4 商品规格组件  -->
          <GoodsSku :goods='goods.info'></GoodsSku>
          <!-- 区域5 数量选择组件 -->
          <XtxNumber v-model="num" :min="1" :max="10"></XtxNumber>
          <!-- 加入购物车 按钮 -->
          <XtxButton type="primary" style="margin-top: 20px">加入购物车</XtxButton>
        </div>
      </div>
      <!-- 商品推荐 -->
      <div class='goods-relevant'>
  			商品推荐
  		</div>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs">商品+评价</div>
          <!-- 注意事项 -->
          <div class="goods-warn">注意事项</div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside">24热榜+专题推荐</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}

.number-box {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
}
.g-name {
  font-size: 22px;
}
.g-desc {
  color: #999;
  margin-top: 10px;
}
.g-price {
  margin-top: 10px;
  span {
    &::before {
      content: "¥";
      font-size: 14px;
    }
    &:first-child {
      color: @priceColor;
      margin-right: 10px;
      font-size: 22px;
    }
    &:last-child {
      color: #999;
      text-decoration: line-through;
      font-size: 16px;
    }
  }
}
.g-service {
  background: #f5f5f5;
  width: 500px;
  padding: 20px 10px 0 10px;
  margin-top: 10px;
  dl {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    dt {
      width: 50px;
      color: #999;
    }
    dd {
      color: #666;
      &:last-child {
        span {
          margin-right: 10px;
          &::before {
            content: "•";
            color: @xtxColor;
            margin-right: 2px;
          }
        }
        a {
          color: @xtxColor;
        }
      }
    }
  }
}
.goods-sales {
  display: flex;
  width: 400px;
  align-items: center;
  text-align: center;
  height: 140px;
  li {
    flex: 1;
    position: relative;
    ~ li::after {
      position: absolute;
      top: 10px;
      left: 0;
      height: 60px;
      border-left: 1px solid #e4e4e4;
      content: "";
    }
    p {
      &:first-child {
        color: #999;
      }
      &:nth-child(2) {
        color: @priceColor;
        margin-top: 10px;
      }
      &:last-child {
        color: #666;
        margin-top: 10px;
        i {
          color: @xtxColor;
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
          cursor: pointer;
        }
      }
    }
  }
}
</style>