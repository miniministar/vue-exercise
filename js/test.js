;
var aaa = require('./moduleB.js');
console.log(aaa.flag);
aaa.show('common.js 导出 module.exports = {}, require 导入')

//将 moduleB.js中的flag, show解析给 当前的flag, show
let {flag , show} = require('./moduleB.js');