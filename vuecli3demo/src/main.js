import Vue from 'vue'
import App from './App.vue'
import {num2} from "../../js/esExport";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// 1、直接定义函数
function func1() {}
//2、在对象变量中定义函数
var obj = {
  func2: function(){},
  //2.2 es6的增强写法
  func3(){}
}
// 3、在ES6中定义箭头函数
// const fun4 = (参数列表) => {}
const fun4 =() =>{
  console.log('无参数和返回值');
}
fun4();
const sum = (num1, num2) => {
  return num1 + num2;
}
sum(1,3);
//3.1、一个参数式小括号可以省略
const power = num =>{
  return num * num;
}
console.log(power(2));
//3.2、在函数代码块中只有一行代码时
const mul = (num1, num2) => num1 * num2;
console.log(mul(2, 3));

// 4、使用箭头函数的场景, 当使用函数作为参数传入函数式，使用箭头函数更加简洁
// 箭头函数中的this引用的是最近作用域的this
// 箭头函数中的this是如何查找的， 向外层中一层一层查找，直到有this的定义
setTimeout(function(){
  console.log('setTimeout');
  console.log(this); //window
}, 100)
setTimeout(()=>{
  console.log('箭头函数作为参数');
  console.log(this);//window
}, 100);

const  obj2 = {
  aaa(){
    setTimeout(function(){
      console.log(this);//window
    },100)
    setTimeout(()=>{
      console.log(this);//obj
    },100)
  }
}
obj2.aaa();