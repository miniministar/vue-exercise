<template>
  <div class="goods-list-item" @click="itemClick">
<!--    <img class="goods-list-img" :src="goodsImage" alt="" @load="imageLoad">-->
    <img class="goods-list-img" v-lazy="goodsImage" alt="" @load="imageLoad">
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
      imageLoad(event) {
        // console.log(event);
        this.$emit('itemImgLoad');
        //事件总线发射事件
        this.$bus.$emit('itemImgLoad')
      },
      itemClick(){
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    },
    computed: {
      goodsImage() {
        return this.goodsItem.img ? this.goodsItem.img : this.goodsItem.image
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
  background: url("~assets/img/home/collect_icon.png") center right no-repeat;
  background-size: auto 1rem;
}
</style>
