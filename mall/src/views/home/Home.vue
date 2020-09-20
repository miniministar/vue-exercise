<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
    <home-feature></home-feature>
    <tab-control :titles="['流行','新款', '精选']"></tab-control>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
      <li>列表31</li>
      <li>列表32</li>
      <li>列表33</li>
      <li>列表34</li>
      <li>列表35</li>
      <li>列表36</li>
      <li>列表37</li>
      <li>列表38</li>
      <li>列表39</li>
      <li>列表40</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import HomeSwiper from './childComp/HomeSwiper'
  import HomeRecommend from './childComp/HomeRecommend'
  import HomeFeature from './childComp/HomeFeature'

  import {getHomeMultidata, getHomeGoods} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,

      HomeSwiper,
      HomeRecommend,
      HomeFeature
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 1, list:[]},
          news: {page: 1, list:[]},
          sell: {page: 1, list:[]}
        }
      }
    },
    created() {
      //1、请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      getHomeGoods('pop', 1).then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: #ff617f;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .home-swiper{
    margin-top: 44px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
