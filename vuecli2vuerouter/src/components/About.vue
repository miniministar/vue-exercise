<template>
  <div>
    <h2>我是about</h2>
    <p>about内容</p>
  </div>
</template>

<script>
  export default {
    name: "About.vue",
    beforeRouteEnter (to, from, next) {
      console.log('about.vue 组件内守卫');
      next()
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
    },
  }
</script>

<style scoped>

</style>
