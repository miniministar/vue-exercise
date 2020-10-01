<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :banners="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="goodsImgLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommendInfo"></goods-list>
    </scroll>
  </div>
</template>

<script>
  import {getDetail, getRecommend, GoodsInfo, Shop, Param} from "network/detail"

  import {imgRefrashMixin} from "common/mixins"


  import DetailNavBar from './childCopm/DetailNavBar'
  import DetailSwiper from './childCopm/DetailSwiper'
  import DetailBaseInfo from './childCopm/DetailBaseInfo'
  import DetailShopInfo from './childCopm/DetailShopInfo'
  import DetailGoodsInfo from './childCopm/DetailGoodsInfo'
  import DetailParamInfo from './childCopm/DetailParamInfo'
  import DetailCommentInfo from './childCopm/DetailCommentInfo'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'


  export default {
    name: "Detail",
    mixins: [imgRefrashMixin],
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,

      Scroll,
      GoodsList
    },
    data(){
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo:{},
        commentInfo: [],
        recommendInfo: []
      }
    },
    created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(data => {
        let res = {}
        const str = JSON.parse(data.data.substr(7, data.data.length - 8));
        if(str.data && str.data.result ) {
          res =  str.data.result;
          this.topImages = res.topImages
          this.goods = new GoodsInfo(res.itemInfo, res.priceInfo, res.itemServices)
          this.shop = new Shop(res.shopInfo)

          this.detailInfo = res.detailInfo
          this.paramInfo = new Param(res.itemParams.info, {tables: []})
          if(res.rateInfo.cRate != 0) {
            this.commentInfo = res.rateInfo.list
          }
        }
        // console.log(res, str);
      })

      getRecommend().then(data => {
        let res = {}
        const str = JSON.parse(data.data.substr(7, data.data.length - 8));
        if(str.data ) {
          res =  str.data;
          this.recommendInfo = res.list
        }
      })

    },
    mounted() {
      // //1、监听事件总线, item中的图片加载完成
      // this.itemImgLister = ()=>{
      //   // 使用防抖函数，防止频繁刷新
      //   this.$refs.scroll && this.$refs.scroll.refresh && debounce(this.$refs.scroll.refresh, 500)()
      // }
      // this.$bus.$on('itemImgLoad', this.itemImgLister)
      console.log('mixins混入');
    },
    destroyed(){
      console.log('destroyed');
      //2.取消全局事件的监听
      this.$bus.$off('itemImgLoad', this.itemImgLister)
    },
    methods: {
      goodsImgLoad() {
        console.log('goodsImgLoad');
        this.$refs.scroll.refresh();
        // this.themeTopY = [];
        // this.themeTopY.push(0);
        // this.themeTopY.push(this.$refs.param.$el.offsetTop);
        // this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        // this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        // this.themeTopY.push(Number.MAX_VALUE);
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 10;
    background-color: #ffffff;
    height: 100vh;
  }
  .detail-nav{
    background-color: #fff;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 11;
  }
  .content{
    /*position: relative;*/
    height: calc(100% - 44px);
    /*top: 44px;*/
    /*right: 0;*/
    /*left: 0;*/
    /*bottom: 49px;*/
  }
</style>
