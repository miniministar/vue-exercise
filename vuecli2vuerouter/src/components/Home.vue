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
    data() {
      return {
        path: '/home/news'
      }
    },
    created() {
      console.log('home created');
      // this.$router.push('/home/news')
    },
    destroyed() {
      console.log('home destroy');
    },
    //组件为keep-alive时才能使用actived这个回调
    activated() {
      console.log('home active');
      this.$router.push(this.path)
    },
    deactivated() {
      console.log('deactivated');
    },
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path);
      this.path = this.$route.path;
      next();
    }
  }
</script>

<style scoped>

</style>
