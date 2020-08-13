<template>
  <div>
    <h2>用户-{{userId}}</h2>
    <p>用户信息</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId(){
        //this.$route 当前活跃的路由对象
        return this.$route.params.userId;
      }
    }
  }
</script>

<style scoped>

</style>
