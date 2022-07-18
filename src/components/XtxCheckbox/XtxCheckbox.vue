<script lang="ts" setup name="XtxCheckbox">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', vlaue: boolean): void
}>()

const hUpdate = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div class="xtx-checkbox" >
    <i @click="hUpdate" v-if="modelValue" class="iconfont icon-checked"></i>
    <i @click="hUpdate" v-else class="iconfont icon-unchecked"></i>
    <span><slot></slot></span>
  </div>
</template>

<style scoped lang="less">
.xtx-checkbox {
  display: inline-block;
  margin-right: 2px;
  .icon-checked {
    color: @xtxColor;
    ~ span {
      color: @xtxColor;
    }
  }
  i {
    position: relative;
    top: 1px;
  }
  span {
    margin-left: 2px;
  }
}
</style>