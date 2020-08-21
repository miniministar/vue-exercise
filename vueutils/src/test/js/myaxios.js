import axios from "axios";

axios({
  url:'http://www.nanxiang.com/NMIS/indexAPI/teacher',
  method:'get'
}).then(res=>{
  console.log(res);
})


axios({
  url:'http://www.nanxiang.com/NMIS/indexAPI/teacher',
  //专门针对get请求参数的拼接
  params:{
    teacher_id: 62,
    uid: 631,
    rid: 70,
    oid: 1
  }
}).then(res => {
  console.log(2, res);
})

axios.defaults.baseURL = 'http://www.nanxiang.com/NMIS'
//毫秒
axios.defaults.timeout = 5000
//2.axios发送并发请求
axios.all([
  axios({
    url:'/indexAPI/teacher'
  }), axios({
    url:'/indexAPI/teacher',
    params:{
      teacher_id: 62,
      uid: 631,
      rid: 70,
      oid: 1
    }
  })
// ]).then( results =>{
//   //返回值为数组
//   console.log(results);
// });
]).then( axios.spread((res1, res2) =>{
  //返回值的延展
  console.log(res1);
  console.log(res2);
}) )

//创建axios实例,每一个实例都有自己的配置
const instance1 = axios.create({
  baseURL: 'http://www.nanxiang.com/NMIS',
  timeout: 5000
})

instance1({
  url:'/indexAPI/teacher',
}).then(res => {
  console.log(3, "instance1");
})
