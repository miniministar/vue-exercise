import {
  ADDCOUNTER,
  ADDTOCART
}from './mutation.type.js'

export default {
  //mutations中的每一个方法尽可能完成时间比较单一一点
  [ADDCOUNTER](state, payload) {
    payload.count++
  },
  [ADDTOCART](state, payload) {
    state.cartList.push(payload)
  }
}
