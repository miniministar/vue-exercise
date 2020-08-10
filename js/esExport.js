;
var name = '小明';
var age = 18;
var flag = true;
function sum(num1, num2) {
  return num1 + num2;
}
if(flag) {
  console.log(sum(1, 2));
}
// 1、导出方式一
export {
  flag, sum
}
// 2、导出方式二
export var num1 = 1000;
export var num2 = 2;
// 3、导出函数、类,类就是函数
export function mul(num1, num2) {
  return num1 + num2;
}
// ES6中的类
export class Person {
  run(){
    console.log('running');
  }
}
// 4、export default, 只能一个
const address = '北京市'
// export default address;
export default function (arg) {
  console.log(arg);
}
