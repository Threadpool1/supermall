<template>
  <TabBar>
      <TabBarItem path='/home'>
        <img src="~assets/img/tabbar/home.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="imgActive">
        <div slot="text">首页</div>
      </TabBarItem>
      <TabBarItem path='/category'>
        <img src="~assets/img/tabbar/category.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="imgActive">
        <div slot="text">分类</div>
      </TabBarItem>
      <TabBarItem path='/cart'>
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="imgActive">
        <div slot="text">购物车</div>
      </TabBarItem>
      <TabBarItem path='/profile'>
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="imgActive">
        <div slot="text">我的</div>
      </TabBarItem>
    </TabBar>
</template>

<script>
export default {
    name: 'MainTabBar',
    components: {
      'TabBar': () => import('components/common/tabbar/TabBar'),
      'TabBarItem': () => import('components/common/tabbar/TabBarItem')
    }
}
</script>

<style>

</style>