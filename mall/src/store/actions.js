import {
  ADDCOUNTER,
  ADDTOCART
}from './mutation.type.js'

export default {
    addCart(context, payload) {
      return new Promise((resolve , reject)=>{
        let oldProduct = context.state.cartList.find(function(item){
          return item.iid === payload.iid
        })
        if(oldProduct){
          // oldProduct.count += 1;
          context.commit(ADDCOUNTER, oldProduct)
        }else {
          payload.count = 1;
          payload.checked = true;
          // state.cartList.push(payload)
          context.commit(ADDTOCART, payload)
        }
        resolve(payload.title + '数量+1')
      })
    }
  }
