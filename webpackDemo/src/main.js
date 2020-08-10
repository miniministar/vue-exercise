import {sum} from './js/mathUtils.js';

console.log(sum(1, 2, 3));

import {name,age,message} from "./js/info.js";
console.log(name, age, message);

// 3、依赖css文件
require('./css/normal.css');
// import style from './css/normal.css';

// 4、依赖less文件
// require('./css/special.less');