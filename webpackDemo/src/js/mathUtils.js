// function sum(num1, num2) {
//   console.log('2个参数');
//   return num1 + num2
// }
function sum(...num) {
  console.log('可变参数');
  return  num.reduce((pre, cur)=> pre + cur, 0);
}

export {sum}