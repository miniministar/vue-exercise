<template>
  <div id="app">
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>

  import MainTabbar from './components/MainTabbar';

export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
  /*引用其他css*/
  @import "./assets/css/base.css";
</style>
