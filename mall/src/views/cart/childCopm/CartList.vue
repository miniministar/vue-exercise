<template>
  <div class="cart-list-wrap">
    <cart-list-item :cartList="cartList"></cart-list-item>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import CartListItem from './CartListItem.vue'
  export default {
    name: "CartList",
    computed: {
      cartList() {
        return this.$store.state.cartList;
      }
    },
    components:{
      Scroll,

      CartListItem
    }
  }
</script>

<style lang="less" scoped="scoped">
  .cart-list-wrap {
    background-color: #fff;
  }
</style>
