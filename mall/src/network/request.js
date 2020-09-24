import Vue from 'vue'
import VueCooKies from 'vue-cookies'
Vue.use(VueCooKies)

import axios from 'axios'

axios.defaults.crossDomain = true;
// axios.defaults.withCredentials  = true;
// Vue.$cookies.set("__mgjuuid", "3e482381-6a92-4853-a140-76c06279731a");
// Vue.$cookies.set("FRMS_FINGERPRINTN", "_51veHI3TjmsSvMSjwKUVw");
// Vue.$cookies.set("_mwp_h5_token_enc", "8f5d43120a00c306538ad4268ad5223f");
// Vue.$cookies.set("_mwp_h5_token", "1f2d8a7b83f0d8ee8b8ee827f5bdfba4_1600610853132");
// Vue.$cookies.set("_ga", "GA1.2.1520040884.1600612476");
// Vue.$cookies.set("_gid", "GA1.2.1626987880.1600612476");
console.log(document.cookie);

// 1.2 最终版本
export function request(config) {
  //1.创建axios实例
  const  instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios的拦截器
  instance.interceptors.response.use(res=>{
    return res.data
  }, err => {
    console.log(err);
  })
  //返回promise
  return instance(config)
}


export function MoguPost(config) {
  //1.创建axios实例
  const  instance = axios.create({
    baseURL: 'http://192.168.124.17:8085',
    timeout: 5000,
  })

  //2.axios的拦截器
  instance.interceptors.request.use(config=>{
    // const params = config.params
    // if(!params.data) {
    //   params.data = {
    //     "page":1
    //   }
    // }
    // params.data.pageSize = 24
    // params.data.sort = "pop"
    // config.data = params
    return config
  })

  instance.interceptors.response.use(res=>{
    // console.log(res);
    const str = JSON.parse(res.data.substr(11, res.data.length - 13));
    if(str.result && str.result.wall && str.result.wall.docs) {
      return str.result.wall.docs;
    }else {
      return [];
    }
  }, err => {
    console.log(err);
  })
  //返回promise
  return instance(config)
}
