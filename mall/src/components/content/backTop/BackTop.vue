<template>
  <div class="back-top">
    <img src="~assets/img/back-top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods:{
      // backClick() {
      //   this.$emit('backClick')
      // }
    }
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    bottom: 55px;
    right: 10px;
  }
  .back-top img {
    width: 37px;
    height: 37px;
  }
</style>
