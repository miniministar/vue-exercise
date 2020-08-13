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
    name: "Profile",
    created() {
      console.log('profile created');
    },
    destroyed() {
      console.log('profile destroyed');
    }
  }
</script>

<style scoped>

</style>
