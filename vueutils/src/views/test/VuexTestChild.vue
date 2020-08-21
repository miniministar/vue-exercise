<template>
    <div>
      <h2>----vuex child component-----</h2>
      {{$store.state.counter}}
    </div>
</template>

<script>
  export default {
    name: "VuexTestChild"
  }
</script>

<style scoped>

</style>
