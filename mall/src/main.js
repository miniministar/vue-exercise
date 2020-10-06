import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false
//0、vue默认没有事件总线，用vue实例声明事件总线
Vue.prototype.$bus = new Vue()

//安装插件
Vue.use(toast)

Vue.use(VueLazyload, {
  loading: require('./assets/img/common/pleaseholder.svg')
})

//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
