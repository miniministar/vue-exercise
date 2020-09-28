<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :banners="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
  import {getDetail, GoodsInfo, Shop} from "network/detail"

  import DetailNavBar from './childCopm/DetailNavBar'
  import DetailSwiper from './childCopm/DetailSwiper'
  import DetailBaseInfo from './childCopm/DetailBaseInfo'
  import DetailShopInfo from './childCopm/DetailShopInfo'

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    data(){
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {}
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
        }
        // console.log(res, str);
      })
    }
  }
</script>

<style scoped>

</style>
