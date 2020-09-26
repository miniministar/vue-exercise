import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//0、vue默认没有事件总线，用vue实例声明事件总线
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
