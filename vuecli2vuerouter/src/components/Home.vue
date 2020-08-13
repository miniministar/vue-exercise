<template>
  <div>
    <h2>我是首页</h2>
    <p>首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    created() {
      console.log('home created');
      // this.$router.push('/home/news')
    },
    destroyed() {
      console.log('home destroy');
    },
    activated() {
      console.log('home active');
      // this.$router.push(this.path)
    }
  }
</script>

<style scoped>

</style>
