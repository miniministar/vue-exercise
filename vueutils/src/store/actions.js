const actions = {
  decrement1(context, payload){
    // 异步操作不在mutation中操作，在action中操作
    //通过dispatch调用
    // setTimeout(()=>{
    //   context.commit('decrement')
    //   console.log(payload.message);
    //   payload.success();
    // }, 1000)
    return new Promise((resolve , reject)=>{
      setTimeout(()=>{
        context.commit('decrement')
        console.log(payload);
        resolve('1111')
      }, 1000)
    })
  }
}

export default actions
