;
// 1、导入方式一
import {flag, sum} from "./esExport.js";
if(flag) {
  console.log('使用exExport.js中的flag');
  console.log(sum(22, 11));
}
import {num1, num2} from "./esExport.js";
console.log(num1);
console.log(num2);
import {mul, Person} from "./esExport.js";
console.log(mul(1, 1));
new Person().run();

// import addr from './esExport.js';
// console.log(addr);
import addr from './esExport.js';
addr('export default');

// 5、统一全部导入
import * as aaa from './esExport.js';
console.log(aaa.flag);