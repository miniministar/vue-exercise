<template>
  <div class="detail-shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="flex shop-name-info">
      <img :src="shop.shopLogo" alt="" class="shop-img">
      <div>{{shop.name}}</div>
    </div>
    <div class="flex shop-other-info">
      <div class="flex shop-other-item shop-other-sell">
        <div>
          <p class="f16">{{shop.cSells}}</p>
          <p>总销量</p>
        </div>
        <div>
          <p class="f16">{{shop.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop-other-item shop-other-right">
        <div v-for="item in shop.score">
          {{item.name}}&ensp;
          <span class="score" :class="{active: !item.isBetter}">{{item.score}}</span>
          <span class="score-bg" :class="{active: !item.isBetter}">{{item.isBetter? '低' : '高'}}</span>
        </div>
      </div>
    </div>
    <div class="enter-shop-wrap">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .f16 {
    font-size: 16px;
  }
  .shop-name-info {
    align-items: center;
    margin: 20px 10px;
  }
  .shop-img {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .shop-other-info {
    font-size: 12px;
    align-items: center;
    line-height: 22px;
  }
  .shop-other-item {
    flex: 1;
  }
  .shop-other-sell {
    border-right: 1px solid #ececec;
  }
  .shop-other-sell div{
    flex: 1;
    text-align: center;
  }
  .shop-other-right {
    padding-left: 40px;
    border-left: 1px solid #c9c9c9;
  }
  .score {
    display: inline-block;
    width: 30px;
    color: #006666;
  }
  .score.active{
    color: var(--color-high-text);
  }
  .score-bg {
    background-color: #006666;
    color: #fff;
    padding: 1px 4px;
    font-size: 12px;
  }
  .score-bg.active{
    background-color: var(--color-high-text);;
  }
  .enter-shop-wrap{
    text-align: center;
  }
  .enter-shop {
    display: inline-block;
    background-color: #f2f2f2;
    font-size: 12px;
    padding: 6px 30px;
    border-radius: 100px;
    margin: 10px;
  }
</style>
