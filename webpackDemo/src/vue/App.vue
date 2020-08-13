<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  import Cpn from './Cpn';

  export default {
    name: 'App',
    components:{
      Cpn
    },
    data() {
      return {
        message: 'vue index'
      };
    },
    methods: {
      btnClick(){
        console.log('button click');
      }
    }
  }
</script>
<style scoped>
  .title{
    color: green;
  }
</style>