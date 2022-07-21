<script lang="ts" setup name="XtxNumbox">
  const { modelValue, min = 1, max = 10 } = defineProps<{
    modelValue:number,
    min?:number,
    max?:number
  }>()
  const emit = defineEmits<{
  (event: 'update:modelValue', val: number): void
}>()
  const sub = (val:number) => {
    if(val <= max && val >= min) {
      emit('update:modelValue',val)
    }
  } 
</script>
<template>
  <div class="xtx-numbox">
    <div class="label">数量</div>
    <div class="numbox">
      <a href="javascript:;" @click="sub(modelValue - 1)">-</a>
      <input type="text" readonly :value="modelValue" />
      <a href="javascript:;" @click="sub(modelValue + 1)">+</a>
    </div>
  </div>
</template>

<style scoped lang="less">
.xtx-numbox {
  display: flex;
  align-items: center;
  .label {
    width: 60px;
    color: #999;
    padding-left: 10px;
  }
  .numbox {
    width: 120px;
    height: 30px;
    border: 1px solid #e4e4e4;
    display: flex;
    > a {
      width: 29px;
      line-height: 28px;
      text-align: center;
      background: #f8f8f8;
      font-size: 16px;
      color: #666;
      &:first-of-type {
        border-right: 1px solid #e4e4e4;
      }
      &:last-of-type {
        border-left: 1px solid #e4e4e4;
      }
    }
    > input {
      width: 60px;
      padding: 0 5px;
      text-align: center;
      color: #666;
    }
  }
}
</style>