import XtxSkeleton from '@/components/XtxSkeleton/XtxSkeleton.vue'
// 参考：
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton
  }
}
export {}