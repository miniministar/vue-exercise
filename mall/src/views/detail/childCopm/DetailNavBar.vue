<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backFn">
        <img src="~assets/img/fanhui.png" alt="" class="back-icon">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="title-item"
             :class="{active: index == currentIndex}"
             @click="clickItem(index)"
        >
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods:{
      clickItem(index) {
        this.currentIndex = index
      },
      backFn() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 14px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .back-icon{
    width: 44px;
    height: 44px;
    vertical-align: middle;
  }
</style>
