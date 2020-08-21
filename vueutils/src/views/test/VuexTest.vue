<template>
  <div>
      <h2>----vuex modules-----</h2>
      <p>{{$store.state.a.name}}</p>
      <button @click="updateName">update module mutation</button>
      <h2>----vuex parent component-----</h2>
      <p>getters相关信息 | {{$store.state.info.text}}</p>
      <h2>{{$store.getters.powerCounter}}</h2>
      <h2>{{$store.state.counter}}</h2>
      <button @click="add">+</button>
      <button @click="sub">-</button>
      <vuex-test-child></vuex-test-child>
  </div>
</template>

<script>
  import VuexTestChild  from './VuexTestChild'

  //普通导入
  import {INCREMENT} from '@/store/mutation.type.js'

  //这种导入不好，依赖太强
  // import axios from 'axios'
  import {request} from '@/network/request'

  // import store from '@store'
  export default {
    name: "VuexTest",
    components:{
      VuexTestChild
    },
    data(){
      return {
      }
    },
    methods:{
      add(){
        //通过commit提交store中的mutations
        // this.$store.commit('increment')
        this.$store.commit(INCREMENT)
      },
      sub(){
        //通过commit提交store中的mutations
        // this.$store.commit('decrement')
        // this.$store.dispatch('decrement1', {
        //   message:'我携带的信息',
        //   success:()=>{
        //     console.log('里面已经完成');
        //   }
        // })
        this.$store.dispatch('decrement1','我携带的信息').then(
          res =>{
            console.log('里面已经完成');
          }
        )
      },
      updateName(){
        this.$store.commit('updateName')
      }
    },
    created() {
      // axios({
      //   url:'http://www.nanxiang.com/NMIS/indexAPI/teacher'
      // }).then(res=>{
      //   console.log(res);
      // })
      // 1.0
      // request({url: '/indexAPI/teacher'}, function (res) {
      //   console.log(res);
      // })
      // 1.1
      // request({
      //   baseConfig: {url: '/indexAPI/teacher'},
      //   success:function (res) {
      //     console.log(res);
      //   },
      //   failure: function (err) {
      //     console.log(err);
      //   }
      // })
      // 1.2
      request({
        url: '/indexAPI/teacher'
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
</script>

<style scoped>

</style>
