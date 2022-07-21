<script setup lang="ts" name="Cart">
import Message from '@/components/XtxMessage';
import useStore from '@/store';
import { useRouter } from 'vue-router';

//
const { cart } = useStore()
const del = async (id: string) => {
  await cart.delCart([id])
  Message.success('删除成功')
}
const router = useRouter()
const changeSelected = (selected: boolean,skuId: string) => {
  // console.log(selected, skuId);
  cart.updateCart(skuId,{selected})
  
}
const changeCount = (skuId: string, count: number) => {
  cart.updateCart(skuId,{count})
}
</script>

<template>
  <div class="xtx-cart-page">
    <div class="container" v-if="cart.effectiveList.length">
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem>购物车</XtxBreadItem>
      </XtxBread>
      <div class="cart" >
        <table>
          <thead>
            <tr>
              <th width="120"><XtxCheckbox   
                :model-value="cart.isAllSelected"
                @update:model-value="cart.updateCartAllSelected(!cart.isAllSelected)"
              >全选</XtxCheckbox></th>
              <th width="400">商品信息</th>
              <th width="220">单价</th>
              <th width="180">数量</th>
              <th width="180">小计</th>
              <th width="140">操作</th>
            </tr>
          </thead>
          <!-- 有效商品 -->
          <tbody>
            <tr v-for="it in cart.effectiveList" :key="it.id">
              <td><XtxCheckbox :model-value="it.selected" @update:model-value="(selected)=>changeSelected(selected,it.skuId)" /></td>
              <td>
                <div class="goods">
                  <RouterLink to="/">
                    <img
                      :src="it.picture"
                      alt=""
                    />
                  </RouterLink>
                  <div>
                    <p class="name ellipsis">
                      {{ it.name }}
                    </p>
                    <p class="attr">{{ it.attrsText }}</p>
                  </div>
                </div>
              </td>
              <td class="tc">
                <p>&yen;{{ it.nowPrice }}</p>
              </td>
              <td>
                <xtx-number :model-value="it.count" :max="it.stock" @update:model-value="changeCount(it.skuId, $event)"  />
              </td>
              <td class="tc"><p class="f16 red">&yen;{{ (it.count * +it.nowPrice).toFixed(2)  }}</p></td>
              <td class="tc">
                <p><a href="javascript:;">移入收藏夹</a></p>
                <p><a class="green" href="javascript:;" @click="del(it.skuId)">删除</a></p>
                <p><a href="javascript:;">找相似</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 操作栏 -->
      <div class="action">
        <div class="batch"></div>
        <div class="total">
          共 {{ cart.effectiveListCounts }} 件有效商品，已选择 {{ cart.selectedListCounts }} 件，商品合计：
          <span class="red">¥{{ cart.selectedListPrice }}</span>
          <XtxButton type="primary">下单结算</XtxButton>
        </div>
      </div>
    </div>
    <div class="box1" v-else>
      <!-- 删除光购物车之后使用元素占位 -->
          <div class="cart-none" style="text-align: center">
            <img src="@/assets/images/none.png" alt="" />
            <p>购物车内暂时没有商品</p>
            <div class="btn" style="margin: 20px">
              <XtxButton type="primary" @click="router.push('/')"> 继续逛逛 </XtxButton>
            </div>
          </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.box1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  width: 90%;
  height: 300px;
  background-color: #fff;
}
.tc {
  text-align: center;
  .xtx-numbox {
    margin: 0 auto;
    width: 120px;
  }
}
.red {
  color: @priceColor;
}
.green {
  color: @xtxColor;
}
.f16 {
  font-size: 16px;
}
.goods {
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  > div {
    width: 280px;
    font-size: 16px;
    padding-left: 10px;
    .attr {
      font-size: 14px;
      color: #999;
    }
  }
}
.action {
  display: flex;
  background: #fff;
  margin-top: 20px;
  height: 80px;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  padding: 0 30px;
  .xtx-checkbox {
    color: #999;
  }
  .batch {
    a {
      margin-left: 20px;
    }
  }
  .red {
    font-size: 18px;
    margin-right: 20px;
    font-weight: bold;
  }
}
.tit {
  color: #666;
  font-size: 16px;
  font-weight: normal;
  line-height: 50px;
}
.xtx-cart-page {
  .cart {
    background: #fff;
    color: #666;
    table {
      border-spacing: 0;
      border-collapse: collapse;
      line-height: 24px;
      th,
      td {
        padding: 10px;
        border-bottom: 1px solid #f5f5f5;
        &:first-child {
          text-align: left;
          padding-left: 30px;
          color: #999;
        }
      }
      th {
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
      }
    }
  }
}
</style>