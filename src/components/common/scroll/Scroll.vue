<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: "Scroll",
  props: {
    //传入参数probeType,设置scroll是否监听滚动事件，0，1不监听，2监听但不监听滑动之后的，3监听
    probeType:{
      type: Number,
      default: 0
    },
    //是否监听上拉事件
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })
    //实时监听滚动的位置，并且向父组件返回事件
    this.scroll.on('scroll', (position) =>{
      this.$emit('scroll', position)
    })
    //监听上拉事件，并且向父组件返回事件
    this.scroll.on('pullingUp',() =>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    //回到顶部
    scrollTo(x,y,time = 500){
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    //更新上拉事件
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    //刷新
    refresh(){
      console.log("图片加载完成");
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.wrapper{
  overflow: hidden;
}
</style>
