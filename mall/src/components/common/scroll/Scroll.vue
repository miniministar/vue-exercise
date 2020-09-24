<template>
<!--  ref 绑定子组件-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import {debounce} from 'assets/js/utils'

  export default {
    name: "Scroll",
    props:{
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: {}
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      const refresh = debounce(this.scroll.refresh, 100)
      this.$on('imageLoad', () => {
        refresh()
      })
      //监听位置
      if(this.probeType === 2 ||this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }
      //上拉加载更多
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', ()=>{
          this.$emit('pullingUp')
        })
      }
    },
    updated () {
      //解决better-scroll因为图片没有下载完导致的滚动条高度不够，无法浏览全部内容的问题。
      //原因是better-scroll初始化是在dom加载后执行，此时图片没有下载完成，导致滚动条高度计算不准确。
      //利用图片的complete属性进行判断，当所有图片下载完成后再对scroll重新计算。
      let img = this.$refs.wrapper.getElementsByTagName('img')
      let count = 0
      let length = img.length
      if (length) {
        let timer = setInterval(() => {
          if (count == length) {
            this.scroll.refresh()//bs提供的刷新的方法，详见官网
            clearInterval(timer)
          } else if (img[count].complete) {
            count ++
          }
        }, 100)
      }
    },
    methods:{
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    }

  }
</script>

<style scoped>
</style>
