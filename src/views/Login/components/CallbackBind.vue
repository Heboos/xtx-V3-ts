<script name="CallbackBind" lang="ts" setup>
import useStore from '@/store';
import { QQUserInfo, QQUserInfoRes } from '@/types/data';
import { useCountDown } from '@/utils/hooks';
import { mobileRule, codeRule } from '@/utils/validate';
import { useField, useForm } from 'vee-validate';
import { ref } from 'vue';

const { user } = useStore()
const qqUserInfo = ref<QQUserInfo>({} as QQUserInfo)

let opendId = ''
// 1. 获取当前QQ用户的信息
if(QC.Login.check()){
  QC.api("get_user_info").success((res: QQUserInfoRes) => {
    console.log(res)
    qqUserInfo.value = res.data
  })

  QC.Login.getMe(id => {
    console.log('拿到的openId', id)
    opendId = id
  })
}
const { counter, start } =  useCountDown()
// const mobile = ref('13899999999')
// const code = ref('123456')
const { validate } = useForm({
  validationSchema: {
    // 手机号
    mobile: mobileRule,
    // 手机号
    code: codeRule
  },
  initialValues: {
    mobile: '13899999999',
    code: '123456'
  }
})

const { value: mobile, errorMessage:mobileError, validate: mobileValidate } = useField<string>('mobile')
const { value: code, errorMessage:codeError } = useField<string>('code')

// 用户发送验证码
const send = async () => {
  await user.sendQQBindMsg(mobile.value)
  start(10)
}

// 用户将当前登录的QQ和已有的账号进行绑定
const bind = async () => {
  const { valid } = await validate()
  if(!valid) return
  await user.qqBindLogin(opendId, mobile.value, code.value)

  alert('绑定成功')
}
</script>
<template>
  <div class="xtx-form">
    <div class="user-info">
      <img :src="qqUserInfo.figureurl_2" alt="" />
      <p>
        Hi，{{ qqUserInfo.nickname }}
        欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~
      </p>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input class="input" v-model="mobile" type="text" placeholder="绑定的手机号" />
      </div>
      <div class="error" v-if="mobileError">
        <i class="iconfont icon-warning" />{{mobileError}}
      </div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input class="input" v-model="code" type="text" placeholder="短信验证码" />
        <span class="code" @click="send">{{counter===0?'发送验证码': counter+'秒之后发送' }}</span>
      </div>
      <div class="error" v-if="codeError">
        <i class="iconfont icon-warning" />{{codeError}}
      </div>
    </div>
    <a href="javascript:;" class="submit" @click="bind">立即绑定</a>
  </div>
</template>

<style scoped lang="less">
.user-info {
  width: 320px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  background: #f2f2f2;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 25px;
  img {
    background: #f2f2f2;
    width: 50px;
    height: 50px;
  }
  p {
    padding-left: 10px;
  }
}
.code {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 50px;
  width: 80px;
  color: #999;
  &:hover {
    cursor: pointer;
  }
}
</style>