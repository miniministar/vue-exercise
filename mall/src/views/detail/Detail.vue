<template>
  <div id="detail">
    <detail-nav-bar ref="nav" class="detail-nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :banners="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="goodsImgLoad"></detail-goods-info>
      <detail-param-info ref="params" :param-info="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommendInfo"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  import {getDetail, getRecommend, GoodsInfo, Shop, Param, Product} from "network/detail"

  import {imgRefrashMixin, backTopMixin} from "common/mixins"
  import {debounce} from "common/utils";

  import DetailNavBar from './childCopm/DetailNavBar'
  import DetailSwiper from './childCopm/DetailSwiper'
  import DetailBaseInfo from './childCopm/DetailBaseInfo'
  import DetailShopInfo from './childCopm/DetailShopInfo'
  import DetailGoodsInfo from './childCopm/DetailGoodsInfo'
  import DetailParamInfo from './childCopm/DetailParamInfo'
  import DetailCommentInfo from './childCopm/DetailCommentInfo'
  import DetailBottomBar from './childCopm/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'

  import GoodsList from 'components/content/goods/GoodsList'

  export default {
    name: "Detail",
    mixins: [imgRefrashMixin, backTopMixin],
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,

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
        recommendInfo: [],
        themeTopY: [],
        getThemeTopY: null,
        currentIndex: 0,

      }
    },
    created() {
      this.iid = this.$route.params.iid + Math.random()
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

      this.getThemeTopY = debounce(()=>{
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(-this.$refs.params.$el.offsetTop);
        this.themeTopY.push(-this.$refs.comment.$el.offsetTop);
        this.themeTopY.push(-this.$refs.recommend.$el.offsetTop);
        this.themeTopY.push(-Number.MAX_VALUE);
      });
    },
    mounted() {
      // //1、监听事件总线, item中的图片加载完成
      // this.itemImgLister = ()=>{
      //   // 使用防抖函数，防止频繁刷新
      //   this.$refs.scroll && this.$refs.scroll.refresh && debounce(this.$refs.scroll.refresh, 500)()
      // }
      // this.$bus.$on('itemImgLoad', this.itemImgLister)
    },
    destroyed(){
      // console.log('destroyed');
      //2.取消全局事件的监听
      this.$bus.$off('itemImgLoad', this.itemImgLister)
    },
    methods: {
      ...mapActions(['addCart']),

      goodsImgLoad() {
        console.log('goodsImgLoad');
        this.$refs.scroll.refresh();
        this.getThemeTopY()
      },
      titleClick(currentIndex) {
        this.$refs.scroll.scrollTo(0, this.themeTopY[currentIndex], 200)
      },
      contentScroll(position) {
        let positionY = position.y;
        let _lenth = this.themeTopY.length;
        for(let i=0; i<_lenth-1; i++){
          if(this.currentIndex !== i && (positionY <= this.themeTopY[i] && positionY > this.themeTopY[i+1])){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }

        //判断backtop是否显示
        this.listenerBackTop(position)
      },
      //加入购物车
      addToCart() {
        // 获取购物车需要展示的信息
        const product = new Product(this.iid, this.goods, this.topImages)

        //将商品添加到购物车里
        // this.$store.commit('addCart', product);
        // this.$store.dispatch('addCart', product);
        this.addCart(product).then(res=>{
          this.$toast.show(res, 1500)
          // this.show = true
          // this.message = res
          //
          // setTimeout(()=>{
          //   this.show = false
          //   this.message = ''
          // }, 1500)
        })
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
    height: calc(100% - 93px);
    /*top: 44px;*/
    /*right: 0;*/
    /*left: 0;*/
    /*bottom: 49px;*/
  }
</style>
