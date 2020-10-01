import {debounce} from "common/utils"

//图片列表刷新
export const imgRefrashMixin = {
  data(){
    itemImgLister: null
  },
  mounted() {
    //1、监听事件总线, item中的图片加载完成
    this.itemImgLister = ()=>{
      // 使用防抖函数，防止频繁刷新
      this.$refs.scroll && this.$refs.scroll.refresh && debounce(this.$refs.scroll.refresh, 500)()
    }

    this.$bus.$on('itemImgLoad',this.itemImgLister);
    console.log('mixins');
  }
}
