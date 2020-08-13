import {sum} from './js/mathUtils.js';

console.log(sum(1, 2, 3));

import {name,age,message} from "./js/info.js";
console.log(name, age, message);

// 3、依赖css文件
require('./css/normal.css');
// import style from './css/normal.css';

// 4、依赖less文件
// require('./css/special.less');

import Vue from 'vue';

// import App from './vue/app.js';
import App from './vue/App.vue';

new Vue({
  el:'#app',
  template: '<App/>',
  components: {
    App
  }
});