<template>
  <div class="goods-list-item">
    <img class="goods-list-img" :src="goodsItem.img" alt="" @load="imageLoad">
    <div class="info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">
        {{goodsItem.cfav}}
        <span class="collect-icon"></span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      imageLoad() {
        this.$emit('imageLoad');
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    width: 49%;
    height: auto;
    padding-top: 6px;
    font-size: 14px;
  }
  .goods-list-img{
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
  .goods-list-item .info {
    margin: 6px;
  }
  .goods-list-item .title {
    width: 100%;
    color: #333;
    overflow: hidden;
    text-overflow: -o-ellipsis-lastline;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .goods-list-item .price {
    display: flex;
    justify-content: space-between;
    margin: 6px 0;
    font-weight: 700;
    color: #333;
    float: left;
  }
  .goods-list-item .collect{
    display: inline-block;
    height: 20px;
    float: right;
    color: #999;
    overflow: hidden;
    max-width: 45%;
    line-height: 20px;
    margin-top: 3px;
    vertical-align: bottom;
  }

.goods-list-item  .collect-icon{
  height: 20px;
  width: 20px;
  display: inline-block;
  vertical-align: bottom;
  background: url("~@/assets/img/home/collect_icon.png") center right no-repeat;
  background-size: auto 1rem;
}
</style>
