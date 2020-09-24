<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control :titles="['流行','新款', '精选']"
                   @tabItemClick="tabItemClick"></tab-control>
      <goods-list :goods="showGoodsList"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import HomeSwiper from './childComp/HomeSwiper'
  import HomeRecommend from './childComp/HomeRecommend'
  import HomeFeature from './childComp/HomeFeature'

  import {getHomeMultidata, getHomeGoods} from "network/home";
  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,

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
        isShowBackTop: true
      }
    },
    created() {
      //1、请求多个数据
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
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
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          for(const index in res) {
            this.goods[type].list.push(res[index]);
          }
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp()
        })
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore(){
        console.log(this.currentType + ' load more: ' + (this.goods[this.currentType].page + 1) );
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh();
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
</style>
