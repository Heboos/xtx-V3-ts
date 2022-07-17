import XtxSkeleton from '@/components/XtxSkeleton/XtxSkeleton.vue'
import XtxMore from '@/components/XtxMore/XtxMore.vue'
import XtxBread from '@/components/XtxBread/XtxBread.vue'
import XtxBreadItem from '@/components/XtxBread/XtxBreadItem.vue'
import XtxNumber from '@/components/XtxNumber/XtxNumber.vue'
// 参考：
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton,
    XtxMore: typeof XtxMore,
    XtxBread: typeof XtxBread,
    XtxBreadItem: typeof XtxBreadItem,
    XtxNumber: typeof XtxNumber
  }
}
export {}