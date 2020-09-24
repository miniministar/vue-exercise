import {request, MoguPost} from './request'

//请求多个数据（banner,类目）
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//请求商品数据
export function getHomeGoods(type, page) {
  return MoguPost({
    url: '/mogu/listSearch',
    method: 'post',
    data: {
        sort: type,
        pageSize: 30,
        page: page
    }
  })
}
