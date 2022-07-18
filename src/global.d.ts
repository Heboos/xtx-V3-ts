import XtxSkeleton from '@/components/XtxSkeleton/XtxSkeleton.vue'
import XtxMore from '@/components/XtxMore/XtxMore.vue'
import XtxBread from '@/components/XtxBread/XtxBread.vue'
import XtxBreadItem from '@/components/XtxBread/XtxBreadItem.vue'
import XtxNumber from '@/components/XtxNumber/XtxNumber.vue'
import XtxButton from '@/components/XtxButton/XtxButton.vue'
import XtxCheckbox from '@/components/XtxCheckbox/XtxCheckbox.vue'
import XtxMessage from '@/components/XtxMessage/XtxMessage.vue'
// 参考：
declare module 'vue' {
  export interface GlobalComponents {
    XtxSkeleton: typeof XtxSkeleton,
    XtxMore: typeof XtxMore,
    XtxBread: typeof XtxBread,
    XtxBreadItem: typeof XtxBreadItem,
    XtxNumber: typeof XtxNumber,
    XtxButton: typeof XtxButton,
    XtxCheckbox: typeof XtxCheckbox,
    XtxMessage: typeof XtxMessage,
  }
}
export {}