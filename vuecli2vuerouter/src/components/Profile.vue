<template>
  <div>
    <h2>我是profile</h2>
    {{$route.query}}
    <br>
    {{$route.query.name}}
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
