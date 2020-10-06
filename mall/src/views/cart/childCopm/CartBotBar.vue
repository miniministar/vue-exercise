<template>
  <div class="cart-bot-bar flex">
      <check-box class="check-box" :label="'全选'" :check="isCheck"  @clickCheckBox="clickCheckBox"></check-box>
<!--    <div><input type="checkbox" class="check" id="check">&ensp;<label for="check"> 全部</label> </div>-->
    <div>合计：{{totalPrice}}</div>
    <div class="calculate">去结算{{checkLength}}</div>
  </div>
</template>

<script>

  import CheckBox from 'components/common/checkBox/CheckBox'

  export default {
    name: 'CartBotBar',
    components: {
      CheckBox
    },
    computed: {
      totalPrice() {
        return '￥' + this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue+ item.price * item.count
        },0).toFixed(2)
      },
      checkLength() {
        return '(' + this.$store.state.cartList.filter(item => item.checked).length + ')';
      },
      isCheck() {
        if(this.$store.state.cartList.length == 0) return false
        return !this.$store.state.cartList.filter(item => !item.checked).length
      }
    },
    methods: {
      clickCheckBox(checked) {
        this.$store.state.cartList.forEach((product) => {
          product.checked = checked
        })
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
  .cart-bot-bar {
    position: fixed;
    bottom: 49px;
    left:0;
    right: 0;
    height: 40px;
    font-size: 13px;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #ececec;
    border-top: 1px solid #ececec;
    .check-box{
      padding-left: 10px;
    }
    .check {
      width: 18px;
      height: 18px;
      overflow: hidden;
      border-radius: 100%;
      vertical-align: bottom;
      border: 1px solid #ececec;
    }
    .check:checked {
      border: 1px solid var(----color-high-text);
      background: url(~assets/img/detail/check_active.png) no-repeat center;
      background-size: cover;
    }
    .calculate{
      background-color: var(--color-high-text);
      line-height: 40px;
      padding: 0 10px;
      color: #fff;
    }
  }
</style>
