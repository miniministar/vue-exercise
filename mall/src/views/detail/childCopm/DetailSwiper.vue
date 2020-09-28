<template>
  <swiper class="detail-swiper">
    <swiper-item class="swiper-item" v-for="item in banners">
        <img :src="item" alt="" @load="imageLoad">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        isLoad: false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad(){
        if(!this.isLoad) {
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>
