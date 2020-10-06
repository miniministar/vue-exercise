<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款', '精选']" class="tab-control-top"
                 ref="tabControl2"
                 @tabItemClick="tabItemClick"
                 v-show="isTabShow"
    ></tab-control>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="['流行','新款', '精选']"
                   ref="tabControl"
                   @tabItemClick="tabItemClick"
      ></tab-control>
      <goods-list :goods="showGoodsList"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import {imgRefrashMixin, backTopMixin} from "common/mixins"

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import HomeSwiper from './childComp/HomeSwiper'
  import HomeRecommend from './childComp/HomeRecommend'
  import HomeFeature from './childComp/HomeFeature'

  import {getHomeMultidata, getHomeGoods} from "network/home";
  export default {
    name: "Home",
    mixins: [imgRefrashMixin, backTopMixin],
    components:{
      NavBar,
      TabControl,
      GoodsList,
      Scroll,

      HomeSwiper,
      HomeRecommend,
      HomeFeature
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list:[]},
          new: {page: 0, list:[]},
          sell: {page: 0, list:[]}
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabShow: false,
        saveY: 0
      }
    },
    created() {
      //1、请求多个数据
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){
      //1、监听事件总线, item中的图片加载完成
      // this.itemImgLister = ()=>{
      //   // this.$refs.scroll.refresh()
      //   //使用防抖函数，防止频繁刷新
      //   this.$refs.scroll && this.$refs.scroll.refresh && debounce(this.$refs.scroll.refresh, 500)()
      // }
      // this.$bus.$on('itemImgLoad', this.itemImgLister)
      //2、所有的组件都有一个$.el属性，用于获取组件中的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
    },
    destroyed(){
    },
    activated(){
      this.$refs.scroll.scrollTo(0, this.saveY)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY()

      //2.取消全局事件的监听
      this.$bus.$off('itemImgLoad', this.itemImgLister)
    },
    methods:{
      tabItemClick(index) {
        switch(index){
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(data => {

          let res = []
          const str = JSON.parse(data.data.substr(11, data.data.length - 13));
          if(str.result && str.result.wall && str.result.wall.docs) {
            res =  str.result.wall.docs;
          }

          for(const index in res) {
            this.goods[type].list.push(res[index]);
          }
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp()
        })
      },
      contentScroll(position) {
        //1、判断backtop是否显示
        this.listenerBackTop(position)

        //2、决定tabcontrol是否吸顶显示
        this.isTabShow = (-position.y) > this.tabOffsetTop
      },
      loadMore(){
        console.log(this.currentType + ' load more page ' + (this.goods[this.currentType].page + 1) );
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad() {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      }
    },
    computed:{
      showGoodsList() {
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;
  }
  .home-nav{
    background-color: #ff617f;
    color: white;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 9;*/
  }
  .content{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .fixed {
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
  }
  .tab-control-top {
    position: relative;
    /*top: 44px;*/
    top: 0;
    z-index: 9;
  }
</style>
