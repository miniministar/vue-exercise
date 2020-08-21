import {INCREMENT} from '@/store/mutation.type.js'

const mutations = {
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
}

export default mutations;
