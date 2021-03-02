<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
export default {
  name:"app",
  data() {
    return {

    }
  },
  components:{
   MainTabBar: () => import("components/content/MainTabBar")
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
