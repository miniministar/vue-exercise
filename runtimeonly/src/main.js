import Vue from 'vue'
import App from './App'

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
  }
})

//.vue文件 中的template是由谁处理的
//由vue-template-compiler解析为render函数
