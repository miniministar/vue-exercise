import Vue from 'vue'
import App from './App'
//如果导入的是目录，会自动导入该目录下的index.js文件
import router from './router'

Vue.config.productionTip = false
console.log(App);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render函数原理
  // render: h => h(App)
//   render: function (createElement) {
// //1.createElement('标签', {标签属性}， [])
// //     return createElement('h2', {class: 'box'}, ['hello world'])
// //     1.普通用法
// //     return createElement(
// //       'h2',
// //       {class: 'box'},
// //       ['hello world', createElement('button',['按钮'])]
// //     )
// //     2.传入组件
//     return createElement(App)
//   }
  render: function (h) {
    return h(App)
  },
  //挂载router
  router
})

//.vue文件 中的template是由谁处理的
//由vue-template-compiler解析为render函数
