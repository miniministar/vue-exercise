import {request, requestMogu} from './request'

//请求多个数据（banner,类目）
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//请求商品数据
export function getHomeGoods(type, page) {
  return requestMogu({
    url: '/mogu/data',
    params: {
      data: {
        type,
        page
      }
    }
  })
}
