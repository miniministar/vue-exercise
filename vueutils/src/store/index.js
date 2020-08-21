import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'

//1、安装插件
Vue.use(vuex)

// 2、创建对象
const  state  = {
  counter: 1000,
  info:{
    name: 'info'
  }
}

const store = new vuex.Store({
  //定义组件间共享的状态
  state,
  //通过mutations修改store
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA
  }
});

//3、导出store
export default store
