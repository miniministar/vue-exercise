<template>
  <div id="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
      <!-- 购物车bar -->
    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bot-bar></cart-bot-bar>
  </div>
</template>

<script>
  import {initCartProducts} from "network/detail"

  import {imgRefrashMixin} from "common/mixins"

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import CartList from './childCopm/CartList'
  import CartBotBar from './childCopm/CartBotBar'

  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    mixins: [imgRefrashMixin],
    components: {
      NavBar,
      Scroll,

      CartList,
      CartBotBar
    },
    mounted(){
      // this.initCartProducts()
    },
    deactivated() {
      //取消全局事件的监听
      this.$bus.$off('itemImgLoad', this.itemImgLister)
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    computed: {
       //使用 mapGetters：方式一数组
      ...mapGetters(['cartLength'])
       //使用 mapGetters：方式二对象
      // ...mapGetters({
      //   length: 'cartLength',
      //   cartLength: 'cartLength'
      // })
    },
    methods: {
      initCartProducts() {
        let products = initCartProducts();
        for (let i = 0; i <products.length; i++) {
          this.$store.dispatch('addCart', products[i])
        }
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
  .cart-nav {
    color: #fff;
    background-color: var(--color-high-text);
  }
  #cart{
    position: relative;
    height: 100vh;
  }
  .content{
    /*height: calc(100% - 135px);*/
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 91px;
  }
</style>
