import XtxSkeleton from '@/components/XtxSkeleton/XtxSkeleton.vue'
import XtxMore from '@/components/XtxMore/XtxMore.vue'
// 参考：
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton,
    XtxMore: typeof XtxMore
  }
}
export {}