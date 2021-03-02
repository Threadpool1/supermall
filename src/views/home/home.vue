<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="contentScroll"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="home-tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import {getHomeMultidata,getHomeGoods} from "network/home"

export default {
    name: "home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    created() {

      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      console.log("...打印"+this.$refs.scroll);
      const refresh = this.debounce(this.$refs.scroll.refresh,200)
      //监听事件总线事件
      this.$bus.$on('ItemImageLoad',() =>{
        //刷新
        // this.$refs.scroll.refresh()
        refresh()
      })
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      /*
      * 事件监听相关的方法
      * */
      //防抖函数
      debounce(func, delay){
        let timer = null
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          },delay)
        }
      },

      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },
      //500ms内回到顶部
      backClick(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      //当滑动大于800时隐藏BackTop
      contentScroll(position){
        this.isShowBackTop = Math.abs(position.y) > 800
      },
      //上拉加载更多
      loadMore(){
        this.getHomeGoods(this.currentType)
        //更新上拉加载事件
        this.$refs.scroll.finishPullUp()
      },
      /*
      * 网络请求相关的方法
      * */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners =res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    },
    components:{
      NavBar: () => import('components/common/navbar/NavBar'),
      TabControl: () => import('components/content/tabControl/TabControl'),
      GoodsList: () => import('components/content/good/GoodsList'),
      Scroll: () => import('components/common/scroll/Scroll'),
      BackTop: () => import('components/content/backtop/BackTop'),

      HomeSwiper: () => import('./childComps/HomeSwiper'),
      HomeRecommendView: () => import('./childComps/HomeRecommendView'),
      FeatureView: () => import('./childComps/FeatureView')
    }
}
</script>

<style>
#home{
  padding-top: 44px ;
  height: 100vh;
}
.home-nav{
  color: white;
  background: var(--color-tint);

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.home-tab-control{
  /*粘顶属性*/
  /*position: sticky;*/
  top: 44px;
  background: white;
  z-index: 9;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
/*.content{*/
/*  height: calc(100% - 49px);*/
/*}*/
</style>
