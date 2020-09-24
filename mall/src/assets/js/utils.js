/**
 * 定义防抖动函数，防止函数调用频繁，图片加载完成后，再进行重新计算高度的刷新
 */
export  function debounce(func, delay) {
  let timer;
  return function(...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
