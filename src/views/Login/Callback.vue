<script lang="ts" setup name="LoginCallback">
import LoginHeader from './components/LoginHeader.vue'
import LoginFooter from './components/LoginFooter.vue'
import { ref } from 'vue'
import CallbackBind from './components/CallbackBind.vue';
import CallbackPatch from './components/CallbackPatch.vue';
import useStore from '@/store';
import { useRouter } from 'vue-router';
const hasAccount = ref(true)
const { user } = useStore()
const router = useRouter()
// 1. 判断用户是否登录
if (QC.Login.check()) {
  // 2. 获取openId
  QC.Login.getMe((openId) => {
    user.qqLogin(openId)
  })
}
QC.Login.getMe(async (openId) => {
    // 使用openId去做登录
    user.qqLogin(openId)
    await user.qqLogin(openId)
    alert('登录成功')
    router.push('/')
  })
</script>

<template>
  <LoginHeader>QQ登录</LoginHeader>
  <section class="container">
    <nav class="tab">
      <a
        :class="{ active: hasAccount }"
        href="javascript:;"
        @click="hasAccount = true"
      >
        <i class="iconfont icon-bind" />
        <span>已有小兔鲜账号，请绑定手机</span>
      </a>
      <a
        :class="{ active: !hasAccount }"
        href="javascript:;"
        @click="hasAccount = false"
      >
        <i class="iconfont icon-edit" />
        <span>没有小兔鲜账号，请完善资料</span>
      </a>
    </nav>
    <div class="tab-content" v-if="hasAccount">
      <CallbackBind></CallbackBind>
    </div>
    <div class="tab-content" v-else>
      <CallbackPatch></CallbackPatch>
    </div>
  </section>
  <LoginFooter></LoginFooter>
</template>

<style scoped lang="less">
.container {
  padding: 25px 0;
}
.tab {
  background: #fff;
  height: 80px;
  padding-top: 40px;
  font-size: 18px;
  text-align: center;
  a {
    color: #666;
    display: inline-block;
    width: 350px;
    line-height: 40px;
    border-bottom: 2px solid #e4e4e4;
    i {
      font-size: 22px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin-left: 4px;
    }
    &.active {
      color: @xtxColor;
      border-color: @xtxColor;
    }
  }
}
.tab-content {
  min-height: 600px;
  background: #fff;
}
</style>