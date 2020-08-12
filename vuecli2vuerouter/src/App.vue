<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: '张三', age: 18} }" >档案</router-link>
<!--    <button @click="profileClick">档案</button>-->
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 2,
    }
  },
  methods: {
    homeClick(){
      //路由由代码跳转
      // this.$router.push('/home');
      //路由中的router对象
      this.$router.replace('/home');
      console.log('homeclick');
    },
    aboutClick(){
      // this.$router.push('/about');
      this.$router.replace('/about');
      console.log('aboutclick');
    },
    profileClick(){
      this.$router.push({
        path: 'profile',
        query: {
          name: '李四',
          age: 18
        }
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
  .router-link-active, .active{
    color: #f00;
  }
</style>
