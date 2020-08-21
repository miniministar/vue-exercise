import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //组件中通过$store使用store
  store,
  render: h => h(App)
})
