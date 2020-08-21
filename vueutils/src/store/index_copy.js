import Vue from 'vue'
import vuex from 'vuex'
import {INCREMENT} from '@/store/mutation.type.js'

//1、安装插件
Vue.use(vuex)

// 2、创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = 'module a'
    }
  }
}
const store = new vuex.Store({
  //定义组件间共享的状态
  state: {
    counter: 1000,
    info:{
      name: 'info'
    }
  },
  //通过mutations修改store
  mutations:{
    //方法 使用变量定义方法名称
    [INCREMENT](state){
      state.counter++;
      //响应式新增属性
      Vue.set(state.info, 'text', 'vue set')
    },
    decrement(state){
      state.counter--;
      //响应式删除属性
      Vue.delete(state.info, 'text')
      // 错误代码：异步操作不在mutation中操作，在action中操作
      // setTimeout(()=>{
      //   state.counter--;
      // }, 1000)
    }
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter;
    }
  },
  actions:{
    decrement1(context, payload){
      // 异步操作不在mutation中操作，在action中操作
      //通过dispatch调用
      // setTimeout(()=>{
      //   context.commit('decrement')
      //   console.log(payload.message);
      //   payload.success();
      // }, 1000)
      return new Promise((resolve , reject)=>{
        setTimeout(()=>{
          context.commit('decrement')
          console.log(payload);
          resolve('1111')
        }, 1000)
      })
    }
  },
  modules: {
    a: moduleA
  }
});

//3、导出store
export default store

//es 6对象的解构
const obj = {
  name: 'lisi',
  age: 18,
  height: 1.88
}
// 按照key 解构，与顺序无关
const {name, age, height} = obj
console.log(name, age, height);
