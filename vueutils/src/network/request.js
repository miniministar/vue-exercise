import axios from 'axios'

// 1.2 最终版本
export function request(config) {
  //1.创建axios实例
  const  instance = axios.create({
    baseURL: 'http://www.nanxiang.com/NMIS',
    timeout: 5000
  })
//返回promise
  return instance(config)
}

// 1.1
// export function request(config) {
//   //1.创建axios实例
//   const  instance = axios.create({
//     baseURL: 'http://www.nanxiang.com',
//     timeout: 5000
//   })
//
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     }).catch(err=>{
//     config.failure(err)
//   })
// }

// 1.0
// export function request(config, success, failure) {
//   //1.创建axios实例
//   const  instance = axios.create({
//     baseURL: 'http://www.nanxiang.com',
//     timeout: 5000
//   })
//
//   instance(config)
//     .then(res => {
//       success(res)
//   }).catch(err=>{
//     failure(err)
//   })
// }



